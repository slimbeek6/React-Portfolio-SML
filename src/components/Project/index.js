import React from "react";
import "./style.css";

function Project (props) {
    return (
        <div className="mb-5">
            <figure class="card portfolioCard">
                <a class="subtitle column is-full" href={props.url} target="_blank"><span><h3><strong>{props.title}</strong></h3></span></a>
                <div class="columns">
                    <img src={props.img} alt={props.alt} class="cardimg column is-one-third" />
                    <p class="cardtext column is-one-half">
                        {props.description}
                    </p>
                </div>
            </figure>
        </div> 
    )
};

export default Project;


