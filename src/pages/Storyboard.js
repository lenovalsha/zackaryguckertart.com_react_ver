import React from "react";
import storyboardEntry from "../components/Storyboard/storyboardEntry";
import SingleStoryboard from "../components/Storyboard/singleStoryboard";

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
      artstation={e.artstation}
      images={e.images}
    />
  );
}
const Storyboard = () => {
  return <>{storyboardEntry.map(createStoryboard)}</>;
};

export default Storyboard;
