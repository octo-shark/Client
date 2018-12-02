import React from 'react';
import HistoryItem from '../components/historyItem.jsx';

const s = {
  wrap: {
    display: 'grid',
    gridAutoRows: '8rem',
    textAlign: 'center',
    gridGap: '0.2rem',
    padding: '0.2rem'
  },
}

const HistoryStack = (props) => {
  return (
    <div style={s.wrap}>
      {props.userHistory.map((entry, index) => 
        <HistoryItem
          entry={entry}
          key={`History Item ${index}`}
          getActInfo={props.getActInfo}
        />
      )}
    </div>
  )
};

export default HistoryStack;