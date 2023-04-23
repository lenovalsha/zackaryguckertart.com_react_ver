import React from "react";
import storyboardEntry from "./storyboardEntry";
import SingleStoryboard from "./singleStoryboard";

function createStoryboard(e) {
  return (
    <SingleStoryboard
      id={e.id}
      title={e.title}
      gridFrame={e.gridFrame}
      singleFrame={e.singleFrame}
      author={e.author}
      boarded={e.boarded}
      content={e.content}
      youtube={e.youtube}
      arstation={e.arstation}
    />
  );
}
const Storyboard = () => {
  return <>{storyboardEntry.map(createStoryboard)}</>;
};

export default Storyboard;
