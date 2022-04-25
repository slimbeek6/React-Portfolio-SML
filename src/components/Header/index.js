import React from "react";
import "./style.css";

function Header (props) {
    return (
        <div class="row">
            <div class="col-1"></div>
            <header className="jumbotron col-10">
                <h2 className="Title" style={{ display: props.display }}>Welcome to Shaun Limbeek's Portfolio</h2>
            </header>
            <div class="col-1"></div>
        </div>
    );
}

export default Header;