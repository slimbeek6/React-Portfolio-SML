import React from "react";
import "./style.css";

function Header (props) {
    return (
        <header className="jumbotron">
            <h2 className="subtitle" id="subtitle" style={{ display: props.display }}>Use the cards below to navigate the page</h2>
        </header>
    );
}

export default Header;