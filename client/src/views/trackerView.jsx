import React from 'react';
import CurrentActivityBlock from '../components/currentActivityBlock.jsx';
import DevSimB from '../components/devSimB.jsx';

const s = {
  wrap: {
    overflowY: 'auto',
    itemAlign: 'center',
    height: '100vh'
  },
  infoWrap: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 'auto',
    height: '95%',
    justifyContent: 'center'
  },
  actButtons: {
    display: 'grid',
    pad: '0.2rem',
    itemAlign: 'center',
    marginLeft: '0.2rem',
    marginRight: '0.2rem',
    fontSize: '2rem'
  }
}

const TrackerView = (props) => {

  return (
    <div style={s.wrap} id='scrollDiv'>
      <div style={s.infoWrap}>
        <CurrentActivityBlock
          curActivity={props.curActivity}
          actInfo={props.getActInfo(props.curActivity)}
          curActTime={props.curActTime}
          toggleTimer={props.toggleTimer}
          duration={props.duration}
          keepTime={props.keepTime}
        />
      </div>
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