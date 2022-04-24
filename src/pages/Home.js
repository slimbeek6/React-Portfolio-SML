import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";


const Home = () => {
    return (
        
      
        <div class="row" >
          <div class="card col-12 oddProj" >
              <Link to={"/portfolio"} class="title"><span><h4 class="subtitle" >My Work</h4></span></Link>
              <br></br>
              <div class ="row">
                <Link to={"/portfolio"} class="col-6">
                  <img src="../assets/job-hunt.jpg" alt="An example of a project I created for logging job hunt data" id="portfolioimg" class="homepageImg"/>
                </Link>

                <div class="col-6">lorem ipsum</div>
              </div>
          </div>
          <div class="card col-12 evenProj" >
              <Link to={"/about"} class="title"><span><h4 class="subtitle">About Me</h4></span></Link>
              <br />
              <div class="row">
                <div class="col-6">
                  <h5 class="title">My Career and Education</h5>
                  <h6 class="subtitle">Career</h6>
                  <ul class="homeList">
                    <li>Atlassian</li>
                    <li>Facebook</li>
                    <li>Mars & Co.</li>
                  </ul>
                  <h6 class="subtitle">Education</h6>
                  <ul class="homeList">
                    <li>UC Berkeley Extension</li>
                    <li>Vanderbilt University</li>
                  </ul>
                </div>
                
                <Link to={"/about"} class="col-6">
                  <img src="../assets/self.jpg" alt="Photo of myself and my sister with our dogs" id="selfphoto" class="homepageImg" />
                </Link>
              </div>
          </div>
          <div class="card col-12 oddProj" id="Contact-box">              
              <Link to={"/contact"} class="title"><span><h4 class="subtitle">Get In Touch</h4></span></Link>
              <br/>
              
                <Link to={"/contact"}>
                  <img src="../assets/contact.png" alt="Icon of contacts list" id="contactimg" class="homepageImg"/>
                </Link>
              
          </div>
        </div>
      
     
    )
};

export default Home;