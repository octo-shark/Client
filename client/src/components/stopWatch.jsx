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

const format = (num) => {
  if (num === 0) return ' 0';
  if (num > 0 && num < 10) return ' ' + num.toString();
  if (num >= 10) return num.toString();
};

const StopWatch = (props) => (
  <div>
    <a style={s.hours}>{format(props.hours)}h </a>
    <a style={s.minutes}>{format(props.minutes)}m </a>
    <a style={s.seconds}>{format(props.seconds)}s</a>
  </div>
)

export default StopWatch;