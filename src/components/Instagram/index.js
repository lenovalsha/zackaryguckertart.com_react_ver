import React from "react";
import Section from "./Section";
import { useEffect } from "react";
const Instagram = () => {
  // useEffect(() => {
  //   const script = document.createElement("script");

  //   script.src = "https://widgets.sociablekit.com/instagram-feed/widget.js";
  //   script.defer = true;
  //   script.setAttribute("data-embed-id", "97109");

  //   document.head.appendChild(script);

  //   return () => {
  //     document.head.removeChild(script);
  //   };
  // }, []);

  return (
    <Section>
      <div className="sk-instagram-feed" style={{ overflow: "hidden" }}>
        <iframe
          src="https://widgets.sociablekit.com/instagram-feed/iframe/97109"
          frameborder="0"
          width="100%"
          height="1000"
        ></iframe>
      </div>
    </Section>
  );
};

export default Instagram;
