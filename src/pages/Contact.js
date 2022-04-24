import React from "react";

const Contact = () => {
    return (
        <div>
            <br />
        <div class="row">
            <div class="card col-12" id="contactPane">
                    <h3 class="title">Getting in Touch</h3>
                    
                    <br />
                    
                    {/* Column Headers */}
                    <div class="row">
                        <h4 id="emailSect" class="col-4 subtitle" style={{textAlign: "center"}}><strong>Email: </strong></h4>
                        <h4 id="emailSect" class="col-4 subtitle" style={{textAlign: "center"}}><strong>LinkedIn: </strong></h4>
                        <h4 id="emailSect" class="col-4 subtitle" style={{textAlign: "center"}}><strong>Github: </strong></h4>
                    </div>

                    {/* Links to contact information including images */}
                    <div class="row">
                        <article class="col-4 card">
                            <a href="mailto:shaun.limbeek@gmail.com">
                                <img src="../assets/send-email.png" alt="Email being sent" id="sendemail" />
                            </a>
                        </article>

                        <article class="col-4 card">
                            <a href="https://www.linkedin.com/in/shaun-limbeek/">
                                <img src="../assets/LI-logo.png" alt="LinkedIn logo" id="LI-logo" style={{maxWidth: "250px"}}/>
                            </a>
                        </article>

                        <article class="col-4 card">
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