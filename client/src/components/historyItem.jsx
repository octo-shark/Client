import React from 'react';
import moment from 'moment';
const s = {
  wrap: {
    backgroundColor: 'lightgrey',
  },
  name: {
    fontSize: 18,
    fontStyle: 'bold',
    color: 'Black'
  },
  duration: {
    fontSize: 22,
    fontStyle: 'bold',
    color: 'Black'
  },
  time: {
    paddingLeft: '4px',
    color: 'Black',
    fontSize: 14
  }
}

const HistoryItem = (props) => {
  let dur = moment.duration(props.entry.timestamp_end - props.entry.timestamp_start);
  let seconds = dur.seconds();
  let minutes = dur.minutes();
  let hours = dur.hours();


  return (
    <div style={{'backgroundColor': props.color, display: 'grid', gridTemplateRows: 'repeat(3)'}}>
        {/* <a style={s.name}>{props.entry.name}</a> */}
        <a style={s.duration}>
          {`${hours}h ${minutes}m ${seconds}s`}
        </a>
        <a style={s.time}>
          {moment(parseInt(props.entry.timestamp_start)).format(`h:mm A`)} - {moment(parseInt(props.entry.timestamp_end)).format(`h:mm A`)}
        </a>

    </div>
  )
}

export default HistoryItem;