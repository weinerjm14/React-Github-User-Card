import React from 'react';
import './App.css';
import axios from 'axios';

import UserData from './User';
import UserFollowers from './Followers';
import UserFollows from './Following';
import ChoseUser from './Search';


function App ()  {
  // constructor() {        
  //   super();
  //   this.state = {
  //     userInfo: [],
  //     userid: '', 
  //     followsid: '',        
  //   };
  // }

 
  // componentDidMount() {
  //   axios.get(`https://api.github.com/users/weinerjm14`)
  //    .then( res => this.setState({userInfo: res.data}))
  //    .catch(err => console.log('error:', err))
  // };
 
  //  render() {
    return (
      <div className="app-container">
        <h1>Welcome To The (Unofficial) GitHub Finder App </h1>
        <UserData />
        <section className="follow-container">
          <UserFollowers />
          <UserFollows />
        </section>
      </div>
    );
  }

  
export default App;