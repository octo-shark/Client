import React from 'react';

const s = {
  wrap: {
    display: 'grid',
    gridGap: '2px'
  },
}


const DevSimB = (props) => {
  return (
    <div style={s.wrap}>
      {props.assignedActivities.map(id => {
        let info = props.getActInfo(id);
        let faceStyle = {
          fontSize: 10,
          border: 'none',
          height: '30px',
          overflow: 'hidden',
          backgroundColor: info.color
        }
        return (
          <input 
            style={faceStyle}
            type='submit'
            value={info.name}
            key={`assignedAct ${id}`}
            onClick={() => props.taskChange(id)}
          />
        );
      })}
    </div>
  );
}

export default DevSimB;
