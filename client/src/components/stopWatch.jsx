import React from 'react';

const s = {
  hours: {
    fontSize: 30
  },
  minutes: {
    fontSize: 30
  },
  seconds: {
    fontSize: 20
  }
};

const format = (num = 2) => {
  let str = '';
  if (num < 10) str += '0';
  str += num.toString();
  return str;
};

const StopWatch = (props) => (
  <div>
    {console.log('FROM STOPWATCH', props)}
    <a style={s.hours}>{props.hours}:</a>
    <a style={s.minutes}>{props.minutes}:</a>
    <a style={s.seconds}>{props.seconds}</a>
  </div>
)

export default StopWatch;