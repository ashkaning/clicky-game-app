import React from "react";
import "./style.css";

function AnimateCard(props) {
  return (
    <div className="col-md-2 card-box" onClick={() => props.clickyGameFunc(props.id)}>
  
        <img className="img-thumbnail" alt={props.name} src={props.image} />

    </div>
  );
}

export default AnimateCard;
