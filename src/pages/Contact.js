import React from "react";


function checkScreen () {
    var windowSize = window.innerWidth;
    return windowSize;
}

const Contact = () => {
    var width = checkScreen();
    

    if (width > 800) {
        return (
            <div>
                <br />
                <div class="row">
                    <div class="card col-12" id="contactPane">
                        <h3 class="title">Getting in Touch</h3>        
                        <br />
                        {/* Column Headers */}
                        <div class="row">
                            <h4  class="col-3 subtitle" style={{textAlign: "center"}}><strong>Email: </strong></h4>
                            <h4  class="col-3 subtitle" style={{textAlign: "center"}}><strong>LinkedIn: </strong></h4>
                            <h4  class="col-3 subtitle" style={{textAlign: "center"}}><strong>Github: </strong></h4>
                            <h4  class="col-3 subtitle" style={{textAlign: "center"}}><strong>HackerRank: </strong></h4>
                        </div>

                        {/* Links to contact information including images */}
                        <div class="row" >
                            <div class="col-3" style={{background: "none"}}>
                                <a href="mailto:shaun.limbeek@gmail.com">
                                    <img src="../assets/send-email.png" alt="Email being sent" class="contactImg" />
                                </a>
                            </div>

                            <div class="col-3" style={{background: "none"}}>
                                <a href="https://www.linkedin.com/in/shaun-limbeek/">
                                    <img src="../assets/LI-logo.png" alt="LinkedIn logo" class="contactImg" />
                                </a>
                            </div>

                            <div class="col-3" style={{background: "none"}}>
                                <a href="https://github.com/slimbeek6/">
                                    <img src="../assets/GitHub-logo.png" alt="Github logo" class="contactImg" />
                                </a>
                            </div>

                            <div class="col-3" style={{background: "none"}}>
                                <a href="https://www.hackerrank.com/shaun_limbeek">
                                    <img src="../assets/HR-logo.jpeg" alt="HackerRank logo" class="contactImg" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <br />
                <div class="row">
                    <div class="card col-12" id="contactPane">
                        <h3 class="title">Getting in Touch</h3>        
                        <br />
                        {/* Column Headers */}
                        <div class="row">
                            <h4  class="col-6 subtitle" style={{textAlign: "center"}}><strong>Email: </strong></h4>
                            <h4  class="col-6 subtitle" style={{textAlign: "center"}}><strong>LinkedIn: </strong></h4>
                        </div>

                        {/* Links to contact information including images */}
                        <div class="row" >
                            <div class="col-6" style={{background: "none"}}>
                                <a href="mailto:shaun.limbeek@gmail.com">
                                    <img src="../assets/send-email.png" alt="Email being sent" class="contactImg" />
                                </a>
                            </div>

                            <div class="col-6" style={{background: "none"}}>
                                <a href="https://www.linkedin.com/in/shaun-limbeek/">
                                    <img src="../assets/LI-logo.png" alt="LinkedIn logo" class="contactImg" />
                                </a>
                            </div>
                        </div>

                        <div class="row">
                            <h4  class="col-6 subtitle" style={{textAlign: "center"}}><strong>Github: </strong></h4>
                            <h4  class="col-6 subtitle" style={{textAlign: "center"}}><strong>HackerRank: </strong></h4>
                        </div>
                            
                        <div class="row">
                            <div class="col-6" style={{background: "none"}}>
                                <a href="https://github.com/slimbeek6/">
                                    <img src="../assets/GitHub-logo.png" alt="Github logo" class="contactImg" />
                                </a>
                            </div>

                            <div class="col-6" style={{background: "none"}}>
                                <a href="https://www.hackerrank.com/shaun_limbeek">
                                    <img src="../assets/HR-logo.jpeg" alt="HackerRank logo" class="contactImg" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};


export default Contact;