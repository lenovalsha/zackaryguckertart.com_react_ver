import React from "react";
import Section from "./Section";
import { useEffect } from "react";
const Instagram = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://widgets.sociablekit.com/instagram-feed/widget.js";
    script.defer = true;
    script.setAttribute("data-embed-id", "97109");

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Section>
      <div className="sk-instagram-feed" style={{ overflow: "hidden" }}></div>
    </Section>
  );
};

export default Instagram;
