import React from "react";
import "./style.css"

const style =  {
    width: "100%",
    textAlign: "center",
    fontSize: "3rem",
    color: "#black",
    marginBottom: "50px",
    padding: "2rem",
    borderBottom: "1px solid white",
    borderTop: "1px solid white"

  }

function Header(props) {
    return (
        <div className="jumbotron-fluid" style={style}>
            <h1 className="display-4">Avengers Memory Game</h1>
            <p className="lead">Try and click as many cards as you can, but don't choose the same card twice!</p>
            <span>{props.display}</span>
            <hr></hr>
            <span className="score" >Score: {props.score}   High Score: {props.highscore}</span>
        </div>
    )
}

export default Header;