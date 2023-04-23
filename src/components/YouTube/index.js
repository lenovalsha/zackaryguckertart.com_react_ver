import React from "react";
import youtubeEntry from "./youtubeEntry";

const Video = (props) => {
  return (
    <div className="col-lg-3">
      <div className="embed-responsive embed-responsive-16by9">
        {props.iframe}
      </div>
    </div>
  );
};

function createYoutubeComponents(e) {
  return <Video id={e.id} iframe={e.iframe} />;
}
function YouTube() {
  return (
    <div className="container-fluid">
      <div className="row" id="youtube">
        {youtubeEntry.map(createYoutubeComponents)}
      </div>
    </div>
  );
}
export default YouTube;
