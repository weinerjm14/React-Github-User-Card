import React from 'react';
import axios from 'axios';

import FollowCard from './FollowCard';

class UserFollows extends React.Component {
    constructor() {
        super();
        this.state = {
            followsData: [], 
        };
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
                <h2>Follows</h2>
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