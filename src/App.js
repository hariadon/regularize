// App.js

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import firebase from 'firebase';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    firebase.initializeApp({
      apiKey: "AIzaSyCWSylIygQAwfyOMvhXwmvSCHNUAuhQ-vg",
      authDomain: "regularize-26f52.firebaseapp.com",
      databaseURL: "https://regularize-26f52.firebaseio.com",
      projectId: "regularize-26f52",
      storageBucket: "regularize-26f52.appspot.com",
      messagingSenderId: "879704879907"
    });
  }
  render() {
    return (
      <div>
        <Navbar />
        <br />
        <Content />
        <Footer/>
      </div>
    );
  }
}

export default App;
