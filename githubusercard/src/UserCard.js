import React from "react";

function UserCard (props) {
    return (
        <section key={props.id}>
            <img src={props.AvaUrl} alt={props.name}/>
            <h2><a href={props.github}>{props.name}</a></h2>
            <h2>Company: {props.company}</h2>
            <p>Location: {props.location}</p>
            <p><a href={props.blog}>Blog</a></p>
            <p>Followers: {props.followers}</p>
            <p>Following: {props.following}</p>
            <p>Repos: {props.repos}</p>
            <p>Bio: {props.bio}</p>
        </section>
    )
}

export default UserCard;