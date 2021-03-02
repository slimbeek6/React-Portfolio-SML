import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
    return (
      <div class="tile is-ancestor" >
        <div class="tile is-parent" >
            <article class="tile is-child box" >
            <Link to={"/portfolio"} class="title">Portfolio</Link>
            <br></br>
            <p class="subtitle">My Work</p>
            <img src="../assets/job-hunt.jpg" alt="An example of a project I created for logging job hunt data" />
            </article>
        </div>
        <div class="tile is-parent" id="About-box">
            <article class="tile is-child box">
            <Link to={"/about"} class="title">About Me</Link>
            <br /><br />
            <img src="../assets/self.jpg" alt="Photo of myself and my sister with our dogs" id="selfphoto" />
            </article>
        </div>
        <div class="tile is-parent" id="Contact-box">
            <article class="tile is-child box">
            <Link to={"/contact"} class="title">Contact</Link>
            <br/>
            <p class="subtitle">How to get in touch</p>
            <img src="../assets/contact.png" alt="Icon of contacts list" />
            </article>
        </div>
      </div>
    )
};

export default Home;