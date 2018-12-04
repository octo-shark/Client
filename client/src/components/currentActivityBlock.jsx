import React from 'react';
const {tFormat, humanDuration} = require('./utilities/tFormat.js');

const CurrentActivityBlock = (props) => {
  let actName = 'No Activity';
  let s = {
    wrap: {
      display: 'grid',
      gridTemplateRows: 'repeat(3, 10rem)',
      textAlign: 'center',
      justifyContent: 'center',
      marginTop: '4rem',
    },
    time: {
      fontSize: '10em',
      color: '#FFFFFF',
      textShadow: '0px 2px 0px rgba(0, 0, 0, 0.4)'
    },
    name: {
      wordBreak: 'break-all',
      fontSize: '7em',
      color: '#FFFFFF',
      textShadow: '0px 2px 0px rgba(0, 0, 0, 0.4)',
    },
    toggleWrap: {
      itemAlign: 'center'
    },
    toggleBtn: {
      height: '6rem',
      width: '6rem',
      border: 'none',
      backgroundColor: 'transparent'
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