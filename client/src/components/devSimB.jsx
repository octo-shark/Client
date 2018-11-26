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
      {props.faceAssignment.map((face, index) => {
        let faceStyle = {
          fontSize: 10,
          border: 'none',
          height: '30px',
          overflow: 'hidden',
          backgroundColor: props.colorAssignment[face.id]
        }
        return (
          <input 
            style={faceStyle}
            type='submit'
            value={face.name}
            key={`faceAssignment ${index}`}
            onClick={() => props.taskChange(index)}
          />
        );
      })}
    </div>
  );
}

export default DevSimB;
