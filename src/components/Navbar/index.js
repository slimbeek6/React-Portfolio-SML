import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {

  return (
    
    <nav class="navbar navbar-expand-lg sticky-top navbar-light ">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">Home</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent" >
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link class="nav-link active" to={"/about"} >About</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link active" to={"/portfolio"} >Portfolio</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link active" to={"/contact"}  >Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
}

export default Nav;
