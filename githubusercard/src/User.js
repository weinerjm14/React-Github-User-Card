import React from 'react';
import axios from 'axios';

import UserCard from './UserCard';

class UserData extends React.Component {
    constructor() {        
        super();
        this.state = {
          userInfo: [],
          userid: 'weinerjm14',          
        };
      }
    
    componentDidMount() {       
        axios.get(`https://api.github.com/users/${this.state.userid}`)
        .then(
            res => {this.setState({ userInfo: res.data })},
        )
        .catch(err => {console.log('error:', err)});       
    };
    render(){
        return(
         <UserCard 
         name={this.state.userInfo.name} 
         id={this.state.userInfo.id}
         AvaUrl={this.state.userInfo.avatar_url}
         github={this.state.userInfo.html_url}
         location={this.state.userInfo.location}
         followers={this.state.userInfo.followers}
         following={this.state.userInfo.following}
         bio={this.state.userInfo.bio}
         repos={this.state.userInfo.public_repos}
         blog={this.state.userInfo.blog}
         company={this.state.userInfo.company}
         />
        )
    }
}

export default UserData;