import React from "react";
import Header from "../components/Header";

const About = () => {
    return (
        <div>
        <Header display="none" />

        <section class="section">
            <div>
                <h1 class="title">
                    About Me
                </h1>
            </div>
            <br />
                
            <div class="columns">
                <img class="image column is-one-third" id="picOfSelf" alt="Picture of myself and my sister with our dogs in Carmel" src="./assets/self.jpg" />
                <p class="column is-five-sixths" id="aboutMe">
                    I'm Shaun, a full-stack web developer and former consultant and compensation analyst.  I'm currently living in San Francisco, and recently completed studying at the University of Berkeley extension to earn my certificate in full-stack web development.
                    <br/><br/>
                    After earning a BS in Mathematics and Economics from Vanderbilt University, I began a career in management and strategy consulting at a boutique firm named Mars & Co. During this time I worked for Mars on 4 different continents, with projects taking me to Brussels, Sao Paolo, Hong Kong, Chang'anzhen, and across the US and Canada.
                    <br/><br/>
                    After five years on the road, I transitioned careers applying my modeling skills and business knowledge as a compensation analyst first for Facebook, then Atlassian. Since leaving Atlassian, I have started to learn and work with web development as a way to apply my analytical and systems based thinking.
                </p>
            </div>

        </section>
        </div>
    )
};


export default About;