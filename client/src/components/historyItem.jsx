import React from 'react';

const s = {
  wrap: {
    backgroundColor: 'lightgrey',
  },
  name: {
    fontSize: 24,
    fontStyle: 'bold'
  },
  time: {
    paddingLeft: '10px',
    color: 'grey',
    fontSize: 18
  }
}

const HistoryItem = (props) => (
  <div style={s.wrap}>
    <span>
      <a style={s.name}>{props.entry.name}</a>
      <a style={s.time}>{ props.entry.start} - {props.entry.finish}</a>
    </span>
  </div>
)

export default HistoryItem;