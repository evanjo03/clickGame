import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card"  onClick={() => props.selectImage(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <strong>{props.name}</strong>

        {/* <p>CLicked:{props.clicked.toString()} </p>
        <p>{props.id}</p> */}
      </div>

    </div>
  );
}

export default FriendCard;
