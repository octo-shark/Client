import React from 'react';
import DevSimB from '../components/devSimB.jsx';

const s = {
  wrap: {
   display: 'grid',
   gridTemplateRows: '100px 100px 100px 100px 1fr',
   height: '100%',
   gridGap: '2px',
   padding: '2px',
   overflow: 'wrap'
  },
  item: {
    backgroundColor: 'lightGrey',
    textAlign: 'center',
    fontSize: 30,
    fontStyle: 'bold',
  }
}

const NavBar = (props) => (
  <div style={s.wrap}>
      <div style={s.item} onClick={() => props.changeView('mainView')}>Main</div>
      <div style={s.item} onClick={() => props.changeView('historyView')}>Hist</div>
      <div style={s.item}>C</div>
      <div style={s.item} onClick={() => props.changeView('settingsView')}>Set</div>
      <div>
        <DevSimB
          getActInfo={props.getActInfo}
          assignedActivities={props.assignedActivities}
          taskChange={props.taskChange}
        />
      </div>
  </div>
)

export default NavBar;