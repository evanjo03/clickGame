import React from "react";

const style = {
    width: "100%",
    fontFamily: "'Rubik', sans-serif",
}

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={style}>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="https://github.com/evanjo03/clickGame">Github</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;