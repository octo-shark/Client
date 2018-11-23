import React from 'react';
import moment from 'moment';
const s = {
  wrap: {
    backgroundColor: 'lightgrey',
  },
  name: {
    fontSize: 24,
    fontStyle: 'bold',
    color: 'white',
    textShadow:
		`-1px -1px 0 #000,
		1px -1px 0 #000,
		-1px 1px 0 #000,
		1px 1px 0 #000`
  },
  time: {
    paddingLeft: '10px',
    color: 'white',
    textShadow:
		`-1px -1px 0 #000,
		1px -1px 0 #000,
		-1px 1px 0 #000,
		1px 1px 0 #000`,
    fontSize: 18
  }
}

const HistoryItem = (props) => {
  return (
    <div style={{'backgroundColor': 'lightGreen', display: 'grid', gridTemplateRows: 'repeat(4)'}}>
        <a style={s.name}>{props.entry.name}</a>
        <a style={s.time}>
          {moment.unix(props.entry.timestamp_start).format('h:mm A')} - {moment.unix(props.entry.timestamp_end).format('h:mm A')}
        </a>

    </div>
  )
}

export default HistoryItem;