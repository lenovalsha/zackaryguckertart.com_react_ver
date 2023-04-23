import React from "react";
import { pStyle } from "./styles";

const singleStoryboard = (props) => {
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
              <span>
                <a href={props.youtube}> click here.</a>
              </span>
              {props.artstation !== "" && (
                <span>
                  {" To see the process photos "}
                  <a href={props.artstation}>click here</a>.
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default singleStoryboard;
