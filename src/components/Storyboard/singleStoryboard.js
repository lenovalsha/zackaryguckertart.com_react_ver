import React from "react";
import { pStyle } from "./styles";
import { useState } from "react";
function SingleStoryboard(props) {
  const [isShow, setIsShow] = useState(false);

  const Show = () => {
    setIsShow(!isShow);
  };

  const showStyle = {
    display: isShow ? "block" : "none",
  };
  const spanStyle = {
    display: "inline-block",
    transform: isShow ? "rotate(90deg)" : "rotate(270deg)",
    color: "Black",
    fontWeight: "900",
    marginLeft: "20px",
    fontSize: "20px",
  };
  return (
    <div id={props.id}>
      <div className="container" style={{ marginBottom: "200px" }}>
        <h2>{props.title}</h2>
        {props.gridFrame}
        {props.singleFrame}
        <div className="row">
          <div className="col-lg-12">
            <p style={pStyle}>{props.author}</p>
            <p style={pStyle}> {props.boarded}</p>
            <p style={pStyle}>
              {props.content}
              {props.youtube !== "" && (
                <span>
                  <a href={props.youtube}> click here.</a>
                </span>
              )}
              {props.artstation !== "" && (
                <span>
                  {" To see the process photos "}
                  <a href={props.artstation}>click here</a>.
                </span>
              )}
            </p>
          </div>
          <span className="development-photos" onClick={Show}>
            Development Photos <span style={spanStyle}>></span>
          </span>
          <div className="development" style={showStyle}>
            {props.images.map((item, index) => (
              <img src={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleStoryboard;
