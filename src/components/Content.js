// Content.js

import React, { Component } from "react";
import M from 'materialize-css';
import moment from 'moment';
import Day from "./Day";
export default class Content extends Component {

  state = {
    week:[],
    started:false,
    stopped:false
  }

  componentWillMount() {
    localStorage.setItem("15102018",JSON.stringify({start:"15102018 10:00:00",end:"15102018 18:00:00"}));
    localStorage.setItem("16102018",JSON.stringify({start:"15102018 10:00:00",end:"15102018 19:00:00"}));
    this.setState({
      week: [1,2,3,4,5].map(i => moment().startOf('week').add(i, 'days'))
    })
  }

  componentDidMount(){
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {});
  }
  
  start = e => {
    if (e.target.className.indexOf('start')>-1) {
      let key = moment().format("DDMMYYYY"),
      val = JSON.parse(localStorage.getItem(key))||{start:moment().format('DDMMYYYY hh:mm:ss')};
      

      localStorage.setItem( key, JSON.stringify(val) );

      this.setState({started:true});
    }
  }

  render() {

    let week = [...this.state.week];
    let lis = week.map((day, i) => <Day key={i} e={{
              day,
              today: day.format("DDMMYYYY") === moment().format("DDMMYYYY"),
              body: JSON.parse(localStorage.getItem(day.format('DDMMYYYY')))
            }} />);

    return (
      <div className="container">
          <ul onClick={this.start} className="collapsible">
            {lis}
          </ul>
      </div>
    );
  }
}
