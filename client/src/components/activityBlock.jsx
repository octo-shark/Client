import React from 'react';


const ActivityBlock = (props) => (
  <div style={{
    backgroundColor: props.info.color,
    textAlign: 'center',
    height: '7rem',
    width: '40rem',
    fontSize: '3.6rem'
    }}
    onClick={(props.clickEvent) ? ()=>(props.clickEvent(props.id)) : null}
  >
    <a>{props.info.name}</a>
  </div>
)

export default ActivityBlock;