import React from 'react';

const s = {
}

const ActivityButton = (props) => (
  <div style={{backgroundColor: props.info.color}} onClick={()=>props.clickEvent()}>
    <a>{props.info.name}</a>
  </div>
)

export default ActivityButton;