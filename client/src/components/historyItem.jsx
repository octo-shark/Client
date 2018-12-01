import React from 'react';
import moment from 'moment';
const {tFormat, humanDuration} = require('../components/tFormat.js');

const s = {
  wrap: {
    backgroundColor: 'lightgrey',
  },
  name: {
    fontSize: '1.4rem',
    fontStyle: 'bold'
  },
  duration: {
    fontSize: '2rem',
    fontStyle: 'bold'
  },
  time: {
    fontSize: '1.4rem'
  }
}

const HistoryItem = (props) => {
  let duration = moment.duration(props.entry.timestamp_end - props.entry.timestamp_start);
  let info = props.getActInfo(props.entry.activity_id);
  console.log('hist item:');
  console.table(props);

  return (
    <div style={{'backgroundColor': info.color, display: 'grid', gridTemplateRows: 'repeat(3)'}}>
        <a style={s.name}>{info.name}</a>
        <a style={s.duration}>{tFormat(humanDuration(duration))}</a>
        <a style={s.time}>
          {moment(parseInt(props.entry.timestamp_start)).format(`h:mm A`)} - {moment(parseInt(props.entry.timestamp_end)).format(`h:mm A`)}
        </a>
    </div>
  )
}

export default HistoryItem;