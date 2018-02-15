import React from 'react';
import TimerApp from './TimerApp';

//import clockApp from ./'clockApp'

//import StopWatchApp from './StopwatchApp'


const  TimePiecesApp = () => {

    return (
        <div className="main">
            <div className="mainDiv">
                <TimerApp />
                {/* <hr />
                <ClockApp />
                <hr />
                <StopWatchApp /> */}
            </div>        
        </div>
    )

}

export default TimePiecesApp;