import React from 'react';

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
    <div style={{'backgroundColor': props.entry.color, display: 'grid', gridTemplateRows: 'repeat(4)'}}>
        <a style={s.name}>{props.entry.name}</a>
        <a style={s.time}>{ props.entry.start} - {props.entry.finish}</a>

    </div>
  )
}

export default HistoryItem;