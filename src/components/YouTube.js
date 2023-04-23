import React from "react";

const YouTube = (props) => {
  return (
    <div className="col-lg-3">
      <div className="embed-responsive embed-responsive-16by9">
        {props.iframe}
      </div>
    </div>
  );
};

export default YouTube;
