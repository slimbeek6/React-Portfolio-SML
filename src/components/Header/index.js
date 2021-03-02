import React from "react";
import "./style.css";

function Header (props) {
    return (
        <header className="box header">
            <h1 className="title" >Welcome to Shaun Limbeek's Portfolio</h1>
            <h3 className="subtitle" id="subtitle" style={{ display: props.display }}>Use the cards below to navigate the page</h3>
        </header>
    );
}

export default Header;