import React from 'react'
import moment from 'moment'

export default ({e}) => {
  let background = (e.today && "#cff2cf") || "#f6f6f6";
  let progress, body = progress = null;
  let icon = "event",startclass = "";

  //start the day
  if(e.today && !e.body){
    icon = "add";
    startclass = "start";
    progress = <div className={startclass}> &nbsp;&nbsp;&nbsp;&nbsp; {"Tap to Start the day"} &nbsp;&nbsp;&nbsp;&nbsp;</div>;
  }
 

  if (e.body) {
    let start = moment(e.body.start, 'DDMMYYYY hh:mm:ss'),
        end = (e.body.end && moment(e.body.end, 'DDMMYYYY hh:mm:ss'))||"";

    if (e.today){
      progress = <div>{"stupidity end " + moment(e.body.start, 'DDMMYYYY hh:mm:ss').add(9, 'hours').fromNow()}</div>;
      icon = "timelapse";
    }
    else {
      let width = ((end.diff(moment(start, 'DDMMYYYY hh:mm:ss'), 'minutes')/540)*100).toFixed(2)+"%";
      progress = <div className="progress"> <div className="determinate" style={{ width }}></div></div>;
    }
    
    body = <div className="collapsible-body">
            <div>
              <span><i className="material-icons tiny">hourglass_empty</i>&nbsp;&nbsp;{"In Time:"}&nbsp;&nbsp;{start.format('LT')}</span><br/>
              <span><i className="material-icons tiny">hourglass_full</i>&nbsp;&nbsp;{"Out Time:"}&nbsp;&nbsp;{end && end.format('LT')}</span>
            </div>
          </div>;
  }
  
  return (
    <li>
      <div className={`collapsible-header ${startclass}`} style={{ background }}><i className={`material-icons ${startclass}`}>{icon}</i>{e.day.format('DD')}
        &nbsp;&nbsp;&nbsp;&nbsp;
      {e.day.format('dddd')}
        &nbsp;&nbsp;&nbsp;&nbsp;
        {progress}
      </div>
      {body}
    </li>
  )
}
