import React from 'react';
const {tFormat, humanDuration} = require('./utilities/tFormat.js');

const CurrentActivityBlock = (props) => {
  let actName = 'No Activity';
  let s = {
    textWrap: {
      display: 'grid',
      gridTemplateRows: 'repeat(auto-fit, minmax(10rem, 1fr))',
      textAlign: 'center',
      justifyContent: 'center',
      paddingTop: '4rem',
    },
    time: {
      display: 'grid',
      justifyContent: 'center',
      textAlign: 'end',
      fontSize: '10em',
      color: '#FFFFFF',
      textShadow: '2px 2px 0px rgba(0, 0, 0, 0.4)'
    },
    name: {
      wordBreak: 'break-all',
      fontSize: '9vw',
      color: '#FFFFFF',
      textShadow: '2px 2px 0px rgba(0, 0, 0, 0.4)',
    },
    toggleWrap: {
      display: 'grid',
      justifyContent: 'center',
      paddingTop: '1rem'
    },
    toggleBtn: {
      height: '6rem',
      width: '6rem',
      border: 'none',
    },

  }
  if (props.curActivity) {
    document.body.style.background = `${props.actInfo.color}`;
    document.body.style.backgroundImage = 'radial-gradient(circle,transparent,rgba(0,0,0,0.25))'
    actName = props.actInfo.name;
  }
  return (
    <div>
      <div style={s.textWrap}>
        <a style={s.time}>{tFormat(humanDuration(props.duration))}</a>
        <a style={s.name}>{actName}</a>
      </div>
      <div className='playstop' style={s.toggleWrap}>
          <input 
            type='checkbox'
            aria-label='playstop'
            className='playstop'
            id='playstop'
            onClick={()=>(props.toggleTimer())}
          />
          <label htmlFor="playstop"></label>
        </div>
    </div>
  );
}

export default CurrentActivityBlock;