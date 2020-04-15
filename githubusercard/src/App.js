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
      userid: 'weinerjm4', 
      followsid: '',        
    };
  }

 
  componentDidMount() {
    axios.get(`https://api.github.com/users/weinerjm14`)
     .then( res => this.setState({userInfo: res.data}))
     .catch(err => console.log('error:', err))
  };
  // handleChanges = e => {
  //   this.setState({ userid: e.target.value });
  //   console.log("this.state.userid: ", this.state.userid);
  // };
  //  getNewUser = e => {
  //   console.log('new user value should be', e.target.vale)
  //   e.preventDefault();
  //   // axios.get(`https://api.github.com/users/${this.state.userid}`)
  //   //   .then( res => this.setState({userInfo: res.data}))
  //   //   .catch(err => console.log('error:', err))
    
  // };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.userInfo !== this.state.userInfo){
      
      
      console.log('Did Update!', "State", prevState, this.setState.userInfo, "Props", prevProps, this.state.userid )
    }
    // if (prevState.userInfo !== this.state.userInfo){}   
  }
 
   render() {
    return (
      <div className="app-container">
        <h1>Welcome To The (Unofficial) GitHub Finder App </h1>
        <UserData />
        {/* <ChoseUser onSubmit={this.getNewUser} changeHandler={this.handleChanges}/> */}
        <section className="follow-container">
          <UserFollowers />
          <UserFollows />
        </section>
      </div>
    );
   }
  }

  
export default App;