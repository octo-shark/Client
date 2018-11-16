import React from 'react';

const s = {
  timer: {
    fontSize: 100,
    fontStyle: 'bold',
  }
}

const TimerDisplay = (props) => (
  <div id="timer" syle={s.wrap}>
    <a style={s.timer}>{props.runTime}</a>
  </div>
);


export default TimerDisplay;