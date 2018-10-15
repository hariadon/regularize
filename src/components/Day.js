import React from 'react'
import moment from 'moment';

export default ({day,i}) => {
    let _style = {"backgroundColor" :"#f6f6f6"};
    if(day.format("DDMMYYYY")==moment().format("DDMMYYYY"))_style.backgroundColor="#cff2cf";
  return (
    <li key={i}>
    <div className="collapsible-header" style={_style}><i className="material-icons">event</i>{day.format('DD')}&nbsp;&nbsp;{day.format('dddd')}</div>
    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
  </li>
  )
}
