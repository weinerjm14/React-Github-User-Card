import React from "react";

import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';

function UserCard (props) {
   // const SpacingContainer = styled.section`
    //     padding-left: 8%;
    // `
    // const StyledHThree = styled.h3`
    //     font-size: 1.8rem;
        
    // `
    
    return (
        
        <section className="userInfoCard" key={props.id}>
           <section className='img-container'>
                <img src={props.AvaUrl} alt={props.name}/>
            </section>
            <section className="info-container">
                <h2><a href={props.github}>{props.name}</a></h2>
                <h3 >Company: {props.company}</h3 >
                <p>Location: {props.location}</p>
                <p>Website: <a href={props.blog}>{props.blog}</a></p>
                <p>Followers: {props.followers}</p>
                <p>Following: {props.following}</p>
                <p>Repos: {props.repos}</p>
                <p>Bio:<br/>{props.bio}</p>
            </section>
            <GitHubCalendar username={props.login} color="sienna" >
                <ReactTooltip delayShow={50} html />
            </GitHubCalendar>    
        </section>
    )
}

export default UserCard;