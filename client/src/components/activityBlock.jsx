import React from 'react';

const s = {
  wrap: {
    textAlign: 'center'
  }
}

const ActivityBlock = (props) => (
  <div style={{
    backgroundColor: props.info.color,
    textAlign: 'center'
    }}
    onClick={(props.clickEvent) ? ()=>(props.clickEvent(props.id)) : null}
  >
    <a>{props.info.name}</a>
  </div>
)

export default ActivityBlock;