import React from 'react';
import './App.css';
import styled from 'styled-components';

import UserData from './User';
import UserFollowers from './Followers';
import UserFollows from './Following';

function App() {
  const FlexContainer = styled.section`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  `

  return (
    <div className="App">
      <h1>Welcome To The (Unofficial) GitHub Finder App </h1>
      <UserData />
      <FlexContainer className="follow-container">
        <UserFollowers />
        <UserFollows />
      </FlexContainer>
    </div>
  );
}

export default App;
