import React from 'react';

const s = {
  timer: {
    fontSize: '50rem',
    fontStyle: 'bold',
  }
}

const TimerDisplay = (props) => {

  return (
    <div id="timer" syle={s.wrap}>
      <a style={s.timer}>{props.runTime}</a>
    </div>
  );
}


export default TimerDisplay;