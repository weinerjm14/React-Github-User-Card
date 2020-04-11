import React from 'react';
import './App.css';

import UserData from './User';
import UserFollowers from './Followers';
import UserFollows from './Following';

function App() {
  return (
    <div className="App">
      <h1>Welcome To GitHub Finder App (not Official)</h1>
      <UserData />
      <UserFollowers />
      <UserFollows />
    </div>
  );
}

export default App;
