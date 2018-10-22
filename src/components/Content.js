// Content.js

import React, { Component } from "react";
import moment from 'moment';
import Day from "./Day";
import Footer from "./Footer";
export default class Content extends Component {

  state = {
    week:[],
    started:false,
    stopped:false
  }

  componentWillMount() {
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
      let key = moment().format("DDMMYYYY"),
      val = JSON.parse(localStorage.getItem(key));
      if(!val){
        localStorage.setItem( key, JSON.stringify({start:moment().format('h:mm A')}) );
        this.forceUpdate();
      }
  }
  
  end = e => {
    let key = moment().format("DDMMYYYY"),
    val = JSON.parse(localStorage.getItem(key));
    
    if (val && !val.end) {
      val.end = moment().format('h:mm A');
      localStorage.setItem(key, JSON.stringify(val));
      console.log("updating........",val)
      this.forceUpdate();

    }
  }

  setTime = (e, id, action) => {
    let val = e.target.value,
        day = JSON.parse(localStorage.getItem(id));
    console.log("acton:::", action, "val::::", val, "id::::", id, "day:::::", day)
    if (/^(1[0-2]|0?[1-9]):[0-5][0-9] (AM|PM)$/.test(val) && day) {
        day[action] = val;
        localStorage.setItem(id, JSON.stringify(day));
        this.forceUpdate();
    }
  }

  render() {

    let week = [...this.state.week];
    let lis = week.map((day, i) => <Day key={day.format('DDMMYYYY')} start={this.start} setTime={this.setTime} e={{
              key:day.format('DDMMYYYY'),
              isToday: day.format("DDMMYYYY") === moment().format("DDMMYYYY"),
              day: JSON.parse(localStorage.getItem(day.format('DDMMYYYY')))
            }} />);

    return (
      <div className="container">
          <ul className="collapsible">
            {lis}
          </ul>
          <Footer end={this.end}/>
      </div>
    );
  }
}
