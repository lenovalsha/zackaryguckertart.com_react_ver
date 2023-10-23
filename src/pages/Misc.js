import React from "react";
import Instagram from "../components/Instagram/index";
import { Miscellaneous } from "../components/Misc";
import { entry } from "../components/Misc/entry";

function createExpressions(e) {
  return (
    <Miscellaneous
      images={e.images}
      id={e.id}
      name={e.name}
      className={e.className}
      blur={e.blur}
    />
  );
}
const Misc = () => {
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <Instagram />
      {entry.map(createExpressions)}
    </div>
  );
};

export default Misc;
