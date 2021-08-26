import React from "react";

const Contact = () => {
    return (
        <div>
            <br />
        <div class="columns">
            <div class="card column is-full" id="contactPane">
                    <h3 class="title">Getting in Touch</h3>
                    
                    <br />
                    
                    {/* Column Headers */}
                    <div class="columns">
                        <h4 id="emailSect" class="column is-one-third subtitle" style={{textAlign: "center"}}><strong>Email: </strong></h4>
                        <h4 id="emailSect" class="column is-one-third subtitle" style={{textAlign: "center"}}><strong>LinkedIn: </strong></h4>
                        <h4 id="emailSect" class="column is-one-third subtitle" style={{textAlign: "center"}}><strong>Github: </strong></h4>
                    </div>

                    {/* Links to contact information including images */}
                    <div class="columns">
                        <article class="column is-one-third">
                            <a href="mailto:shaun.limbeek@gmail.com">
                                <img src="../assets/send-email.png" alt="Email being sent" id="sendemail" />
                            </a>
                        </article>

                        <article class="column is-one-third">
                            <a href="https://www.linkedin.com/in/shaun-limbeek/">
                                <img src="../assets/LI-logo.png" alt="LinkedIn logo" id="LI-logo" style={{maxWidth: "250px"}}/>
                            </a>
                        </article>

                        <article class="column is-one-third">
                            <a href="https://github.com/slimbeek6/">
                                <img src="../assets/GitHub-logo.png" alt="Github logo" id="Github-logo" style={{maxWidth: "250px"}}/>
                            </a>
                        </article>
                    </div>
            </div>
        </div>
        </div>
    )
};


export default Contact;