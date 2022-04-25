import React from "react";
import "./style.css";

function Project (props) {
    return (
        <div class={props.id}>
            <figure class={props.id}>
                <a class="subtitle" href={props.url} target="_blank"><span><h3><strong>{props.title}</strong></h3></span></a>
                <br/>
                <div class="row">
                    <img src={props.img} alt={props.alt} class="cardimg col-4" />
                    <p class="cardtext col-6">
                        {props.description}
                    </p>
                </div>
            </figure>
        </div> 
    )
};

export default Project;


