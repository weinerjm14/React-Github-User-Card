import React from 'react';
import axios from 'axios';

import FollowCard from './FollowCard';

class UserFollowers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            followerData: [],
        };
    }

    componentDidMount() {
        axios.get(`https://api.github.com/users/weinerjm14/followers`)
        .then(
            res => {this.setState({ followerData: res.data })},           
        )
        .catch(err => {console.log('error:', err)});
    };
    render() {
        return(
            <section className="followers">
                <h3 ref={this.h3Ref}>Followers</h3>
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