import React from 'react';
import './App.css';
import axios from 'axios';

import UserData from './User';
import UserFollowers from './Followers';
import UserFollows from './Following';
import ChoseUser from './Search';


class App extends React.Component {
  constructor() {        
    super();
    this.state = {
      userInfo: [],
      userid: 'weinerjm14',          
    };
    this.sectionRef = React.createRef();
  }

  handleChanges = e => {
    this.setState({ userid: e.target.value });
    console.log("this.state.userid: ", this.state.userid);
  };

  getNewUser = e => {
    e.preventDefault();
    
    axios.get(`https://api.github.com/users/${this.state.userid}`)
     .then( res => this.setState({userInfo: res.data}))
     .catch(err => console.log('error:', err))
          
  };
  componentDidUpdate(prevProps, prevState) {
    console.log('Did Update!', prevProps, this.setState.userInfo)
    // if (prevState.userInfo !== this.state.userInfo){
    
    // } 
  }

   render() {
    return (
      <div className="app-container">
        <h1>Welcome To The (Unofficial) GitHub Finder App </h1>
        <UserData userid={this.state.userid}/>
        <ChoseUser onChange={this.handleChanges} onClick={this.getNewUser}/>
        <section className="follow-container">
          <UserFollowers userid={this.state.userid}/>
          <UserFollows userid={this.state.userid}/>
        </section>
    </div>
    
  );
   }
  
}

export default App;
