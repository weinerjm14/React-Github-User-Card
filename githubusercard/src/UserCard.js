import React from "react";
import styled from 'styled-components';

import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';

function UserCard (props) {
    const FlexContainer = styled.section`
        width: 80%;
        margin: 3% auto;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4% 2%;
        border: 8px ridge rosybrown;
        background-color: linen;
        
    `
    const StyledImg = styled.img`
        width: 300px;
        height: 300px;
    `
    const SpacingContainer = styled.section`
        padding-left: 8%;
    `
    
    
    return (
        
        <FlexContainer className="UserInfoCard" key={props.id}>
           <section className='img-container'>
                <StyledImg src={props.AvaUrl} alt={props.name}/>
            </section>
            <SpacingContainer className="info-container">
                <h2><a href={props.github}>{props.name}</a></h2>
                <h3>Company: {props.company}</h3>
                <p>Location: {props.location}</p>
                <p>Website: <a href={props.blog}>{props.blog}</a></p>
                <p>Followers: {props.followers}</p>
                <p>Following: {props.following}</p>
                <p>Repos: {props.repos}</p>
                <p>Bio:<br/>{props.bio}</p>
            </SpacingContainer>
            <GitHubCalendar username={props.login} color="sienna" >
                <ReactTooltip delayShow={50} html />
            </GitHubCalendar>    
        </FlexContainer>
    )
}

export default UserCard;