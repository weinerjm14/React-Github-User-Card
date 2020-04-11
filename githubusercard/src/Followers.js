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

class UserFollowers extends React.Component {
    constructor() {
        super();
        this.state = {
            followerData: [],
        };
        this.h3Ref = React.createRef();
    }

    componentDidMount() {
        // axios.get(`https://api.github.com/users/${this.state.userid}/followers`)
        // .then(
        //     res => {this.setState({ followerData: res.data })},           
        // )
        // .catch(err => {console.log('error:', err)});
         axios.get(`https://api.github.com/users/weinerjm14/followers`)
        .then(
            res => {this.setState({ followerData: res.data })},           
        )
        .catch(err => {console.log('error:', err)});
    };
    render() {
        return(
            <section className="followers">
                <StyledHThree ref={this.h3Ref}>Followers</StyledHThree>
                {this.state.followerData.map(item => {
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

export default UserFollowers;