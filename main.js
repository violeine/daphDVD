let channelName = "39daph";
let DEBUG = false;
let urlParameters = {
	debug: {
		value: false,
		userProvided: false
	},
	speed: {
		value: 3,
		userProvided: false
	},
	ffzEmotes: {
		value: true,
		userProvided: false
	},
	bttvEmotes: {
		value: true,
		userProvided: false
	},
	_7tvEmotes: {
		value: true,
		userProvided: false
	},
	globalFfzEmotes: {
		value: false,
		userProvided: false
	},
	globalBttvEmotes: {
		value: false,
		userProvided: false
	},
	global7tvEmotes: {
		value: false,
		userProvided: false
	},
	blacklist: {
		value: [],
		userProvided: false
	}
}

const daphO = [
	"https://static-cdn.jtvnw.net/emoticons/v1/302071866/3.0", //daphBlind
	"https://static-cdn.jtvnw.net/emoticons/v1/304381627/3.0", //daphLurk
	"https://static-cdn.jtvnw.net/emoticons/v1/301171649/3.0", //daphO
	"https://static-cdn.jtvnw.net/emoticons/v1/302385634/3.0", //daphOU
	"https://static-cdn.jtvnw.net/emoticons/v1/304029245/3.0", //daphSlep
	"https://static-cdn.jtvnw.net/emoticons/v1/302419165/3.0", //daphSnot
	"https://static-cdn.jtvnw.net/emoticons/v1/304381619/3.0", //daphKnife
	"https://static-cdn.jtvnw.net/emoticons/v1/304739284/3.0", //daphPray
	"https://static-cdn.jtvnw.net/emoticons/v1/306762243/3.0", //daphHeart
	"https://static-cdn.jtvnw.net/emoticons/v1/306762263/3.0", //daphSociety
	"https://static-cdn.jtvnw.net/emoticons/v1/306762239/3.0", //daphBeg 
	"https://static-cdn.jtvnw.net/emoticons/v1/306762276/3.0", //daphPotion
	"https://static-cdn.jtvnw.net/emoticons/v1/306762237/3.0", //daphHead
	"https://static-cdn.jtvnw.net/emoticons/v1/306762274/3.0", //daphSip
	"https://static-cdn.jtvnw.net/emoticons/v1/306762267/3.0", //daphStealth
	"https://static-cdn.jtvnw.net/emoticons/v1/307608966/3.0", //daphLook
	"https://static-cdn.jtvnw.net/emoticons/v1/307608962/3.0", // daphPain
];

let Channel = {
	info: {
		id: 0,
		name: null,
		emotes: [],
	},

	loadEmotes: async function(channelID) {
		Channel.info.emotes = [];

		DEBUG && console.log("Loading FFZ emotes...");
		// Load FFZ emotes
		const ffzEndpoints = [];
		if(urlParameters.globalFfzEmotes.value) {
			ffzEndpoints.push("emotes/global");
		}

		if(urlParameters.ffzEmotes.value) {
			ffzEndpoints.push(`users/twitch/${encodeURIComponent(channelID)}`);
		}

		for (const endpoint of ffzEndpoints) {
			const json = await getJson(`https://api.betterttv.net/3/cached/frankerfacez/${endpoint}`);

			if(json.length == 0) {
				console.error("BTTV: No user found!");
				continue;
			}

			const isGlobal = endpoint == "emotes/global";

			json.forEach(emote => {
				let imageUrl = "";
				let upscale = false;

				if (emote.images["4x"]) {
					imageUrl = emote.images["4x"];
					upscale = false;
				} else {
					imageUrl = emote.images["2x"] || emote.images["1x"];
					upscale = true;
				}
	
				if(urlParameters.ffzEmotes.value) {
					if(!isGlobal) {
						Channel.info.emotes.push(imageUrl);
					}
				}
				else if(urlParameters.globalFfzEmotes.value) {
					if(isGlobal) {
						Channel.info.emotes.push(imageUrl);
					}
				}
			});

			DEBUG && console.log(`Loading FFZ ${endpoint}: done!`);
		}

		DEBUG && console.log("Loading BTTV emotes...");
		// Load BTTV emotes
		const bttvEndpoints = [];
		if(urlParameters.globalBttvEmotes.value) {
			bttvEndpoints.push("emotes/global");
		}

		if(urlParameters.bttvEmotes.value) {
			bttvEndpoints.push(`users/twitch/${encodeURIComponent(channelID)}`);
		}

		for (const endpoint of bttvEndpoints) {
			let json = await getJson(`https://api.betterttv.net/3/cached/${endpoint}`);

			if(json.message != undefined) {
				console.error("BTTV: " + json.message);
				continue;
			}

			const isGlobal = endpoint == "emotes/global";

			if (!Array.isArray(json)) {
				json = json.channelEmotes.concat(json.sharedEmotes);
			}

			json.forEach(emote => {
				if(urlParameters.bttvEmotes.value) {
					if(!isGlobal) {
						Channel.info.emotes.push(`https://cdn.betterttv.net/emote/${emote.id}/3x`);
					}
				}
				else if(urlParameters.globalBttvEmotes.value) {
					if(isGlobal) {
						Channel.info.emotes.push(`https://cdn.betterttv.net/emote/${emote.id}/3x`);
					}
				}
			});

			DEBUG && console.log(`Loading BTTV ${endpoint}: done!`);
		}

		DEBUG && console.log("Loading 7TV emotes...");
		// Load 7TV emotes
		const _7tvEndpoints = [];
		if(urlParameters.global7tvEmotes.value) {
			_7tvEndpoints.push("emotes/global");
		}

		if(urlParameters._7tvEmotes.value) {
			_7tvEndpoints.push(`users/${encodeURIComponent(channelID)}/emotes`);
		}

		for (const endpoint of _7tvEndpoints) {
			const json = await getJson(`https://api.7tv.app/v2/${endpoint}`);
			
			if(json.error != undefined) {
				console.error("7TV: " + json.error);
				continue;
			}

			const isGlobal = endpoint == "emotes/global";

			json.forEach(emote => {
				if(urlParameters._7tvEmotes.value) {
					if(!isGlobal) {
						Channel.info.emotes.push(emote.urls[emote.urls.length - 1][1]);
					}
				}
				else if(urlParameters.global7tvEmotes.value) {
					if(isGlobal) {
						Channel.info.emotes.push(emote.urls[emote.urls.length - 1][1]);
					}
				}
			});

			DEBUG && console.log(`Loading 7TV ${endpoint}: done!`);
		}

		DEBUG && console.log("Loading emotes: done!");
	},

	load: async function() {
		const channelID = await getJson(`https://decapi.me/twitch/id/${Channel.info.name}`);
		if(channelID.includes("User not found")) {
			return;
		}

		Channel.info.id = channelID;
		DEBUG && console.log(Channel.info.name + ": " + channelID);
		await Channel.loadEmotes(Channel.info.id);

		if(Channel.info.name == "39daph") {
			for(const index in daphO) {
				Channel.info.emotes.push(daphO[index]);
			}
		}

		DEBUG && console.log(Channel.info.emotes);

		dvd({
			speed: 100 * urlParameters.speed.value,
			bumpEdge: function () {
				console.log(Channel.info.emotes[Math.floor(Math.random() * Channel.info.emotes.length)]);
				document.querySelector(".daphO").src = Channel.info.emotes[Math.floor(Math.random() * Channel.info.emotes.length)];
			},
		});
	},

	init: function(channelName) {
		Channel.info.name = channelName;
		document.title = "DVD Overlay • " + channelName;

		let encodedUrlParameters = encodeUrlParameters(urlParameters);
		let urlParameterString = `${window.location.pathname}?channel=${channelName}${encodedUrlParameters == "" ? "" : "&"}${encodedUrlParameters}`;
	
		window.history.pushState(null, "", urlParameterString);

		Channel.load();
	}
};

// https://stackoverflow.com/questions/111529/how-to-create-query-parameters-in-javascript
function encodeUrlParameters(urlParameters) { 
    const encodedUrlParameters = [];
    for (const urlParameter in urlParameters) {
        if (urlParameters[urlParameter] && urlParameters[urlParameter].userProvided) {
            encodedUrlParameters.push(encodeURIComponent(urlParameter.replace("_", "")) + '=' + encodeURIComponent(urlParameters[urlParameter].value));
		}
    }
    return encodedUrlParameters.join('&');
}

const getJson = (url) => fetch(url, { method: "GET" }).then(async (response) => {
	const contentType = response.headers.get("Content-Type");
	if (contentType.includes("text/plain")) {
		const text = await response.text();
		return text;
	} else if (contentType.includes("application/json")) {
		return await response.json();
	}
}).catch((error) => {
	console.error(error);
	return {};
});

const onReady = (callback) => {
	if (document.readyState != "loading") {
		callback();
	}
	else if (document.addEventListener) {
		document.addEventListener("DOMContentLoaded", callback);
	}
	else {
		document.attachEvent("onreadystatechange", function() {
			if (document.readyState == "complete") {
				callback();
			}
		});
	}
};

function dvd(option) {
	const marquee = document.querySelector(".marquee");
	const container = marquee.parentElement;
	const defaultSettings = {
		horizontal: true,
		vertical: true,
		speed: 100,
		bumpEdge: function () { },
 	};

	const settings = {
		...defaultSettings,
		...option,
	};

	const move = {
		up: function () {
			marquee.animate(
				[
					// keyframes
					{ top: `${container.offsetHeight - marquee.offsetHeight}px` },
					{ top: 0 },
				],
				{
					// timing options
					duration: (container.offsetHeight / settings.speed) * 1000,
					easing: "linear",
				}
			).onfinish = function () {
				settings.bumpEdge();
				move.down();
			};
		},
		down: function () {
			marquee.animate(
				[
					// keyframes
					{ top: 0 },
					{ top: `${container.offsetHeight - marquee.offsetHeight}px` },
				],
				{
					// timing options
					duration: (container.offsetHeight / settings.speed) * 1000,
					easing: "linear",
				}
			).onfinish = function () {
				settings.bumpEdge();
				move.up();
			};
		},
		right: function () {
			marquee.animate(
				[
					{ left: 0 },
					{ left: `${container.offsetWidth - marquee.offsetWidth}px` },
				],
				{
					duration: (container.offsetWidth / settings.speed) * 1000,
					easing: "linear",
				}
			).onfinish = function () {
				settings.bumpEdge();
				move.left();
			};
		},
		left: function () {
			marquee.animate(
				[
					{ left: `${container.offsetWidth - marquee.offsetWidth}px` },
					{ left: 0 },
				],
				{
					duration: (container.offsetWidth / settings.speed) * 1000,
					easing: "linear",
				}
			).onfinish = function () {
				settings.bumpEdge();
				move.right();
			};
		},
	};

	if (settings.horizontal) {
		move.right();
	}
	if (settings.vertical) {
		move.down();
	}
}

onReady(() => { 
	searchParameters = new URLSearchParams(window.location.search);
	
	if(searchParameters.has("channel")) {
		channelName = searchParameters.get("channel");
	}

	if(searchParameters.has("speed")) {
		urlParameters.debug.userProvided = true;
		urlParameters.debug.value = parseInt(searchParameters.get("debug"), 10);
	}

	if(searchParameters.has("debug")) {
		urlParameters.debug.userProvided = true;
		DEBUG = searchParameters.get("debug");
		urlParameters.debug.value = searchParameters.get("debug").toLowerCase() == "true";
	}

	if(searchParameters.has("ffzEmotes")) {
		urlParameters.ffzEmotes.userProvided = true;
		urlParameters.ffzEmotes.value = searchParameters.get("ffzEmotes").toLowerCase() == "true";
	}

	if(searchParameters.has("bttvEmotes")) {
		urlParameters.bttvEmotes.userProvided = true;
		urlParameters.bttvEmotes.value = searchParameters.get("bttvEmotes").toLowerCase() == "true";
	}

	if(searchParameters.has("7tvEmotes")) {
		urlParameters._7tvEmotes.userProvided = true;
		urlParameters._7tvEmotes.value = searchParameters.get("7tvEmotes").toLowerCase() == "true";
	}

	if(searchParameters.has("globalFfzEmotes")) {
		urlParameters.globalFfzEmotes.userProvided = true;
		urlParameters.globalFfzEmotes.value = searchParameters.get("globalFfzEmotes").toLowerCase() == "true";
	}

	if(searchParameters.has("globalBttvEmotes")) {
		urlParameters.globalBttvEmotes.userProvided = true;
		urlParameters.globalBttvEmotes.value = searchParameters.get("globalBttvEmotes").toLowerCase() == "true";
	}

	if(searchParameters.has("global7tvEmotes")) {
		urlParameters.global7tvEmotes.userProvided = true;
		urlParameters.global7tvEmotes.value = searchParameters.get("global7tvEmotes").toLowerCase() == "true";
	}

	if(searchParameters.has("blacklist")) {
		urlParameters.blacklist.userProvided = true;
		urlParameters.blacklist.value = searchParameters.get("blacklist");
	}

	Channel.init(channelName);
});
