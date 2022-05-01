import React from "react";

function checkScreen () {
    var windowSize = window.innerWidth;
    return windowSize;
}

const About = () => {
    var width = checkScreen();

    if (width > 800) {
        return (
            <div id="aboutPane">
                <br/>
                <h1 class="title">About Me</h1>
                <br />
                        
                <div class="row">
                    <div class="col-5 about-card">
                        <img class="aboutImg" alt="Picture of myself and my sister with our dogs in Carmel" src="./assets/self.jpg" />
                    </div>
                    <div class="col-6 about-card">
                    <p id="aboutMe">
                        I'm Shaun, a full-stack web developer and former consultant and compensation analyst.  I'm currently living in San Francisco, and recently completed studying at the University of Berkeley extension to earn my certificate in full-stack web development.
                        <br/><br/>
                        After earning a BS in Mathematics and Economics from Vanderbilt University, I began a career in management and strategy consulting at a boutique firm named Mars & Co. During this time I worked for Mars on 4 different continents, with projects taking me to Brussels, Sao Paolo, Hong Kong, Chang'anzhen, and across the US and Canada.
                        <br/><br/>
                        My coding journey began during my time as a strategy consultant focused on providing data-driven solutions to complex business problems. This started with building low complexity relational databases in Microsoft Excel and Access, and slowly grew into SQL server driven databases and queries.  After years of building and implementing complex databases and data analytics around compensation at Facebook and Atlassian, I saw the next step for my analytics toolset would have to be more complex coding and database languages.  During the recent lockdowns around COVID-19, I attended a coding bootcamp through the UC Berkeley Extension Program, and am now continuing to learn and apply new languages and systems including:
                    </p>
                    <ul style={{textAlign: "left"}}>
                        <li>HTML, CSS, and Javascript</li>
                        <li>Sequelize, MongoDB, and Postgres</li>
                        <li>React, Ruby on Rails, and MVC Frameworks</li>
                    </ul>
                    </div>
                </div>
            </div>    
        )
    } else {
        return (
            <div id="aboutPane">
                <br/>
                <h1 class="title">About Me</h1>
                <br />
                        
                <div class="row">
                    <div class="col-12 about-card">
                        <img class="aboutImg" alt="Picture of myself and my sister with our dogs in Carmel" src="./assets/self.jpg" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 about-card">
                    <p id="aboutMe">
                        I'm Shaun, a full-stack web developer and former consultant and compensation analyst.  I'm currently living in San Francisco, and recently completed studying at the University of Berkeley extension to earn my certificate in full-stack web development.
                        <br/><br/>
                        After earning a BS in Mathematics and Economics from Vanderbilt University, I began a career in management and strategy consulting at a boutique firm named Mars & Co. During this time I worked for Mars on 4 different continents, with projects taking me to Brussels, Sao Paolo, Hong Kong, Chang'anzhen, and across the US and Canada.
                        <br/><br/>
                        My coding journey began during my time as a strategy consultant focused on providing data-driven solutions to complex business problems. This started with building low complexity relational databases in Microsoft Excel and Access, and slowly grew into SQL server driven databases and queries.  After years of building and implementing complex databases and data analytics around compensation at Facebook and Atlassian, I saw the next step for my analytics toolset would have to be more complex coding and database languages.  During the recent lockdowns around COVID-19, I attended a coding bootcamp through the UC Berkeley Extension Program, and am now continuing to learn and apply new languages and systems including:
                    </p>
                    <ul style={{textAlign: "left"}}>
                        <li>HTML, CSS, and Javascript</li>
                        <li>Sequelize, MongoDB, and Postgres</li>
                        <li>React, Ruby on Rails, and MVC Frameworks</li>
                    </ul>
                    </div>
                </div>
            </div>   
        )
    }
};


export default About;