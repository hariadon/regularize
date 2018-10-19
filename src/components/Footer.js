import React from 'react';


export default (props) => {

    return (
        <div className="fixed-action-btn">
            <a className="btn-floating red tooltipped" data-position="left" data-tooltip="End Shift">
                <i className="large material-icons end" onClick={props.end}>block</i>
            </a>
        </div>
    )
}