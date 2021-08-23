import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";


const Home = () => {
    return (
      <div>
        <Header />
      <div class="tile is-ancestor" >
        <div class="tile is-parent" >
            <article class="tile is-child box" >
            <Link to={"/portfolio"} class="title">Portfolio</Link>
            <br></br>
            <p class="subtitle">My Work</p>
            <Link to={"/portfolio"}>
              <img src="../assets/job-hunt.jpg" alt="An example of a project I created for logging job hunt data" id="portfolioimg"/>
            </Link>
            </article>
        </div>
        <div class="tile is-parent" id="About-box">
            <article class="tile is-child box">
            <Link to={"/about"} class="title">About Me</Link>
            <br /><br />
            <Link to={"/about"}>
              <img src="../assets/self.jpg" alt="Photo of myself and my sister with our dogs" id="selfphoto" />
            </Link>
            </article>
        </div>
        <div class="tile is-parent" id="Contact-box">
            <article class="tile is-child box">
            <Link to={"/contact"} class="title">Contact</Link>
            <br/>
            <p class="subtitle">How to get in touch</p>
            <Link to={"/contact"}>
              <img src="../assets/contact.png" alt="Icon of contacts list" id="contactimg"/>
            </Link>
            </article>
        </div>
      </div>
      </div>
    )
};

export default Home;