import React from 'react'
import moment from 'moment'

export default (props) => {
    console.log("props:::::::::",props)
  let background = (props.e.isToday && "#cff2cf") || "#f6f6f6";
  let progress, body = progress = null;
  let icon = "event",startclass = "";

  //start the day
  if(props.e.isToday && !props.e.day){
    icon = "add";
    startclass = "start";
    progress = <div className={startclass}> &nbsp;&nbsp;&nbsp;&nbsp;{"Tap to Start the day"}</div>;
  }
 

  if (props.e.day && props.e.day.start) {
    let start = moment(props.e.key +' '+props.e.day.start, 'DDMMYYYY h:mm A'),
        end = (props.e.day.end && moment(props.e.key +' '+props.e.day.end, 'DDMMYYYY h:mm A'))||"";

    if (props.e.isToday && !props.e.day.end){
      icon = "timelapse";
      progress = <div>{"stupidity end " + start.add(9, 'hours').fromNow()}</div>;
    }
    else {
      let total  =end.diff(moment(start, 'DDMMYYYY h:mm A'), 'minutes'),
          hours = Math.floor(total/60),
          mins = total%60,
          width = ((total/540)*100).toFixed(2)+"%",
          textclass = total>=540?"green-text":"red-text";

      progress = <React.Fragment><div className="progress right"><div className="determinate" style={{ width }}></div></div>&nbsp;&nbsp;&nbsp;&nbsp;<span className={textclass}>{`${hours} hour ${mins} mins`}</span></React.Fragment>;
    }
    
    body = <div className="collapsible-body">
            <div>
              <span>
                <i className="material-icons tiny">hourglass_empty</i>
                &nbsp;&nbsp;{"In Time:"}&nbsp;&nbsp;
                <input type="text"  className="timepicker" onChange={e=>props.setTime(e, start.format("DDMMYYYY"), "start")} defaultValue={ start.format('LT')}/>
              </span>
              <br/>
              <span>
                <i className="material-icons tiny">hourglass_full</i>
                &nbsp;&nbsp;{"Out Time:"}&nbsp;&nbsp;
                <input type="text" className="" onChange={e=>props.setTime(e, start.format("DDMMYYYY"), "end")} defaultValue={(end && end.format('LT'))||""}/>
              </span>
            </div>
          </div>;
  }
  
  return (
    <li>
      <div className={`collapsible-header ${startclass}`} onClick={props.start} style={{ background }}>
      <i className={`material-icons ${startclass}`}>{icon}</i>
      {moment(props.e.key,'DDMMYYYY').format('DD')}
        &nbsp;&nbsp;
      {moment(props.e.key,'DDMMYYYY').format('dddd')}
        &nbsp;&nbsp;&nbsp;&nbsp;
        {progress}
      </div>
      {body}
    </li>
  )
}

