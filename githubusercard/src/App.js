import React from 'react';
import './App.css';
import styled from 'styled-components';

import UserData from './User';
import UserFollowers from './Followers';
import UserFollows from './Following';


//styling
const FlexContainer = styled.section`
  width: 80%;
  margin: 2% auto;
  display: flex;
  justify-content: space-between;
  `

class App extends React.Component {
  constructor() {        
    super();
    this.state = {
      userInfo: [],
      userid: '',          
    };
    this.sectionRef = React.createRef();
  } 
   render() {
    return (
      <div className="App">
      <h1>Welcome To The (Unofficial) GitHub Finder App </h1>
      <UserData />
      
      <FlexContainer 
        ref={this.sectionRef}
        className="follow-container"
      >
        <UserFollowers />
        <UserFollows />
      </FlexContainer>
    </div>
    
  );
   }
  
}

export default App;
