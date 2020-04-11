import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import FollowCard from './FollowCard';

//styling
const StyledHThree = styled.h3`
text-align: left;
font-size: 1.8rem;
width: 70%;
`
class UserFollows extends React.Component {
    constructor() {
        super();
        this.state = {
            followsData: [], 
        };
        this.h3Ref = React.createRef();
    }

    componentDidMount() {
        // axios.get(`https://api.github.com/users/${this.state.userid}/following`)
        // .then(
        //     res => {this.setState({ followsData: res.data })},           
        // )
        // .catch(err => {console.log('error:', err)});
        axios.get(`https://api.github.com/users/weinerjm14/following`)
        .then(
            res => {this.setState({ followsData: res.data })},           
        )
        .catch(err => {console.log('error:', err)});
    };
    render() {
        return(
            <section className="follows">
                <StyledHThree ref={this.h3Ref}>Following</StyledHThree>
                {this.state.followsData.map(item => {
                        return(
                                <FollowCard 
                                name={item.login} 
                                id={item.id}
                                AvaUrl={item.avatar_url}
                                github={item.html_url}        
                                />
                            )
                        }
                        )
                }
                    
            </section>   
        );
           

    }
}

export default UserFollows;