// import "web-animations-js/web-animations-next-lite.min";
const daphO = [
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
  "https://cdn.betterttv.net/emote/603084fba94aaa6e662d897d/3x", //daphTurret
  "https://cdn.betterttv.net/emote/60308427a94aaa6e662d8976/3x", //daphEngie
  "https://cdn.betterttv.net/emote/603895d57c74605395f3485d/3x", //daphLeak
  "https://cdn.betterttv.net/emote/6038961b7c74605395f3485f/3x", //daphLeaking
  "https://cdn.betterttv.net/emote/603a2fec7c74605395f353d1/3x", //daphPop
  "https://cdn.betterttv.net/emote/603b00f47c74605395f35ab8/3x", //daphJR
  "https://cdn.betterttv.net/emote/604c3dc1306b602acc59be9f/3x", //daphCopium
];

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
dvd({
  speed: 100 * (new URL(window.location.href).searchParams.get("speed") || 3),
  bumpEdge: function () {
    document.querySelector(".daphO").src =
      daphO[Math.floor(Math.random() * daphO.length)];
  },
});
