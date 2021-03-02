import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {

  return (
    <nav class="navbar">
        <div class="navbar-brand">
            <Link to={"/"}>
                <h1 class="title" >Shaun Limbeek</h1>
            </Link>
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarRightSide">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarRightSide" class="navbar-menu">
            <div class="navbar-end">
                <Link to={"/about"} class="navbar-item menuItem" >About</Link>
                <Link to={"/portfolio"} class="navbar-item menuItem">Portfolio</Link>
                <Link to={"/contact"} class="navbar-item menuItem" >Contact</Link>
            </div>
        </div>
    </nav>
  );
}

export default Nav;
