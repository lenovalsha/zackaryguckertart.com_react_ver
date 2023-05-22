import { entry } from "./entry";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Image(props) {
  return (
    <div class="col-lg-6">
      <LazyLoadImage src={props.src} />
    </div>
  );
}
function createImageComponents(e) {
  return <Image src={e.src} />;
}
export function CharacterExploration() {
  return (
    <div id="charExploration" style={{ marginBottom: "100px" }}>
      <div className="row">
        <h1 className="title">Character Exploration</h1>
        {entry.map(createImageComponents)}
      </div>
    </div>
  );
}
