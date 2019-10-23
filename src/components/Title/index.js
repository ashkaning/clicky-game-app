import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="row">
      <div className="scores">
        Score: {props.score} Highscore: {props.highscore}
      </div>
      <h3 className="title">{props.children}</h3>
      
    </div>
  )
}

export default Title;
