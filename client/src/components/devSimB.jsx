import React from 'react';

const s = {
  wrap: {
    display: 'grid',
    padding: '0.1em',
    gridGap: '0.1em',
    backgroundColor: 'grey'
  },
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
          backgroundColor: info.color
        }
        if (props.curActivity === id) faceStyle.display = 'none'

        return (
          <input 
            style={faceStyle}
            type='submit'
            value={info.name}
            key={`assignedAct ${id}`}
            onClick={() => props.clickEvent(id)}
          />
        );
      })}
    </div>
  );
}

export default DevSimB;
