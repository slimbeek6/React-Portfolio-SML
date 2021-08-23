import React from "react";
import Header from "../components/Header";

const Contact = () => {
    return (
        <div>
            <Header display="none" />
        <div class="columns">
            <div class="card column is-full" id="contactPane">
                
                    <h3 class="title">How to get in touch</h3>
                    
                    <br />
                    <div class="columns">
                        <h4 id="emailSect" class="column is-one-third subtitle" style={{textAlign: "left", marginLeft: "5%"}}><strong>Email: </strong></h4>
                        <h4 id="emailSect" class="column is-one-third subtitle" style={{textAlign: "left", marginLeft: "2%"}}><strong>LinkedIn: </strong></h4>
                        <h4 id="emailSect" class="column is-one-third subtitle" style={{textAlign: "left", marginLeft: "2%"}}><strong>Other: </strong></h4>
                    </div>

                    <div class="columns">
                        <form class="column is-one-third">
                            <div class="form-group columns">
                                <label for="InputEmail" class="column is-one-third">Email Subject: </label>
                                <input type="email" class="form column is-half" id="InputEmail" aria-describedby="emailHelp" placeholder="Subject" />
                            </div>
                            <br />
                            <div class="form-group columns">
                                <label for="InputMessage" class="column is-one-third">Message:</label>
                                <input type="message" class="form-control column is-half" id="InputMessage" aria-describedby="messageHelp" placeholder="Message" />
                            </div>
                            <button type="submit" class="button" id="send-email">Submit</button>
                        </form>

                        <div class="LI-profile-badge column is-one-third"  data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="shaun-limbeek"><a class="LI-simple-link" href='https://www.linkedin.com/in/shaun-limbeek?trk=profile-badge'>Shaun Limbeek</a></div>

                        <article class="column is-one-third">
                            <ul>
                                <li><a href="https://github.com/slimbeek6/">Github</a></li>
                                <li><a href="/portfolio">Portfolio</a></li>
                                <li><a href="https://shaun-limbeek.medium.com/">Medium</a></li>
                            </ul>
                        </article>
                    </div>
            </div>
        </div>
        </div>
    )
};


export default Contact;