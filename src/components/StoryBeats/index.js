import React from "react";
import { entry } from "./entry";
import App from "../../App";
function Image(props) {
  return (
    <div className="col-lg-4">
      <img src={props.src} />
    </div>
  );
}
function createImageComponents(e) {
  return <Image src={e.src} />;
}
export function Storybeats() {
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div id="storyBeats" style={{ marginBottom: "100px" }}>
        <div className="row">
          <h1 className="title">Story Beats</h1>
          {entry.map(createImageComponents)}
        </div>
      </div>
    </div>
  );
}
