import React, { Component } from 'react';
import './App.css';
import Header from './header.jsx'
import User from './User.jsx'

class App extends Component {
  render() {
    return (
      <div>
     <Header/>
     <User/>
     </div>
    );
  }
}

export default App;
