import React from 'react';

const s = {
  wrap: {
    display: 'grid'
  }
}


const DevSimB = (props) => {
  console.log(props);
  return (
    <div style={s.wrap}>
      {props.faceAssignment.map((face, index) => {
        const style = {
          backgroundColor: face.color,
          fontSize: 10,
          border: 'none',
          height: '30px',
          overflow: 'hidden'
        }
        return (
          <input 
            style={style}
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
