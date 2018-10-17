// Content.js

import React, { Component } from "react";
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
    localStorage.setItem("16102018",JSON.stringify({start:"16102018 10:00:00",end:"16102018 19:40:00"}));
    localStorage.setItem("17102018",JSON.stringify({start:"17102018 10:00:00",end:"17102018 19:00:00"}));
    this.setState({
      week: [1,2,3,4,5].map(i => moment().startOf('week').add(i, 'days'))
    })
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 60*1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
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
    let lis = week.map((day, i) => <Day key={day.format('DDMMYYYY')} e={{
              key:day.format('DDMMYYYY'),
              today: day.format("DDMMYYYY") === moment().format("DDMMYYYY"),
              day: JSON.parse(localStorage.getItem(day.format('DDMMYYYY')))
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
