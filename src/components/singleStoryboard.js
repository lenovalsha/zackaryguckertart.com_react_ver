import React from "react";

const singleStoryboard = (props) => {
  return (
    <div id={props.id}>
      <div className="container" style={{ marginBottom: "2 00px" }}>
        <h2>{props.title}</h2>
        {props.gridFrame}
        {props.singleFrame}
        <div className="row">
          <div className="col-lg-12">
            <p className="written">{props.author}</p>
            <p>{props.boarded}</p>
            <p className="written">
              {props.content}
              <span>
                <a href={props.youtube}>click here.</a>
              </span>
              {props.arstation !== "" && (
                <span>
                  {" To see the process photos "}
                  <a href={props.arstation}>click here.</a>
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
