import React from "react";
import Project from "../components/Project";



const Portfolio = () => {
    
    return (
        <div  class="container-fluid" >
            <h2>Shaun Limbeek's Portfolio</h2>
            <br/>
            <Project id="oddProj" title="Job Hunt Logger" url="https://uor-ruby.herokuapp.com/" img="../assets/job-hunt.jpg" alt="Screenshot of a project website that allows users to track their job hunt" description="In this project, I worked with two other coders to build a dashboard that would be able to provide a user with  a way to track their job search once our coding class ended. This is a full stack web application that empowers a user to better organize their job search. The user can create a unique profile, add job applications, track their status, update with notes, and compare data. The application was originally built using an MVC framework with React. Recently, I rebuilt the project utilizing Ruby on Rails and Devise to manage user signup and management. To see the github for the original project, please refer to my github."></Project>
            <Project id="evenProj" title="Financial and News Dashboard" url="https://slimbeek6.github.io/team7-score-dash/" img="../assets/financial-dash-output.png" alt="Screenshot of a project website that allows users to track stock and cryptocurrency prices, news stories, and local weather" description="In this project, I worked with two other coders to build a dashboard that would be able to provide a user with current weather, news, and financial performance of stocks and cryptocurrencies. This project was built utilizing a combination of HTML, CSS, Javascript, and JSON."/>
            <Project id="oddProj" title="Single Day Planner" url="https://slimbeek6.github.io/single-day-planner-SL/" img="../assets/single-day.png" alt="Screenshot of a project website that allows users to track their daily tasks" description="The ask was to create a planner that would cover a single work day, split out by hour, which a user could add meetings or other items to, save these items, and return to the page to see the items. The planner should also display the current date, and each hour should display whether the hour has passed, is happening, or is in the future by changing color. To accomplish this, the page was built out in HTML to provide the overall layout of the planner, then using a combination of the moment.js API (to get the current date and time) and jQuery to create, save to local storage, and display whatever items the user has input."/>
        </div>
    )
};

export default Portfolio;