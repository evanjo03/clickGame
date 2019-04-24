import React from "react";

let style = {
    main: {
    background: "black",
    color: "white",
    width: "100%"
    },
    link: {
        color: "white"
    }

}

function Footer() {
    return (
        <footer className="page-footer font-small blue pt-4" style={style.main}>
            <div className="footer-copyright text-center py-3">© 2019 Copyright:
                <a style={style.link} href="https://evanjo03.github.io"> John Evans</a>
            </div>
        </footer>
    )
}


export default Footer;