import React from "react";

function FollowCard (props) {
    
    return (
        <section className='fc-container' key={props.id}>
            <img src={props.AvaUrl} alt={props.name}/>
            <h3>User Name:<br /><a href={props.github}>{props.name}</a></h3>
        </section>
    )
}

export default FollowCard;