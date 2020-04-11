import React from "react";
import styled from 'styled-components';

function FollowCard (props) {
    const StyledCard = styled.section`
        display:flex;
        justify-content: space-evenly;
        align-items: center;
        width: 70%;
        margin: 3% 0;
        padding: 3% 0;
        border: 8px ridge rosybrown;
        background-color: linen;
    `
    const StyledHThree = styled.h3`
        font-size: 1.8rem;
        
    `

    return (
        <StyledCard key={props.id}>
            <img src={props.AvaUrl} alt={props.name}/>
            <StyledHThree>User Name:<br /><a href={props.github}>{props.name}</a></StyledHThree>
        </StyledCard>
    )
}

export default FollowCard;