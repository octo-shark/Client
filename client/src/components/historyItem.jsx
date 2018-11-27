import React from 'react';
import moment from 'moment';
const s = {
  wrap: {
    backgroundColor: 'lightgrey',
  },
  name: {
    fontSize: 24,
    fontStyle: 'bold',
    color: 'Black'
  },
  time: {
    paddingLeft: '4px',
    color: 'Black',
    fontSize: 18
  }
}

const HistoryItem = (props) => {
  return (
    <div style={{'backgroundColor': props.color, display: 'grid', gridTemplateRows: 'repeat(3)'}}>
        <a style={s.name}>{props.entry.name}</a>
        <a style={s.time}>
          {moment(parseInt(props.entry.timestamp_start)).format(`h:mm A`)} - {moment(parseInt(props.entry.timestamp_end)).format(`h:mm A`)}
        </a>

    </div>
  )
}

export default HistoryItem;