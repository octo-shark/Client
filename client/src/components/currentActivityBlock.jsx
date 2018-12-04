import React from 'react';
const {tFormat, humanDuration} = require('./utilities/tFormat.js');

const CurrentActivityBlock = (props) => {
  let actName = 'No Activity';
  let s = {
    wrap: {
      marginBottom: '2rem'
    },
    textWrap: {
      display: 'grid',
      gridTemplateRows: 'repeat(auto-fit, minmax(10rem, 1fr))',
      textAlign: 'center',
      justifyContent: 'center',
      paddingTop: '4rem',
      // marginBottom: '1rem',
    },
    time: {
      fontSize: '10em',
      fontWeight: 'bold',
      color: '#FFFFFF',
      textShadow: '2px 2px 0px rgba(0, 0, 0, 0.4)'
    },
    name: {
      wordBreak: 'break-all',
      fontSize: '7em',
      fontWeight: 'bold',
      color: '#FFFFFF',
      textShadow: '2px 2px 0px rgba(0, 0, 0, 0.4)',
    },
    toggleWrap: {
      display: 'grid',
      justifyContent: 'center',
      marginTop: '1rem'
      // paddingBottom: '2rem',
    },
    toggleBtn: {
      height: '6rem',
      width: '6rem',
      border: 'none',
      // backgroundColor: 'transparent'
    },

  }
  
  if (props.curActivity) {
    s.wrap.backgroundColor = props.actInfo.color;
    actName = props.actInfo.name;
  }

  return (
    <div style={s.wrap}>
      <div style={s.textWrap}>
        <a style={s.time}>{tFormat(humanDuration(props.duration))}</a>
        <a style={s.name}>{actName}</a>
      </div>
      <div class='playstop' style={s.toggleWrap}>
          <input 
            style={s.toggleBtn}
            type='checkbox'
            aria-label='playstop'
            id='playstop'
            value='None'
            // value={props.keepTime ? 'End' : 'Start'}
            onClick={()=>(props.toggleTimer())}
          />
          <label for="playstop"></label>
        </div>
    </div>
  );
}

export default CurrentActivityBlock;