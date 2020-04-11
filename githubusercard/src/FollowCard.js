import React from "react";
import styled from 'styled-components';

function FollowCard (props) {
    const StyledCard = styled.section`
        display:flex;
        justify-content: space-evenly;
        width: 70%;
        margin: 3%;
        padding: 3% 2%;
        border: 8px ridge rosybrown;
        background-color: linen;
    `

    return (
        <StyledCard key={props.id}>
            <img src={props.AvaUrl} alt={props.name}/>
            <h3><a href={props.github}>{props.name}</a></h3>
        </StyledCard>
    )
}

export default FollowCard;