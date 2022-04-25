import React from "react";
import "./style.css";


function checkScreen () {
    var windowSize = window.innerWidth;
    return windowSize;
}

function Project (props) {
    var width = checkScreen();
    if (width < 800) {
        return (
            <div class={props.id}>
                <figure class={props.id}>
                    <a class="subtitle" href={props.url} target="_blank"><span><h3><strong>{props.title}</strong></h3></span></a>
                    <br/>
                    
                        <div class="projCard">  
                            <img src={props.img} alt={props.alt} class="cardImg" />
                        </div>
                        <br/><br/>
                        <div >
                            <p class="cardtext">
                                {props.description}
                            </p>
                        </div>
                    
                </figure>
            </div> 
        )
    } else {
        return (
            <div class={props.id}>
                <figure class={props.id}>
                    <a class="subtitle" href={props.url} target="_blank"><span><h3><strong>{props.title}</strong></h3></span></a>
                    <br/>
                    <div class="row">
                        <div class="col-4 projCard">  
                            <img src={props.img} alt={props.alt} class="cardImg" />
                        </div>
                        <div class="col-8">
                            <p class="cardtext">
                                {props.description}
                            </p>
                        </div>
                    </div>
                </figure>
                
            </div> 
        )
    }
    
};

export default Project;


