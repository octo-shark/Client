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
          fontSize: '1em',
          border: 'none',
          height: '3em',
          overflow: 'hidden',
          backgroundColor: info.color,
          color: 'white',
          fontWeight: 'bold'
        }
        if (props.curActivity === id) faceStyle.display = 'none'

        return (
          <button 
            style={faceStyle}
            key={`assignedAct ${id}`}
            onClick={() => props.clickEvent(id)}
          >
            <div>{info.name}</div>
          </button>
        );
      })}
    </div>
  );
}

export default DevSimB;
