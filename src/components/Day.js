import React from 'react'
import moment from 'moment'

export default (props) => {
    console.log("props:::::::::",props)
  let background = (props.e.isToday && "#cff2cf") || "#f6f6f6";
  let progress, body = progress = null;
  let icon = "event";

  //start the day
  if(props.e.isToday && !props.e.day){
    icon = "add";
    progress = <div> &nbsp;&nbsp;&nbsp;&nbsp;{"Tap to Start the day"}</div>;
  }
 

  if (props.e.day && props.e.day.start) {
    let start = moment(props.e.key +' '+props.e.day.start, 'DDMMYYYY h:mm A'),
        end = (props.e.day.end && moment(props.e.key +' '+props.e.day.end, 'DDMMYYYY h:mm A'))||"";
    console.log("start:::",start.format('LT'))
    console.log("end:::",end && end.format('LT'))

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
                <input type="text"  className="" onChange={e=>props.setTime(e, props.e.key, "start")} value={ props.e.day.start}/>
              </span>
              <br/>
              <span>
                <i className="material-icons tiny">hourglass_full</i>
                &nbsp;&nbsp;{"Out Time:"}&nbsp;&nbsp;
                <input type="text" className="" onChange={e=>props.setTime(e, props.e.key, "end")} value={props.e.day.end||""}/>
              </span>
            </div>
          </div>;
  }
  
  return (
    <li>
      <div className="collapsible-header" onClick={props.start} style={{ background }}>
      <i className="material-icons">{icon}</i>
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

