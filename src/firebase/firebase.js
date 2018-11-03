import firebase from 'firebase';


var config = {
	apiKey: "AIzaSyDVWXfO-dxsV_bA7OGXKZDG0gbmJW9jYHs",
    authDomain: "bloc-messages.firebaseapp.com",
    databaseURL: "https://bloc-messages.firebaseio.com",
    projectId: "bloc-messages",
    storageBucket: "bloc-messages.appspot.com",
    messagingSenderId: "400169077004"
  };
  
  firebase.initializeApp(config);
  
  
const database = firebase.database();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();

export { firebase, githubAuthProvider, database as default };