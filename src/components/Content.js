// Content.js

import React, { Component } from "react";
import M from 'materialize-css';
import moment from 'moment';
import Day from "./Day";
export default class Content extends Component {

  state = {
    week:[]
  }

  componentWillMount() {
    this.setState({
      week: [1,2,3,4,5].map(i => moment().startOf('week').add(i, 'days'))
    })
  }

  componentDidMount(){
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {});
  }
  
  render() {

   let week = [...this.state.week];
   let lis = week.map((day,i)=><Day day={day} i={i}/>);

    return (
      <div>
          <ul className="collapsible">
            {lis}
          </ul>
      </div>
    );
  }
}
