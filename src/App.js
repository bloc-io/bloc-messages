import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList  from './components/RoomList';



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
			
			<h1 className="App-title">Bloc Chat</h1>
			<main>
				<RoomList firebase={firebase}/>
			</main>
		
		
        </div>
    );
  }
}

export default App;
