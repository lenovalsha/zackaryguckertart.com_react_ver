import React from "react";
const gridStyle = {
  border: "0px",
  background: "padding-box padding-box rgba(0, 0, 0, 0.1)",
  margin: "0px",
  padding: "0px",
  borderRadius: "6px",
  boxShadow: "rgba(0, 0, 0, 0.2) 0px 5px 40px",
  width: "100%",
  height: "auto",
  aspectRatio: "560 / 432",
};
const sStyle = {
  border: "0px",
  background: "padding-box padding-box rgba(0, 0, 0, 0.1)",
  margin: "0px",
  padding: "0px",
  borderRadius: "6px",
  boxShadow: "rgba(0, 0, 0, 0.2) 0px 5px 40px",
  width: "100%",
  height: "auto",
  aspectRatio: "560 / 314",
};
const storyboardEntry = [
  {
    id: "noir",
    title: "Kid Noir - Children's Drama",
    gridFrame: (
      <iframe
        className="speakerdeck-iframe"
        frameborder="0"
        src="https://speakerdeck.com/player/086b358dca974a1eb05e5216aacfb00f"
        title="Noir Children's Show - Grid View"
        allowfullscreen="true"
        style={gridStyle}
        dataRatio="1.2962962962962963"
      ></iframe>
    ),
    singleFrame: (
      <iframe
        className="speakerdeck-iframe"
        frameborder="0"
        src="https://speakerdeck.com/player/00ba488bd2074e61a1a87f692f751be4"
        title="Noir Children's Show - Singles View"
        allowfullscreen="true"
        style={sStyle}
        dataRatio="1.78343949044586"
      ></iframe>
    ),
    author: "Written by Zackary Guckert (me)",
    boarded: "Boarded by Zackary Guckert (me)",
    content:
      "One of my favourite projects I have done recently. I wanted to try my hand at doing a children's show. Since I have been watching a lot of film noir recently, I thought it would be fun to marry the two together To see the animatic",
    youtube: "https://youtu.be/W7Gv8rL3uzg",
    artstation: "",
  },
  {
    id: "coffeeShop",
    title: "Comedy Coffee",
    gridFrame: (
      <iframe
        className="speakerdeck-iframe"
        frameborder="0"
        src="https://speakerdeck.com/player/973e278e60964adfb86578272765908c"
        title="Comedy Coffee Storyboards - Grid view"
        allowfullscreen="true"
        mozallowfullscreen="true"
        style={gridStyle}
        dataRatio="1.2962962962962963"
      ></iframe>
    ),
    singleFrame: (
      <iframe
        className="speakerdeck-iframe"
        frameborder="0"
        src="https://speakerdeck.com/player/aebd57976341414a927e4a6dd55abc84"
        title="Comedy Coffee Storyboards - Frame view"
        allowfullscreen="true"
        mozallowfullscreen="true"
        style={sStyle}
        dataRatio="1.78343949044586"
      ></iframe>
    ),
    author: "Written by Zackary Guckert (me)",
    boarded: "Boarded by Zackary Guckert (me)",
    content:
      "This project I both boarded and wrote to practice my comedy and acting skills. I'm very happy with where it ended up. To see the animatic",
    youtube:
      "https://www.youtube.com/watch?v=KSs0n9tct5c&ab_channel=ZackaryGuckert",
    artstation: "https://www.artstation.com/artwork/031Drw",
  },
  {
    id: "Sci-Fi",
    title: "Magic Action",
    gridFrame: (
      <iframe
        className="speakerdeck-iframe"
        frameborder="0"
        src="https://speakerdeck.com/player/a4f52615cc23422bb4c42019749f4f2a"
        title="Sci-Fi Action Storyboards - Grid view"
        allowfullscreen="true"
        style={gridStyle}
        dataRatio="1.2962962962962963"
      ></iframe>
    ),
    singleFrame: (
      <iframe
        className="speakerdeck-iframe"
        frameborder="0"
        src="https://speakerdeck.com/player/096bb16a61e549568474cec6a00559cb"
        title="Sci-Fi Action Storyboards - Frame view"
        allowfullscreen="true"
        style={sStyle}
        dataRatio="1.78343949044586"
      ></iframe>
    ),
    author: "Written by Zackary Guckert (me)",
    boarded: "Boarded by Zackary Guckert (me)",
    content:
      "The goal of this project was to practice my action muscles and it was a challenge. I had to cut and recut, add new scenes, reorganize plot beats more than I'm used too. That's being said I enjoyed the challenge and I can't wait to try action again! To see the animatic",
    youtube: "https://www.youtube.com/watch?v=dhURCJOzZ6M",
    artstation: "https://www.artstation.com/artwork/WBK0x3",
  },
];
export default storyboardEntry;
