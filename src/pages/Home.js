import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";


const Home = () => {
  
  if (window.innerWidth > 800) {
    return (
      <div class="container">
        <Header />  
      
        <div class="row" style={{justifyContent: "center"}} >
          <div class="card col-3 homeProj" >
              <Link to={"/about"} class="title"><span><h4 class="subtitle">About Me</h4></span></Link>
              <br />
              <Link to={"/about"} style={{justifyContent: "center"}}>
                <img src="../assets/self.jpg" alt="Photo of myself and my sister with our dogs" class="homepageImg" />
              </Link>
          </div>
            
          <div class="card col-4 homeProj" >
            <Link to={"/portfolio"} class="title"><span><h4 class="subtitle" >My Work</h4></span></Link>
            <br></br>
            <Link to={"/portfolio"} >
              <img src="../assets/job-hunt.jpg" alt="An example of a project I created for logging job hunt data" id="portfolioimg" class="homepageImg"/>
            </Link>
          </div>
          
          <div class="card col-3 homeProj" id="Contact-box">              
            <Link to={"/contact"} class="title"><span><h4 class="subtitle">Get In Touch</h4></span></Link>
            <br/>
            <Link to={"/contact"}>
              <img src="../assets/contact.png" alt="Icon of contacts list" id="contactimg" class="homepageImg"/>
            </Link>      
          </div>  
        </div>      
      </div>
    )
  } else {
    return(
      <div class="container">
        <Header />  
        <div class="card homeProj" style={{margin: "0 2rem 1rem 2rem"}} >
          <Link to={"/about"} class="title"><span><h4 class="subtitle">About Me</h4></span></Link>
          <br />
          <Link to={"/about"} style={{justifyContent: "center"}}>
            <img src="../assets/self.jpg" alt="Photo of myself and my sister with our dogs" class="homepageImg" />
          </Link>
        </div>
            
        <div class="card homeProj" style={{margin: "0 2rem 1rem 2rem"}} >
          <Link to={"/portfolio"} class="title"><span><h4 class="subtitle" >My Work</h4></span></Link>
          <br></br>
          <Link to={"/portfolio"} >
            <img src="../assets/job-hunt.jpg" alt="An example of a project I created for logging job hunt data" id="portfolioimg" class="homepageImg"/>
          </Link>
        </div>
          
        <div class="card homeProj" id="Contact-box" style={{margin: "0 2rem 1rem 2rem"}} >
          <Link to={"/contact"} class="title"><span><h4 class="subtitle">Get In Touch</h4></span></Link>
          <br/>
          <Link to={"/contact"}>
            <img src="../assets/contact.png" alt="Icon of contacts list" id="contactimg" class="homepageImg"/>
          </Link>      
        </div>  
      </div>      
    )
  }
};

export default Home;