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
                <h3><i>Company:</i><br />{props.company}</h3 >
                <p><b>Location:</b> {props.location}</p>
                <p><b>Website:</b> <a href={props.blog}>{props.blog}</a></p>
                <p><b>Followers:</b> {props.followers}</p>
                <p><b>Following:</b> {props.following}</p>
                <p><b>Repos:</b> {props.repos}</p>
                <p><b>Bio:</b><br/>{props.bio}</p>
            </section>
            <GitHubCalendar username={props.login} color="sienna" >
                <ReactTooltip delayShow={50} html />
            </GitHubCalendar>    
        </section>
    )
}

export default UserCard;