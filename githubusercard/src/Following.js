import React from 'react';
import axios from 'axios';

import FollowCard from './FollowCard';

class UserFollows extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            followsData: [], 
        };
    }

    componentDidMount() {
        axios.get(`https://api.github.com/users/weinerjm14/following`)
        .then(
            res => {this.setState({ followsData: res.data })},           
        )
        .catch(err => {console.log('error:', err)});
    };
    render() {
        return(
            <section className="follows">
                <section className="title">
                    <h3 ref={this.h3Ref}>Following</h3>
                </section>
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