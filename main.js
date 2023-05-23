let channelName = "39daph";
let DEBUG = false;
const daphO = [
  "https://cdn.betterttv.net/emote/63d444f2adb5e3c9656e65f1/3x", //daphWise
  "https://cdn.betterttv.net/emote/63c2b621f16b4a91323fe623/3x", //Devserved
  "https://cdn.betterttv.net/emote/63af54fad3c04b5c45120d24/3x", //daphYoga
  "https://cdn.betterttv.net/emote/63ac10cf91ab7f35abe0a1c7/3x", //daphLondon
  "https://cdn.betterttv.net/emote/63551661ed98a03da0cd8809/3x", //daphBand
  "https://cdn.betterttv.net/emote/62dfc0abd991a3e26c135163/3x", //daphFarm
  "https://cdn.betterttv.net/emote/635bf5bfed98a03da0ce150e/3x", //daphBirth
  "https://cdn.betterttv.net/emote/61d83a7306fd6a9f5bdfbaca/3x", //daphLess
  "https://cdn.betterttv.net/emote/635a04a8ed98a03da0cdf098/3x", //daphOBirth
  "https://cdn.betterttv.net/emote/62ee05eeecbd418154238087/3x", //daphSing
  "https://cdn.betterttv.net/emote/6058764fdfaae06e7d60c4a2/3x", //daphSteer
  "https://cdn.betterttv.net/emote/607d621739b5010444d022a9/3x", //daphZoo
  "https://cdn.betterttv.net/emote/62ec4ebcecbd41815423698b/3x", //wokege
  "https://cdn.betterttv.net/emote/62ec4e9decbd418154236986/3x", //bedge
  "https://cdn.betterttv.net/emote/62a22c5b6ef7a5f0b7dec060/3x", //daphWOM
  "https://cdn.betterttv.net/emote/626273c83c6f14b68845ef42/3x", //GIGADAPH
  "https://cdn.betterttv.net/emote/6208b1b206fd6a9f5be45d79/3x", //daphSteer
  "https://cdn.betterttv.net/emote/6213657506fd6a9f5be52a92/3x", //daphDice
  "https://cdn.betterttv.net/emote/61fb86b406fd6a9f5be32e75/3x", //daphZen
  "https://cdn.betterttv.net/emote/61bffa9a002cdeedc2200cf0/3x", //daphYUMP
  "https://cdn.betterttv.net/emote/61b8e480002cdeedc21f6cca/3x", //SnowTime
  "https://cdn.betterttv.net/emote/61a73ec4002cdeedc21daca7/3x", //daphWiggle
  "https://cdn.betterttv.net/emote/618f62e154f3344f880570a0/3x", //daphChef
  "https://cdn.betterttv.net/emote/61827b721f8ff7628e6c3c59/3x", //OHLORD
  "https://cdn.betterttv.net/emote/616e763c054a252a431fb66e/3x", //DIESOFCRINGE
  "https://cdn.betterttv.net/emote/6169bb41054a252a431f32d7/3x", //NOOO
  "https://cdn.betterttv.net/emote/615ce52db63cc97ee6d50306/3x", //daphCat
  "https://cdn.betterttv.net/emote/615ce53eb63cc97ee6d50312/3x", //daphFurry
  "https://cdn.betterttv.net/emote/613d77fc4b0ce9183035df9f/3x", //daphCustomerService
  "https://cdn.betterttv.net/emote/6131c810af28e956864ba5f3/3x", //daphTYPERS
  "https://cdn.betterttv.net/emote/612f231caf28e956864b4ac3/3x", //daphCorpa
  "https://cdn.betterttv.net/emote/612f0f64af28e956864b497d/3x", //daphSEN
  "https://cdn.betterttv.net/emote/61221c9276ea4e2b9f78a7e0/3x", //daphImposter
  "https://cdn.betterttv.net/emote/607b3a5f39b5010444d0136c/3x", //Dappa
  "https://cdn.betterttv.net/emote/60ff1a422d1eba5400d1b518/3x", //daphGlamour
  "https://cdn.betterttv.net/emote/60ff1aa62d1eba5400d1b520/3x", //daphSit
  "https://cdn.betterttv.net/emote/60e712208ed8b373e421f86e/3x", //daphPS1
  "https://cdn.betterttv.net/emote/60c9a24ef8b3f62601c3e876/3x", //daphSus
  "https://cdn.betterttv.net/emote/60bed67ff8b3f62601c3a7c8/3x", //daphFire
  "https://static-cdn.jtvnw.net/emoticons/v1/302071866/3.0", //daphBlind
  "https://static-cdn.jtvnw.net/emoticons/v1/304381627/3.0", //daphLurk
  "https://static-cdn.jtvnw.net/emoticons/v1/301171649/3.0", //daphO
  "https://static-cdn.jtvnw.net/emoticons/v1/302385634/3.0", //daphOU
  "https://static-cdn.jtvnw.net/emoticons/v1/304029245/3.0", //daphSlep
  "https://static-cdn.jtvnw.net/emoticons/v1/302419165/3.0", //daphSnot
  "https://static-cdn.jtvnw.net/emoticons/v1/304381619/3.0", //daphKnife
  "https://cdn.betterttv.net/emote/5f9f6bdf58e96102e92a8717/3x", //daphArrive,
  "https://cdn.betterttv.net/emote/5f84ec13ce8bc74a9424ee64/3x", //daphBed
  "https://cdn.betterttv.net/emote/5fc8af588c4e2c46195cd222/3x", //dankDaph
  "https://static-cdn.jtvnw.net/emoticons/v1/304739284/3.0", //daphPray
  "https://cdn.betterttv.net/emote/5fec0b0f9d7d952e4059c699/3x", //daphPoot
  "https://cdn.betterttv.net/emote/5ff304d2db5f420491823ab1/3x", //daphSun
  "https://cdn.betterttv.net/emote/5ff304d2db5f420491823ab1/3x", //daphHug
  "https://cdn.betterttv.net/emote/60040050c96152314ad69d91/3x", //daphNerd
  "https://cdn.betterttv.net/emote/6007ad44f1cfbf65dbe03e30/3x", //daphFroot
  "https://cdn.betterttv.net/emote/601abce86c75a765d4647c3e/3x", //daphKachow
  "https://cdn.betterttv.net/emote/6013ad3282cf6865d55346b5/3x", //GAMBA
  "https://cdn.betterttv.net/emote/6020f97780e56d02a5cb4fd6/3x", //daphM
  "https://cdn.betterttv.net/emote/602f8be5a94aaa6e662d8231/3x", //daphQuad
  "https://cdn.betterttv.net/emote/603a2fec7c74605395f353d1/3x", //daphPop
  "https://cdn.betterttv.net/emote/603b00f47c74605395f35ab8/3x", //daphJRas
  "https://cdn.betterttv.net/emote/60547c32306b602acc59fc8b/3x", //daphThief
  "https://cdn.betterttv.net/emote/60571d5f61e7e44b5aa4e9f9/3x", //daphJones
  "https://cdn.betterttv.net/emote/605c3fed7493072efdeb425e/3x", //daphPirate
  "https://static-cdn.jtvnw.net/emoticons/v1/306762243/3.0", //daphHeart
  "https://static-cdn.jtvnw.net/emoticons/v1/306762263/3.0", //daphSociety
  "https://static-cdn.jtvnw.net/emoticons/v1/306762239/3.0", //daphBeg 
  "https://static-cdn.jtvnw.net/emoticons/v1/306762276/3.0", //daphPotion
  "https://static-cdn.jtvnw.net/emoticons/v1/306762237/3.0", //daphHead
  "https://static-cdn.jtvnw.net/emoticons/v1/306762274/3.0", //daphSip
  "https://static-cdn.jtvnw.net/emoticons/v1/306762267/3.0", //daphStealth
  "https://cdn.betterttv.net/emote/6062b5c6a407570b72f27bcd/3x", //daphItaly
  "https://cdn.betterttv.net/emote/6062b5d6a407570b72f27bcf/3x", //daphShh
  "https://cdn.betterttv.net/emote/60cfa2fc8ed8b373e4216f52/3x", // DUSSERS
  "https://cdn.betterttv.net/emote/6082772039b5010444d04993/3x", //daphFlower
  "https://cdn.betterttv.net/emote/608e93d039b5010444d0a354/3x", //daphNun
  "https://cdn.betterttv.net/emote/6092f2a339b5010444d0c391/3x", //daphCD
  "https://static-cdn.jtvnw.net/emoticons/v1/307608966/3.0", //daphLook
  "https://cdn.betterttv.net/emote/605eaa147493072efdeb5576/3x", //daphLewd
  "https://cdn.betterttv.net/emote/6097ad8939b5010444d0e4c2/3x", //Dorpa
  "https://cdn.betterttv.net/emote/6097b00139b5010444d0e4d0/3x", //dorpaSpin
  "https://cdn.betterttv.net/emote/60a35b7567644f1d67e8849f/3x", //dorpaLookingAtYou
  "https://static-cdn.jtvnw.net/emoticons/v1/307608962/3.0", // daphPain
  "https://cdn.betterttv.net/emote/609a522639b5010444d0f799/3x", //daphGroove
  "https://cdn.betterttv.net/emote/60a3b29d67644f1d67e8867d/3x", //daphBowl
  "https://cdn.betterttv.net/emote/60a61a3067644f1d67e89934/3x", //DAPHIES
  "https://cdn.betterttv.net/emote/60a6393c67644f1d67e899ed/3x",//daphShurg
];

const MAX_INT = 2147483647;
const proxy = "https://api.allorigins.win/raw?url=";

let urlParameters = {
	debug: {
		value: false,
		userProvided: false
	},
	speed: {
		value: 3,
		userProvided: false
	},
	channelEmotes: {
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
		emotes: [],
	},

	loadChannelEmotes: async function() {
		DEBUG && console.log("[Twitch] Loading Channel emotes...");

		if(!urlParameters.channelEmotes.value) {
			return;
		}

		const htmlString = await getHtml(`https://twitch-tools.rootonline.de/emotes.php?channel=${Channel.info.name}`);
		
		const domParser = new DOMParser();
		const html = domParser.parseFromString(htmlString, 'text/html');

		const emotesFoundCountHtml = html.getElementsByClassName("col-12 mb-3");

		if (emotesFoundCountHtml.length == 0) {
			console.log("[Twitch] No user found!");
			return;
		}

		const emotesFoundCountString = emotesFoundCountHtml[0].textContent;

		if (emotesFoundCountString.includes("No emotes")) {
			console.log("[Twitch] No user found!");
			return;
		}

		const emotesHtml = html.getElementsByClassName("row mb-3")[0];
		const emoteCardsArray = emotesHtml.getElementsByClassName("card-body");

		for (const emoteCard of emoteCardsArray) {
			const emoteNameArray = emoteCard.getElementsByClassName("mt-2 text-center");
			
			let emoteName = emoteNameArray.length == 0 ? "followerEmote" + Math.floor(Math.random() * MAX_INT) : emoteNameArray[0].textContent;

			if(urlParameters.blacklist.value.includes(emoteName)) {
				continue;
			}
			
			const imageUrlArray = emoteCard.getElementsByTagName("a"); 

			if (imageUrlArray.length == 0) {
				continue;
			}

			const imageUrl = imageUrlArray[0].href.replace("light","dark");

			Channel.info.emotes.push(imageUrl);

			DEBUG && console.log(`[Twitch] ${emoteName}: ${imageUrl}`);
		}
	},

	loadFfzEmotes: async function() {
		DEBUG && console.log("[FFZ] Loading FFZ emotes...");

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
				console.error("BTTV: No user found!");
				continue;
			}

			const isGlobal = endpoint == "emotes/global";
			const globalString = isGlobal ? " GLOBAL" : "";

			json.forEach(emote => {
				if(urlParameters.blacklist.value.includes(emote.code)) {
					return;
				}

				let imageUrl = "";
				let upscale = false;

				if (emote.images["4x"]) {
					imageUrl = emote.images["4x"];
					upscale = false;
				} else {
					imageUrl = emote.images["2x"] || emote.images["1x"];
					upscale = true;
				}

				Channel.info.emotes.push(imageUrl);

				DEBUG && console.log(`[FFZ${globalString}] ${emote.code}: ${imageUrl}`);
			});

			DEBUG && console.log(`[FFZ] Loading FFZ ${endpoint}: done!`);
		}
	},

	loadBttvEmotes: async function() {
		DEBUG && console.log("[BTTV] Loading BTTV emotes...");

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
				console.error("BTTV: " + json.message);
				continue;
			}

			const isGlobal = endpoint == "emotes/global";
			const globalString = isGlobal ? " GLOBAL" : "";

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

			DEBUG && console.log(`[BTTV] Loading BTTV ${endpoint}: done!`);
		}
	},

	load7tvEmotes: async function() {
		DEBUG && console.log("[7TV] Loading 7TV emotes...");

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
				console.error("7TV: " + json.error);
				continue;
			}

			const isGlobal = endpoint == "emotes/global";
			const globalString = isGlobal ? " GLOBAL" : "";

			json.forEach(emote => {
				if(urlParameters.blacklist.value.includes(emote.name)) {
					return;
				}

				const imageUrl = emote.urls[emote.urls.length - 1][1];

				Channel.info.emotes.push(imageUrl);

				DEBUG && console.log(`[7TV${globalString}] ${emote.name}: ${imageUrl}`);
			});

			DEBUG && console.log(`[7TV] Loading 7TV ${endpoint}: done!`);
		}
	},

	loadEmotes: async function() {
		Channel.info.emotes = [];

		await Channel.loadChannelEmotes();
		await Channel.loadFfzEmotes();
		await Channel.loadBttvEmotes();
		await Channel.load7tvEmotes();

		
		DEBUG && console.log("Loading emotes: done!");
	},

	load: async function() {
		const channelID = await getJson(`https://decapi.me/twitch/id/${Channel.info.name}`);
		if(channelID.includes("User not found")) {
			return;
		}

		Channel.info.id = channelID;
		DEBUG && console.log(Channel.info.name + ": " + channelID);
		await Channel.loadEmotes();
		
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

const getHtml = (url) => fetch(proxy + url, { method: "GET" }).then(async (response) => {
	const text = await response.text();
	return text;
}).catch((error) => {
	console.error(error);
	return {};
});

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

onReady(() => { 
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

	if(searchParameters.has("channelEmotes")) {
		urlParameters.channelEmotes.userProvided = true;
		urlParameters.channelEmotes.value = searchParameters.get("channelEmotes").toLowerCase() == "true";
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
		urlParameters.blacklist.value = searchParameters.get("blacklist").split(/[,;|\s]/).filter(i => i);
	}

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