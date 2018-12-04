import React from 'react';
const {tFormat, humanDuration} = require('./utilities/tFormat.js');

const CurrentActivityBlock = (props) => {
  let actName = 'No Activity';
  let s = {
    wrap: {
      display: 'grid',
      gridTemplateRows: 'repeat(3, 10rem)',
      textAlign: 'center',
      justifyContent: 'center'
    },
    time: {
      fontSize: '10em'
    },
    name: {
      wordBreak: 'break-all',
      fontSize: '7em'
    },
    toggleWrap: {
      itemAlign: 'center'
    },
    toggleBtn: {
      height: '6rem',
      width: '6rem',
      border: 'none'
    },

  }
  
  if (props.curActivity) {
    s.wrap.backgroundColor = props.actInfo.color;
    actName = props.actInfo.name;
  }

  return (
    <div style={s.wrap}>
      <a style={s.time}>{tFormat(humanDuration(props.duration))}</a>
      <a style={s.name}>{actName}</a>
      <div>
        <input 
          style={s.toggleBtn}
          type='submit'
          value={props.keepTime ? 'End' : 'Start'}
          onClick={()=>(props.toggleTimer())}
        />
      </div>
    </div>
  );
}

export default CurrentActivityBlock;