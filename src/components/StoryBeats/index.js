import React from "react";
import { entry } from "./entry";
import App from "../../App";
import { LazyLoadImage } from "react-lazy-load-image-component";
function Image(props) {
  return (
    <div className="col-lg-4">
      <LazyLoadImage src={props.src} alt={props.src} loading="lazy" />
    </div>
  );
}
function createImageComponents(e) {
  return <Image src={e.src} />;
}
export function Storybeats() {
  return (
    <div id="storyBeats" style={{ marginBottom: "100px" }}>
      <div className="row">
        <h1 className="title">Story Beats</h1>
        {entry.map(createImageComponents)}
      </div>
    </div>
  );
}
