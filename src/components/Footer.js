import React, { Component } from 'react';
import M from 'materialize-css';
import moment from 'moment';


export default class Footer extends Component {

  componentDidMount(){
      var elems = document.querySelectorAll('.fixed-action-btn');
      var instances = M.FloatingActionButton.init(elems, {});
    }

    stop = e =>{
        let key = moment().format("DDMMYYYY"),
            val = JSON.parse(localStorage.getItem(key));

        if(val && val.body && !val.body.stop) 
            val.body.stop = moment().format('DDMMYYYY hh:mm:ss');

        localStorage.setItem(key,JSON.stringify(val));
    }
  render() {
    return (
        <div className="fixed-action-btn">
            <a className="btn-floating btn-large red">
                <i className="large material-icons">drag_handle</i>
            </a>
            <ul>
                <li><a href="/" className="btn-floating green"><i className="material-icons start">autorenew</i></a></li>
                <li><a className="btn-floating red"><i className="material-icons stop" onClick={this.stop}>block</i></a></li>
            </ul>
        </div> 
    )
  }
}
