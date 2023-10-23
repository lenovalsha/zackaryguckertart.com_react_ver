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
const noirImages = require.context("../../assets/images/storyboard/noir", true);
const image1 = require.context("../../assets/images/storyboard/img1", true);
const horrorImages = require.context(
  "../../assets/images/storyboard/horror",
  true
);
const storyboardEntry = [
  {
    id: "hunterGhost",
    title: "Hunter Vs Ghost (Action)",
    gridFrame: (
      <iframe
        class="speakerdeck-iframe"
        frameborder="0"
        src="https://speakerdeck.com/player/64336b72581744869785e2fd409ebf27"
        title="Hunter Vs Ghost (Action) - Grid View"
        allowfullscreen="true"
        style={gridStyle}
        data-ratio="1.2962962962962963"
      ></iframe>
    ),
    singleFrame: (
      <iframe
        class="speakerdeck-iframe"
        frameborder="0"
        src="https://speakerdeck.com/player/3bed229a84cb447289c24294e3e6e164"
        title="Hunter Vs Ghost (Action)"
        allowfullscreen="true"
        style={sStyle}
        data-ratio="1.78343949044586"
      ></iframe>
    ),
    author: "Written by Zackary Guckert (me)",
    boarded: "Boarded by Zackary Guckert (me)",
    content:
      "I really enjoyed working on this project, as it provided a fun opportunity to merge action and comedy, resulting in some exciting shots. The simple characters gave me lots of freedom to play with dynamic camera moves that I feel enhanced the sequence. To see the animatic",
    youtube: "https://youtu.be/m3bEvCAZGgQ",
    artstation: "",
    images: image1.keys().map(image1),
  },
  {
    id: "Horror",
    title: "Horsin' Around (Children's Horror)",
    gridFrame: (
      <iframe
        className="speakerdeck-iframe"
        frameborder="0"
        src="https://speakerdeck.com/player/c6b74517399c4f6a99b92deb7cdc2cd8"
        title="Horsin' Around (Children's Horror) - Grid View"
        allowfullscreen="true"
        style={gridStyle}
        dataRatio="1.2962962962962963"
      ></iframe>
    ),
    singleFrame: (
      <iframe
        className="speakerdeck-iframe"
        frameborder="0"
        src="https://speakerdeck.com/player/464861ccd80b4ab7ad0506de24fef2bf"
        title="Horsin' Around (Children's Horror) - Single View"
        allowfullscreen="true"
        style={sStyle}
        dataRatio="1.78343949044586"
      ></iframe>
    ),
    author: "Written by Zackary Guckert (me)",
    boarded: "Boarded by Zackary Guckert (me)",
    content:
      "This project feels like a big step for me acting wise. I set out to make a simple scene where I could find moments that I could communicate through visuals and not just dialogue. I think I got there! This is also my first time doing a horror project. I love horror movies and I'd like to do more in the genre in the future! To see the animatic",
    youtube: "https://youtu.be/fKy1KYoV4EU",
    artstation: "",
    images: horrorImages.keys().map(horrorImages),
  },
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
    images: noirImages.keys().map(noirImages),
  },
];
export default storyboardEntry;
