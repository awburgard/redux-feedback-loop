import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
//import { HashRouter as Router, Route, Link } from 'react-router-dom';
//import Feeling from '../Feeling/Feeling';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        outer
          <div>
          Route exact path="/" component=Feeling />
            <br/>
            Route exact path="/checkout" component=Checkout
          </div>
          Router>
      </div>
    );
  }
}

export default App;
