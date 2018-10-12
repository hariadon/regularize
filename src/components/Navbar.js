// Navbar.js

import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <a className="navbar-brand" href="https://google.com/">Fuck It Works!!!!</a>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
               <li className="nav-item">
               <a className="nav-link" href="https://google.com/">I know</a>
               </li>
            </ul>
         </div>
      </nav>
    );
  }
}