import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
import RoomList from './components/RoomList';



var config = {
	apiKey: "AIzaSyDVWXfO-dxsV_bA7OGXKZDG0gbmJW9jYHs",
    authDomain: "bloc-messages.firebaseapp.com",
    databaseURL: "https://bloc-messages.firebaseio.com",
    projectId: "bloc-messages",
    storageBucket: "bloc-messages.appspot.com",
    messagingSenderId: "400169077004"
  };
  firebase.initializeApp(config);

class App extends Component {



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
