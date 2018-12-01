import React from 'react';
import CurrentActivityBlock from './currentActivityBlock.jsx';
import ActivityBlock from './activityBlock.jsx';

const s = {
  wrap: {
    gridGap: '2rem',
    padding: '2rem',
    height: '100%',
    textAlign: 'center',
  },
  activityBox: {
    display: 'grid',
    gridTemplateRows: 'auto',
    backgroundColor: 'pink',
    height: '98vh',
    width: '100%',
    overflowY: 'scroll',
    itemAlign: 'center'
  },
  trackedActBox: {

  }
}

const TrackerView = (props) => {

  return (
    <div style={s.wrap}>
      <div style={s.activitiesBox}>
        <CurrentActivityBlock
          curActivity={props.curActivity}
          actInfo={props.getActInfo(props.curActivity)}
          curActTime={props.curActTime}
          toggleTimer={props.toggleTimer}
          keepTime={props.keepTime}
        />
      </div>
      <div>
          {props.assignedActivities.map(id=> (
            <ActivityBlock id={id} info={props.getActInfo(id)} key={`assignedAct_${id}`}/>
          ))}
        </div>
    </div>
  );
}

export default TrackerView;