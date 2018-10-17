import React, { Component } from 'react';
import moment from 'moment';


export default class Footer extends Component {

    stop = e => {
        let key = moment().format("DDMMYYYY"),
            val = JSON.parse(localStorage.getItem(key));

        if (val && !val.stop) val.stop = moment().format('DDMMYYYY hh:mm:ss');

        localStorage.setItem(key, JSON.stringify(val));
    }
  render() {
    return (
        <div className="fixed-action-btn">
            <a className="btn-floating red tooltipped" data-position="left" data-tooltip="End Shift">
                <i className="large material-icons stop " onClick={this.stop}>block</i>
            </a>
        </div> 
    )
  }
}