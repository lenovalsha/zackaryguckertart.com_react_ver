import React from "react";
import Instagram from "../components/Instagram/index";
import { Storybeats } from "../components/StoryBeats";
import { CharacterExploration } from "../components/CharacterExploration";
import { FigureDrawing } from "../components/FigureDrawings";

const Misc = () => {
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <Instagram />
      <Storybeats />
      <CharacterExploration />
      <FigureDrawing />
    </div>
  );
};

export default Misc;
