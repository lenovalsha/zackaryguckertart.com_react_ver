import React from "react";
import Section from "./Section";
const Instagram = () => {
  return (
    <Section>
      <div
        className="sk-instagram-feed"
        style={{ overflow: "hidden" }}
        data-embed-id="97109"
      ></div>
      <script
        src="https://widgets.sociablekit.com/instagram-feed/widget.js"
        async
        defer
      ></script>
      <h1>Hello</h1>
    </Section>
  );
};

export default Instagram;
