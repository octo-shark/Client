import React from 'react';

const s = {
  wrap: {
    display: 'grid',
    gridTemplateRows: 'repeat(auto, 3em)',
    padding: '1rem',
    gridGap: '1rem'
  }
}


const DevSimB = (props) => {
  return (
    <div style={s.wrap}>
      {props.activities.map(id => {
        let info = props.getActInfo(id);
        let faceStyle = {
          fontSize: '1.5em',
          border: 'none',
          height: '3em',
          overflow: 'hidden',
          background: info.color,
          color: 'white',
          textShadow: '1px 2px 0px rgba(0, 0, 0, 0.4)',
          WebkitBoxShadow: '0 4px 1px -1px rgba(0, 0, 0, 0.4)',
          MozBoxShadow: '0 4px 1px -1px rgba(0, 0, 0, 0.4)',
          boxShadow: '0 4px 1px -1px rgba(0, 0, 0, 0.4)'
        }
        if (props.curActivity === id) faceStyle.display = 'none'

        return (
          <button 
            style={faceStyle}
            key={`assignedAct ${id}`}
            onClick={() => props.clickEvent(id)}
          >
            {info.name}
          </button>
        );
      })}
    </div>
  );
}

export default DevSimB;
