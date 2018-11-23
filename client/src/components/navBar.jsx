import React from 'react';
import DevSimB from '../components/devSimB.jsx';

const s = {
  wrap: {
   display: 'grid',
   gridTemplateRows: '100px 100px 100px 100px 1fr 100px',
   height: '100%',
   padding: '2px',
   gridGap: '2px'
  },
  item: {
    backgroundColor: 'lightGrey',
    textAlign: 'center',
    fontSize: 30,
    fontStyle: 'bold',
  },
  account: {
    gridRow: '-1',
    fontSize: 12,
    color: 'white'
  }
}

const NavBar = (props) => (
  <div style={s.wrap}>
    <div style={s.item} onClick={() => props.changeView('mainView')}>Main</div>
    <div style={s.item} onClick={() => props.changeView('historyView')}>Hist</div>
    <div style={s.item}>C</div>
    <div style={s.item} onClick={() => props.changeView('settingsView')}>Set</div>
    <div><DevSimB faceAssignment={props.faceAssignment} taskChange={props.taskChange}/></div>
    <div style={s.account}>
      <p>Dev Info</p>
      <p>{props.account.email}</p>
      <p>{props.account.id}</p>
    </div>
  </div>
)

export default NavBar;