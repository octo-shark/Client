import React from 'react';
import CurrentActivityBlock from '../components/currentActivityBlock.jsx';
import DevSimB from '../components/devSimB.jsx';

const s = {
  wrap: {
    overflowY: 'auto',
    itemAlign: 'center',
    height: '98vh' //FIXME
  },
  actButtons: {
    display: 'grid',
    pad: '0.2rem',
    itemAlign: 'center',
    marginLeft: '3rem',
    marginRight: '3rem',
    fontSize: '2rem'
  },
  trackedActBox: {

  }
}

const TrackerView = (props) => {

  return (
    <div style={s.wrap}>
      <CurrentActivityBlock
        curActivity={props.curActivity}
        actInfo={props.getActInfo(props.curActivity)}
        curActTime={props.curActTime}
        toggleTimer={props.toggleTimer}
        duration={props.duration}
        keepTime={props.keepTime}
      />
      <div style={s.actButtons}>
        <DevSimB
          getActInfo={props.getActInfo}
          activities={props.assignedActivities}
          clickEvent={props.taskChange}
          curActivity={props.curActivity}
        />
      </div>
        {/* {props.assignedActivities.map(id=> (
          <ActivityBlock id={id} info={props.getActInfo(id)} key={`assignedAct_${id}`}/>
        ))} */}
    </div>
  );
}

export default TrackerView;