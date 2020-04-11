import React from "react";

function FollowCard (props) {
    return (
        <section key={props.id}>
            <img src={props.AvaUrl} alt={props.name}/>
            <h2><a href={props.github}>{props.name}</a></h2>
        </section>
    )
}

export default FollowCard;