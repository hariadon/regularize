import React, {Component} from 'react'
import moment from 'moment'
import Hoc from './Hoc';

export default class Day extends Component {

  state = { }
  
  componentWillMount(){
      let start,end,key = this.props.e.key,
          isToday = this.props.e.today;
      if(this.props.e.day){
        start = this.props.e.day.start;
        end = this.props.e.day.end;
      }

      this.setState({ start, end ,key, isToday})
  }

  setTime = (e,action) => {
    let val = e.target.value,
    day = JSON.parse(localStorage.getItem(this.state.key));
    console.log("acton:::",action,"val::::",val,"day:::::",day)
    if(action && val && day){
      day[action] = val;
      localStorage.setItem(this.state.key,JSON.stringify(day));
      this.setState({ [action]:val})
    }
  }

  render(){
    console.log(this.state)
  let background = (this.props.e.today && "#cff2cf") || "#f6f6f6";
  let progress, body = progress = null;
  let icon = "event",startclass = "";

  //start the day
  if(this.state.isToday && !this.state.start){
    icon = "add";
    startclass = "start";
    progress = <div className={startclass}> &nbsp;&nbsp;&nbsp;&nbsp;{"Tap to Start the day"}</div>;
  }
 

  if (this.state.start) {
    let start = moment(this.state.start, 'DDMMYYYY hh:mm:ss'),
        end = (this.state.end && moment(this.state.end, 'DDMMYYYY hh:mm:ss'))||"";

    if (this.state.isToday){
      icon = "timelapse";
      progress = <div>{"stupidity end " + moment(this.state.start, 'DDMMYYYY hh:mm:ss').add(9, 'hours').fromNow()}</div>;
    }
    else {
      let total  =end.diff(moment(start, 'DDMMYYYY hh:mm:ss'), 'minutes'),
          hours = Math.floor(total/60),
          mins = total%60,
          width = ((total/540)*100).toFixed(2)+"%",
          textclass = total>=540?"green-text":"red-text";

      progress = <Hoc><div className="progress"><div className="determinate" style={{ width }}></div></div>&nbsp;&nbsp;&nbsp;&nbsp;<span className={textclass}>{`${hours} hour ${mins} mins`}</span></Hoc>;
    }
    
    body = <div className="collapsible-body">
            <div>
              <span>
                <i className="material-icons tiny">hourglass_empty</i>
                &nbsp;&nbsp;{"In Time:"}&nbsp;&nbsp;
                <input type="text" className="timepicker" onChange={event=>this.setTime(event,"start")} value={start.format('LT')}/>
              </span>
              <br/>
              <span>
                <i className="material-icons tiny">hourglass_full</i>
                &nbsp;&nbsp;{"Out Time:"}&nbsp;&nbsp;
                <input type="text" className="timepicker" onChange={event=>this.setTime(event,"end")} value={(end && end.format('LT'))||""}/>
              </span>
            </div>
          </div>;
  }
  
  return (
    <li>
      <div className={`collapsible-header ${startclass}`} style={{ background }}>
      <i className={`material-icons ${startclass}`}>{icon}</i>
      {moment(this.props.e.key,'DDMMYYYY').format('DD')}
        &nbsp;&nbsp;
      {moment(this.props.e.key,'DDMMYYYY').format('dddd')}
        &nbsp;&nbsp;&nbsp;&nbsp;
        {progress}
      </div>
      {body}
    </li>
  )
}
}
