import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {

  return (
    
    <nav class="navbar navbar-expand-lg sticky-top navbar-light ">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">Home</a>
            <div class="collapse navbar-collapse" id="navbarNav" >
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
        
        
        
        // <div class="navbar-brand">
        //     <Link to={"/"}>
        //         <h1 class="title" >Shaun Limbeek</h1>
        //     </Link>
        //     <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarRightSide">
        //         <span aria-hidden="true"></span>
        //         <span aria-hidden="true"></span>
        //         <span aria-hidden="true"></span>
        //     </a>
        // </div>

        // <div id="navbarRightSide" class="navbar-menu">
        //     <div class="navbar-end">
        //         <Link to={"/about"} class="navbar-item menuItem" >About</Link>
        //         <Link to={"/portfolio"} class="navbar-item menuItem">Portfolio</Link>
        //         <Link to={"/contact"} class="navbar-item menuItem" >Contact</Link>
        //     </div>
        // </div>
    
  );
}

export default Nav;
