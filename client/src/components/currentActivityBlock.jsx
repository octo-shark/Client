import React from 'react';
const {tFormat} = require('./tFormat.js');

const CurrentActivityBlock = (props) => {
  let actName = 'No Activity';
  let s = {
    wrap: {
      display: 'grid',
      gridTemplateRows: 'repeat(6, 1fr)',
      textAlign: 'center',
      backgroundColor: 'lightgrey'
    },
    time: {
      fontSize: '10em',
      gridRow: 2
    },
    name: {
      fontSize: '7em',
      gridRow: 3
    },
    toggleWrap: {
      gridRow: 4
    },
    toggleBtn: {
      margin: '1rem',
      width: '7em',
      height: '7em',
    },

  }
  
  if (props.curActivity) {
    s.wrap.backgroundColor = props.actInfo.color;
    actName = props.actInfo.name;
  }

  return (
    <div style={s.wrap}>
      <a style={s.time}>{tFormat(props.curActTime)}</a>
      <a style={s.name}>{actName}</a>
      <a style={s.toggleWrap}>
        <input 
          style={s.toggleBtn}
          type='submit'
          value={props.keepTime ? 'End' : 'Start'}
          onClick={()=>(props.toggleTimer())}
        />
      </a>
    </div>
  );
}

export default CurrentActivityBlock;