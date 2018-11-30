import React from 'react';

const s = {
}

const ActivityButton = (props) => (
  <div style={{backgroundColor: props.info.color}} onClick={()=>props.clickEvent(props.id)}>
    <a>{props.info.name}</a>
  </div>
)

export default ActivityButton;