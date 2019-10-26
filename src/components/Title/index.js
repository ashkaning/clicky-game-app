import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="row">
      
      <h3 className="title">{props.children}</h3>
      <div className="scores text-center col-md-12">
        <span className="scoreClass">Score:</span> {props.score} <span className="highScoreClass">Highscore: </span>{props.highscore}
        <div className="col-md-12  text-center win">{props.winalert}</div>
        <div className="col-md-12  text-center lost">{props.lostalert}</div>
      </div>
    </div>
  )
}

export default Title;
