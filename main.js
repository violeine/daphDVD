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

const hachuSubEmotes = {
	// T1 Sub Emotes
	"hachu1": "https://static-cdn.jtvnw.net/emoticons/v2/300595783/default/dark/3.0", // hachu1
	"hachu157": "https://static-cdn.jtvnw.net/emoticons/v2/304317372/default/dark/3.0", // hachu157
	"hachu2": "https://static-cdn.jtvnw.net/emoticons/v2/300595783/default/dark/3.0", // hachu2
	"hachu3": "https://static-cdn.jtvnw.net/emoticons/v2/300595784/default/dark/3.0", // hachu3
	"hachu4": "https://static-cdn.jtvnw.net/emoticons/v2/300595787/default/dark/3.0", // hachu4
	"hachu7": "https://static-cdn.jtvnw.net/emoticons/v2/304317368/default/dark/3.0", // hachu7
	"hachuBased": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_230b2971720248748a9c04911e02d557/default/dark/3.0", // hachuBased
	"hachuCope": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_f7ca2efa2df3477a8bb35e9b45970e6c/default/dark/3.0", // hachuCope
	"hachuBless": "https://static-cdn.jtvnw.net/emoticons/v2/302238190/default/dark/3.0", // hachuBless
	"hachuCozy": "https://static-cdn.jtvnw.net/emoticons/v2/301684866/default/dark/3.0", // hachuCozy
	"hachuDank": "https://static-cdn.jtvnw.net/emoticons/v2/301684867/default/dark/3.0", // hachuDank
	"hachuDespair": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_4a910e941cbe474c9238df6db29aebdd/default/dark/3.0", // hachuDespair
	"hachuDisgust": "https://static-cdn.jtvnw.net/emoticons/v2/304317399/default/dark/3.0", // hachuDisgust
	"hachuFail": "https://static-cdn.jtvnw.net/emoticons/v2/301669946/default/dark/3.0", // hachuFail
	"hachuFlag": "https://static-cdn.jtvnw.net/emoticons/v2/300598280/default/dark/3.0", // hachuFlag
	"hachuG": "https://static-cdn.jtvnw.net/emoticons/v2/301684872/default/dark/3.0", // hachuG
	"hachuGoogles": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_4270ae1a539a45b1b63b65405e3cc9a5/default/dark/3.0", // hachuGoogles
	"hachuGood": "https://static-cdn.jtvnw.net/emoticons/v2/301669944/default/dark/3.0", // hachuGood
	"hachuHaM": "https://static-cdn.jtvnw.net/emoticons/v2/300598281/default/dark/3.0", // hachuHaM
	"hachuHey": "https://static-cdn.jtvnw.net/emoticons/v2/302832421/default/dark/3.0", // hachuHey
	"hachuHmm": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_7a6beb8164fc461bb9961200b864c892/default/dark/3.0", // hachuHmm
	"hachuHobo": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_9df75c0cd2204b6c9f4d079c066e6245/default/dark/3.0", // hachuHobo
	"hachuHype": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_9b844bd71d62418caaa307b0acfd365d/default/dark/3.0", // hachuHype
	"hachuInsane": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_673df4b4656649a9b6f4d43a76b6ea06/default/dark/3.0", // hachuInsane
	"hachuKB": "https://static-cdn.jtvnw.net/emoticons/v2/300587310/default/dark/3.0", // hachuKB
	"hachuLess": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_fd9492d4a69c498ca8142437cd28b6df/default/dark/3.0", // hachuLess
	"hachuLove": "https://static-cdn.jtvnw.net/emoticons/v2/300587308/default/dark/3.0", // hachuLove
	"hachuMad": "https://static-cdn.jtvnw.net/emoticons/v2/300803776/default/dark/3.0", // hachuMad
	"hachuMart": "https://static-cdn.jtvnw.net/emoticons/v2/305211590/default/dark/3.0", // hachuMart
	"hachuOrc": "https://static-cdn.jtvnw.net/emoticons/v2/304119901/default/dark/3.0", // hachuOrc
	"hachuPag": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_97af0431faf142d28b0d34cff5dad5eb/default/dark/3.0", // hachuPag
	"hachuPat": "https://static-cdn.jtvnw.net/emoticons/v2/303588578/default/dark/3.0", // hachuPat
	"hachuPause": "https://static-cdn.jtvnw.net/emoticons/v2/302393464/default/dark/3.0", // hachuPause
	"hachuPerbert": "https://static-cdn.jtvnw.net/emoticons/v2/304317385/default/dark/3.0", // hachuPerbert
	"hachuPuke": "https://static-cdn.jtvnw.net/emoticons/v2/301669948/default/dark/3.0", // hachuPuke
	"hachuRaid": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_a1fa75a950e64e898d95e6944690ba26/default/dark/3.0", // hachuRaid
	"hachuRude": "https://static-cdn.jtvnw.net/emoticons/v2/301684878/default/dark/3.0", // hachuRude
	"hachuSad": "https://static-cdn.jtvnw.net/emoticons/v2/301684880/default/dark/3.0", // hachuSad
	"hachuSing": "https://static-cdn.jtvnw.net/emoticons/v2/300831447/default/dark/3.0", // hachuSing
	"hachuSleeper": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_95ab225b16fb42bb9e063829e4b01be4/default/dark/3.0", // hachuSleeper
	"hachuStop": "https://static-cdn.jtvnw.net/emoticons/v2/302238185/default/dark/3.0", // hachuStop
	"hachuSun": "https://static-cdn.jtvnw.net/emoticons/v2/302393461/default/dark/3.0", // hachuSun
	"hachuW": "https://static-cdn.jtvnw.net/emoticons/v2/301684881/default/dark/3.0", // hachuW
	"hachuWhat": "https://static-cdn.jtvnw.net/emoticons/v2/302832435/default/dark/3.0", // hachuWhat
	"hachuWicked": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_ac3e1cb323ac4d628ab90da9c8fdcb93/default/dark/3.0", // hachuWicked
	"hachuYup": "https://static-cdn.jtvnw.net/emoticons/v2/301684884/default/dark/3.0", // hachuYup

	// T2 Sub Emotes
	"hachuPizza": "https://static-cdn.jtvnw.net/emoticons/v2/303020976/default/dark/3.0", // hachuPizza
	"hachuQuestion": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_0b17732aa915474484b2f1c041753739/static/dark/3.0", // hachuQuestion
	"hachuWow": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_26dcdb30faac40aaaaa8869d32d2a929/static/dark/3.0", // hachuWow

	// T3 Sub Emotes
	"hachuB": "https://static-cdn.jtvnw.net/emoticons/v2/302238202/static/dark/3.0", // hachuB
	"hachuKing": "hhttps://static-cdn.jtvnw.net/emoticons/v2/303020977/static/dark/3.0", // hachuKing

	// Animated Emotes
	"hachuING": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_b538867b5de8431e8a34e9caa8a195dc/default/dark/3.0", // hachuING
	"hachuL": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_50befab40c6c4516aa1f0a15e6d8775f/default/dark/3.0", // hachuL
	"hachuLaughingAtYou": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_7812689324e54ec399fc368fb4ea904b/default/dark/3.0", // hachuLaughingAtYou
	"hachuPls": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_a61150686e86486b969227448361e89f/default/dark/3.0", // hachuPls
	"hachuWiggle": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_2e1ecd0af86d4dceb055731032ad7391/default/dark/3.0", // hachuWiggle

	// Follower Emotes
	"hachuLesss": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_2f924b9e30e74fe5b15562bee021a766/default/dark/3.0" // hachuLesss 
};

const daphSubEmotes = {
	// T1 Sub Emotes
	"daph2head": "https://static-cdn.jtvnw.net/emoticons/v2/300740859/default/dark/3.0", // daph2head
	"daph39": "https://static-cdn.jtvnw.net/emoticons/v2/300740864/default/dark/3.0", // daph39
	"daphArt": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_50537080d247433c9e712cec4026a7c7/default/dark/3.0", // daphArt
	"daphBeg": "https://static-cdn.jtvnw.net/emoticons/v2/306762239/default/dark/3.0", // daphBeg
	"daphBlind": "https://static-cdn.jtvnw.net/emoticons/v2/302071866/default/dark/3.0", // daphBlind
	"daphBong": "https://static-cdn.jtvnw.net/emoticons/v2/301046547/default/dark/3.0", // daphBong
	"daphBrug": "https://static-cdn.jtvnw.net/emoticons/v2/300708685/default/dark/3.0", // daphBrug
	"daphCough": "https://static-cdn.jtvnw.net/emoticons/v2/300333595/default/dark/3.0", // daphCough
	"daphCozy": "https://static-cdn.jtvnw.net/emoticons/v2/1603256/default/dark/3.0", // daphCozy
	"daphDepresso": "https://static-cdn.jtvnw.net/emoticons/v2/302077213/default/dark/3.0", // daphDepresso
	"daphFlushed": "https://static-cdn.jtvnw.net/emoticons/v2/303592065/default/dark/3.0", // daphFlushed
	"daphFocus": "https://static-cdn.jtvnw.net/emoticons/v2/301772233/default/dark/3.0", // daphFocus
	"daphFurry": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_70d7b50e4bd942d19f67674374635363/default/dark/3.0", // daphFurry
	"daphHarold": "https://static-cdn.jtvnw.net/emoticons/v2/300815545/default/dark/3.0", // daphHarold
	"daphHeart": "https://static-cdn.jtvnw.net/emoticons/v2/306762243/default/dark/3.0", // daphHeart
	"daphHide": "https://static-cdn.jtvnw.net/emoticons/v2/300674987/default/dark/3.0", // daphHide
	"daphHug": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_6b540d712742408a85758f4783979cb4/default/dark/3.0", // daphHug
	"daphLaud": "https://static-cdn.jtvnw.net/emoticons/v2/301483249/default/dark/3.0", // daphLaud
	"daphLol": "https://static-cdn.jtvnw.net/emoticons/v2/300740862/default/dark/3.0", // daphLol
	"daphLook": "https://static-cdn.jtvnw.net/emoticons/v2/307608966/default/dark/3.0", // daphLook
	"daphLurk": "https://static-cdn.jtvnw.net/emoticons/v2/304381627/default/dark/3.0", // daphLurk
	"daphM": "https://static-cdn.jtvnw.net/emoticons/v2/306762253/default/dark/3.0", // daphM
	"daphMango": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_58bde04aed274ee59194af4a09dd4765/default/dark/3.0", // daphMango
	"daphNerd": "https://static-cdn.jtvnw.net/emoticons/v2/306762256/default/dark/3.0", // daphNerd
	"daphO": "https://static-cdn.jtvnw.net/emoticons/v2/301171649/default/dark/3.0", // daphO
	"daphOU": "https://static-cdn.jtvnw.net/emoticons/v2/302385634/default/dark/3.0", // daphOU
	"daphPain": "https://static-cdn.jtvnw.net/emoticons/v2/307608962/default/dark/3.0", // daphPain
	"daphPotion": "https://static-cdn.jtvnw.net/emoticons/v2/306762276/default/dark/3.0", // daphPotion
	"daphPray": "https://static-cdn.jtvnw.net/emoticons/v2/304739284/default/dark/3.0", // daphPray
	"daphQuack": "https://static-cdn.jtvnw.net/emoticons/v2/1603412/default/dark/3.0", // daphQuack
	"daphRead": "https://static-cdn.jtvnw.net/emoticons/v2/306762261/default/dark/3.0", // daphRead
	"daphSEN": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_922750d5e008406993e975371ab0e0f3/default/dark/3.0", // daphSEN
	"daphScreech": "https://static-cdn.jtvnw.net/emoticons/v2/301344656/default/dark/3.0", // daphScreech
	"daphScreechH": "https://static-cdn.jtvnw.net/emoticons/v2/301344657/default/dark/3.0", // daphScreechH
	"daphShirt": "https://static-cdn.jtvnw.net/emoticons/v2/300902176/default/dark/3.0", // daphShirt
	"daphSip": "https://static-cdn.jtvnw.net/emoticons/v2/306762274/default/dark/3.0", // daphSip
	"daphSit": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_5beb038bd2904046a51918a28e47ac36/default/dark/3.0", // daphSit
	"daphSlep": "https://static-cdn.jtvnw.net/emoticons/v2/304029245/default/dark/3.0", // daphSlep
	"daphSmile": "https://static-cdn.jtvnw.net/emoticons/v2/302306636/default/dark/3.0", // daphSmile
	"daphSnot": "https://static-cdn.jtvnw.net/emoticons/v2/302419165/default/dark/3.0", // daphSnot
	"daphSociety": "https://static-cdn.jtvnw.net/emoticons/v2/306762263/default/dark/3.0", // daphSociety
	"daphStab": "https://static-cdn.jtvnw.net/emoticons/v2/304381619/default/dark/3.0", // daphStab
	"daphStand": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_30eb049b05e04876be5a1a05b2b7fe81/default/dark/3.0", // daphStand
	"daphStealth": "https://static-cdn.jtvnw.net/emoticons/v2/306762267/default/dark/3.0", // daphStealth
	"daphSucc": "https://static-cdn.jtvnw.net/emoticons/v2/300889153/default/dark/3.0", // daphSucc
	"daphSun": "https://static-cdn.jtvnw.net/emoticons/v2/307608986/default/dark/3.0", // daphSun
	"daphT": "https://static-cdn.jtvnw.net/emoticons/v2/1603259/default/dark/3.0", // daphT
	"daphThonk": "https://static-cdn.jtvnw.net/emoticons/v2/1733918/default/dark/3.0", // daphThonk
	"daphVaN": "https://static-cdn.jtvnw.net/emoticons/v2/300674481/default/dark/3.0", // daphVaN
	"daphW": "https://static-cdn.jtvnw.net/emoticons/v2/1603257/default/dark/3.0", // daphW
	"daphWeird": "https://static-cdn.jtvnw.net/emoticons/v2/301732091/default/dark/3.0", // daphWeird
	"daphX": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_687ad1b33cd84f86be421b2957eb8069/default/dark/3.0", // daphX
	"daphYion": "https://static-cdn.jtvnw.net/emoticons/v2/2057274/default/dark/3.0", // daphYion

	// T2 Sub Emotes
	"daphBlush": "https://static-cdn.jtvnw.net/emoticons/v2/303323542/default/dark/3.0", // daphBlush
	"daphCri": "https://static-cdn.jtvnw.net/emoticons/v2/303323541/default/dark/3.0", // daphCri
	"daphFine": "https://static-cdn.jtvnw.net/emoticons/v2/303323536/default/dark/3.0", // daphFine
	"daphMood": "https://static-cdn.jtvnw.net/emoticons/v2/1605469/default/dark/3.0", // daphMood
	"daphOk": "https://static-cdn.jtvnw.net/emoticons/v2/303323538/default/dark/3.0", // daphOk

	// T3 Sub Emotes
	"daphLoad": "https://static-cdn.jtvnw.net/emoticons/v2/303323544/default/dark/3.0", // daphLoad
	"daphLove": "https://static-cdn.jtvnw.net/emoticons/v2/306762278/default/dark/3.0", // daphLove
	"daphMoodLove": "https://static-cdn.jtvnw.net/emoticons/v2/1605406/default/dark/3.0", // daphMoodLove
	"daphWhy": "https://static-cdn.jtvnw.net/emoticons/v2/303323547/default/dark/3.0", // daphWhy
	"daphYamero": "https://static-cdn.jtvnw.net/emoticons/v2/303323545/default/dark/3.0", // daphYamero

	// Animated Emotes
	"daphCheer": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_c0d5dc8059744989a358d35f91d52087/default/dark/3.0", // daphCheer
	"daphJR": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_4bfe0be30103470bac8ea61322c288d9/default/dark/3.0", // daphJR
	"daphPirate": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_c6b795b9c43d41ec91bf3d5deeab347b/default/dark/3.0", // daphPirate
	"daphTYPERS": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_143d440ad23e485b8ab3d5d32a46c172/default/dark/3.0", // daphTYPERS
	"daphYikes": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_9b4262498d8c4e99917559e979f7ecce/default/dark/3.0", // daphYikes

	// Cheer Emotes
	"cheer1": "https://d3aqoihi2n8ty8.cloudfront.net/partner-actions/160504245/237c7b86-164d-4e02-bac8-4ee2e6782b93/1/light/animated/3.gif", // cheer1
	"cheer100": "https://d3aqoihi2n8ty8.cloudfront.net/partner-actions/160504245/237c7b86-164d-4e02-bac8-4ee2e6782b93/100/light/animated/3.gif", // cheer100
	"cheer1000": "https://d3aqoihi2n8ty8.cloudfront.net/partner-actions/160504245/237c7b86-164d-4e02-bac8-4ee2e6782b93/1000/light/animated/3.gif", // cheer1000
	"cheer5000": "https://d3aqoihi2n8ty8.cloudfront.net/partner-actions/160504245/237c7b86-164d-4e02-bac8-4ee2e6782b93/5000/light/animated/3.gif", // cheer5000
	"cheer10000": "https://d3aqoihi2n8ty8.cloudfront.net/partner-actions/160504245/237c7b86-164d-4e02-bac8-4ee2e6782b93/10000/light/animated/3.gif", // cheer10000

};

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
				if(urlParameters.blacklist.value.includes(emote.code)) {
					return;
				}

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
				if(urlParameters.blacklist.value.includes(emote.name)) {
					return;
				}

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
			for(const emote of Object.entries(daphSubEmotes)) {
				if(urlParameters.blacklist.value.includes(emote[0])) {
					continue;
				}

				Channel.info.emotes.push(emote[1]);
			}
		}
		else if(Channel.info.name == "hachubby") {
			for(const emote of Object.entries(hachuSubEmotes)) {
				if(urlParameters.blacklist.value.includes(emote[0])) {
					continue;
				}

				Channel.info.emotes.push(emote[1]);
			}
		}
		
		DEBUG && console.log(Channel.info.emotes);

		dvd({
			speed: 100 * urlParameters.speed.value,
			bumpEdge: function () {
				const emoteUrl = Channel.info.emotes[Math.floor(Math.random() * Channel.info.emotes.length)];
				document.querySelector(".daphO").src = emoteUrl;
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

	if(searchParameters.has("debug")) {
		urlParameters.debug.userProvided = true;
		DEBUG = searchParameters.get("debug");
		urlParameters.debug.value = searchParameters.get("debug").toLowerCase() == "true";
	}

	if(searchParameters.has("speed")) {
		urlParameters.speed.userProvided = true;
		urlParameters.speed.value = parseFloat(searchParameters.get("speed"));
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
