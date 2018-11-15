import React from 'react';

const s = {
  timer: {
    fontSize: 100,
    fontStyle: 'bold',
  }
}

const TimerDisplay = (props) => (
  <div syle={s.wrap}>
    <a style={s.timer}>{props.timeCount}</a>
  </div>
);

export default TimerDisplay;