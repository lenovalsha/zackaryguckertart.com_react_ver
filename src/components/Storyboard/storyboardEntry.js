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
    id: "ratFight",
    title: "Rat Fight! - Action Comedy",
    gridFrame: (
      <iframe
        class="speakerdeck-iframe"
        frameborder="0"
        src="https://speakerdeck.com/player/d4e7a117427c488faa7bd876815b528c"
        title="Rat Fight - Grid View"
        allowfullscreen="true"
        style={sStyle}
        data-ratio="1.2962962962962963"
      ></iframe>
    ),
    singleFrame: (
      <iframe
        class="speakerdeck-iframe"
        frameborder="0"
        src="https://speakerdeck.com/player/6ac93218da034cada13b9a5de2d23708"
        title="Rat Fight - Single View"
        allowfullscreen="true"
        style={sStyle}
        data-ratio="1.78343949044586"
      ></iframe>
    ),
    author: "Written by Zackary Guckert (me)",
    boarded: "Boarded by Zackary Guckert (me)",
    content:
      "I really enjoyed working on this project, as it provided a fun opportunity to merge action and comedy, resulting in some exciting shots. The simple characters gave me lots of freedom to play with dynamic camera moves that I feel enhanced the sequence.",
    youtube: "",
    artstation: "",
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
