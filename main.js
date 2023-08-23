let channelName = "HAchubby";
let DEBUG = false;

const providers = ["Twitch", "7TV", "BTTV", "FFZ"];
const providerIds = {
	"Twitch": 0,
	"_7TV": 1,
	"BTTV": 2,
	"FFZ": 3
};

const urlParameters = {
	debug: {
		value: false,
		userProvided: false
	},
	speed: {
		value: 3,
		userProvided: false
	},
	twitchEmotes: {
		value: true,
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
	globalTwitchEmotes: {
		value: false,
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

let Channel = {
	info: {
		id: 0,
		name: null,
		emotes: []
	},

	initId: async function() {
		const channelID = await getJson(`https://decapi.me/twitch/id/${Channel.info.name}`);
		if(channelID.includes("User not found")) {
			return;
		}

		Channel.info.id = channelID;
		DEBUG && console.log(Channel.info.name + ": " + channelID);
	},

	loadAllEmotes: async function() {
		DEBUG && console.log("[Adamci API] Loading All Emotes...");

		const twitchEndpoints = [];
		twitchEndpoints.push("global/emotes/all");
		twitchEndpoints.push(`channel/${encodeURIComponent(Channel.info.name)}/emotes/all`);

		for (const endpoint of twitchEndpoints) {
			const json = await getJson(`https://emotes.adamcy.pl/v1/${endpoint}`);

			if(json.error != undefined) {
				console.error(`[Adamci API] ${endpoint}: ${json.error}`);
				continue;
			}

			if(json.length == 0) {
				console.error(`[Adamci API] ${endpoint}: No Emotes found!`);
				continue;
			}

			const isGlobal = endpoint.includes("global/emotes");
			const globalString = isGlobal ? "/GLOBAL" : "";

			json.forEach(emote => {
				if(urlParameters.blacklist.value.includes(emote.code)) {
					return;
				}

				const providerName = providers[emote.provider];

				switch(emote.provider) {
					case providerIds.Twitch: 
						if (isGlobal) {
							if (!urlParameters.globalTwitchEmotes.value) {
								return;
							}
						}
						else {
							if (!urlParameters.twitchEmotes.value) {
								return;
							}
						}
						break;
					case providerIds.FFZ: 
						if (isGlobal) {
							if (!urlParameters.globalFfzEmotes.value) {
								return;
							}
						}
						else {
							if (!urlParameters.ffzEmotes.value) {
								return;
							}
						}
						break;
					case providerIds.BTTV: 
						if (isGlobal) {
							if (!urlParameters.globalBttvEmotes.value) {
								return;
							}
						}
						else {
							if (!urlParameters.bttvEmotes.value) {
								return;
							}
						}
						break;
					case providerIds._7TV: 
						if (isGlobal) {
							if (!urlParameters.global7tvEmotes.value) {
								return;
							}
						}
						else {
							if (!urlParameters._7tvEmotes.value) {
								return;
							}
						}
						break;
				}

				let imageUrl = emote.urls.slice(-1)[0].url;

				Channel.info.emotes.push(imageUrl);

				DEBUG && console.log(`[Adamci API/${providerName}${globalString}] ${emote.code}: ${imageUrl}`);
			});

			DEBUG && console.log(`[Adamci API${globalString}] Done!`);
		}
	},

	loadTwitchEmotes: async function() {
		DEBUG && console.log("[Twitch] Loading emotes...");

		const twitchEndpoints = [];
		if(urlParameters.globalTwitchEmotes.value) {
			twitchEndpoints.push("global/emotes/twitch");
		}

		if(urlParameters.twitchEmotes.value) {
			twitchEndpoints.push(`channel/${encodeURIComponent(Channel.info.name)}/emotes/twitch`);
		}

		for (const endpoint of twitchEndpoints) {
			const json = await getJson(`https://emotes.adamcy.pl/v1/${endpoint}`);

			if(json.error != undefined) {
				console.error(`[Twitch] ${json.error}`);
				continue;
			}

			if(json.length == 0) {
				console.error("[Twitch] No emotes found!");
				continue;
			}

			const isGlobal = endpoint == "global/emotes/twitch";
			const globalString = isGlobal ? "/GLOBAL" : "";

			json.forEach(emote => {
				if(urlParameters.blacklist.value.includes(emote.code)) {
					return;
				}

				let imageUrl = emote.urls.slice(-1)[0].url;

				Channel.info.emotes.push(imageUrl);

				DEBUG && console.log(`[Twitch${globalString}] ${emote.code}: ${imageUrl}`);
			});

			DEBUG && console.log(`[Twitch${globalString}] Done!`);
		}
	},

	loadFfzEmotes: async function() {
		DEBUG && console.log("[BTTV/FFZ] Loading emotes...");

		const ffzEndpoints = [];
		if(urlParameters.globalFfzEmotes.value) {
			ffzEndpoints.push("emotes/global");
		}

		if(urlParameters.ffzEmotes.value) {
			ffzEndpoints.push(`users/twitch/${encodeURIComponent(Channel.info.id)}`);
		}

		for (const endpoint of ffzEndpoints) {
			const json = await getJson(`https://api.betterttv.net/3/cached/frankerfacez/${endpoint}`);

			if(json.length == 0) {
				console.error("[BTTV/FFZ] No user found!");
				continue;
			}

			const isGlobal = endpoint == "emotes/global";
			const globalString = isGlobal ? "/GLOBAL" : "";

			json.forEach(emote => {
				if(urlParameters.blacklist.value.includes(emote.code)) {
					return;
				}

				let imageUrl = emote.images["4x"] || emote.images["3x"] || emote.images["2x"] || emote.images["1x"];

				Channel.info.emotes.push(imageUrl);

				DEBUG && console.log(`[BTTV/FFZ${globalString}] ${emote.code}: ${imageUrl}`);
			});

			DEBUG && console.log(`[BTTV/FFZ${globalString}] Done!`);
		}
	},

	loadBttvEmotes: async function() {
		DEBUG && console.log("[BTTV] Loading emotes...");

		const bttvEndpoints = [];
		if(urlParameters.globalBttvEmotes.value) {
			bttvEndpoints.push("emotes/global");
		}

		if(urlParameters.bttvEmotes.value) {
			bttvEndpoints.push(`users/twitch/${encodeURIComponent(Channel.info.id)}`);
		}

		for (const endpoint of bttvEndpoints) {
			let json = await getJson(`https://api.betterttv.net/3/cached/${endpoint}`);

			if(json.message != undefined) {
				console.error(`[BTTV] ${json.message}`);
				continue;
			}

			const isGlobal = endpoint == "emotes/global";
			const globalString = isGlobal ? "/GLOBAL" : "";

			if (!Array.isArray(json)) {
				json = json.channelEmotes.concat(json.sharedEmotes);
			}

			json.forEach(emote => {
				if(urlParameters.blacklist.value.includes(emote.code)) {
					return;
				}

				const imageUrl = `https://cdn.betterttv.net/emote/${emote.id}/3x`;

				Channel.info.emotes.push(imageUrl);

				DEBUG && console.log(`[BTTV${globalString}] ${emote.code}: ${imageUrl}`);
			});

			DEBUG && console.log(`[BTTV${globalString}] Done!`);
		}
	},

	load7tvEmotes: async function() {
		DEBUG && console.log("[7TV] Loading emotes...");

		const _7tvEndpoints = [];
		if(urlParameters.global7tvEmotes.value) {
			_7tvEndpoints.push("emotes/global");
		}

		if(urlParameters._7tvEmotes.value) {
			_7tvEndpoints.push(`users/${encodeURIComponent(Channel.info.id)}/emotes`);
		}

		for (const endpoint of _7tvEndpoints) {
			const json = await getJson(`https://api.7tv.app/v2/${endpoint}`);
			
			if(json.error != undefined) {
				console.error(`[7TV] ${json.error}`);
				continue;
			}

			const isGlobal = endpoint == "emotes/global";
			const globalString = isGlobal ? "/GLOBAL" : "";

			console.log(json);

			json.forEach(emote => {
				if(urlParameters.blacklist.value.includes(emote.name)) {
					return;
				}

				const imageUrl = emote.urls.slice(-1)[0][1];

				Channel.info.emotes.push(imageUrl);

				DEBUG && console.log(`[7TV${globalString}] ${emote.name}: ${imageUrl}`);
			});

			DEBUG && console.log(`[7TV${globalString}] Done!`);
		}
	},

	load: async function() {
		Channel.info.emotes = [];

		await Channel.loadAllEmotes();
		if(Channel.info.emotes.length == 0) {
			await Channel.initId();

			if(Channel.info.id != 0) {
				await Channel.loadTwitchEmotes();
				await Channel.loadFfzEmotes();
				await Channel.loadBttvEmotes();
				await Channel.load7tvEmotes();
			}
		}

		DEBUG && console.log("Loading emotes: done!");
		DEBUG && console.log(Channel.info.emotes);
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

const getJson = (url) => fetch(url, { method: "GET"}).then(async (response) => {
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

function getParameters() {
	searchParameters = new URLSearchParams(window.location.search);
	
	if(searchParameters.has("channel")) {
		channelName = searchParameters.get("channel");
	}

	if(searchParameters.has("debug")) {
		urlParameters.debug.userProvided = true;
		DEBUG = searchParameters.get("debug");
		urlParameters.debug.value = searchParameters.get("debug").toLowerCase() == "true";
	}

	if(searchParameters.has("speed")) {
		urlParameters.speed.userProvided = true;
		urlParameters.speed.value = parseFloat(searchParameters.get("speed"));
	}

	if(searchParameters.has("twitchEmotes")) {
		urlParameters.twitchEmotes.userProvided = true;
		urlParameters.twitchEmotes.value = searchParameters.get("twitchEmotes").toLowerCase() == "true";
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

	if(searchParameters.has("globalTwitchEmotes")) {
		urlParameters.globalTwitchEmotes.userProvided = true;
		urlParameters.globalTwitchEmotes.value = searchParameters.get("globalTwitchEmotes").toLowerCase() == "true";
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
		urlParameters.blacklist.value = searchParameters.get("blacklist").split(/[,;|\s]/).filter(i => i);
	}
}

onReady(() => { 
	getParameters();
	Channel.init(channelName);
});

dvd({
	speed: 100 * urlParameters.speed.value,
	bumpEdge: function () {
		if(Channel.info.emotes.length > 0) {
			const emoteUrl = Channel.info.emotes[Math.floor(Math.random() * Channel.info.emotes.length)];
			document.querySelector(".daphO").src = emoteUrl;
		}
	},
});