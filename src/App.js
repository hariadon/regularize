// App.js

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import firebase from 'firebase';
import M from 'materialize-css';
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

  componentDidMount(){
    M.Sidenav.init(document.querySelectorAll('.sidenav'), {});
    M.Collapsible.init(document.querySelectorAll('.collapsible'), {});
    M.Timepicker.init(document.querySelectorAll('.timepicker'), {});
    M.FloatingActionButton.init(document.querySelectorAll('.fixed-action-btn'), {});
  }

  render() {
    return (
      <div>
        <Navbar />
        <br />
        <Content />
      </div>
    );
  }
}

export default App;
