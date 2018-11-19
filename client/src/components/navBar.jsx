import React from 'react';
import DeviceSim from '../components/devSimB.jsx';

const s = {
  wrap: {
   display: 'grid',
   gridTemplateRows: '100px 100px 100px 100px 1fr 1fr',
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
    width: '100%',
    fontSize: 12,
    color: 'white',
    verticalAlign: 'bottom'
  }
}

const NavBar = (props) => (
  <div style={s.wrap}>
    <div style={s.item} onClick={() => props.changeView('main')}>Main</div>
    <div style={s.item} onClick={() => props.changeView('history')}>Hist</div>
    <div style={s.item}>C</div>
    <div style={s.item}>D</div>
    <div style={s.account}>
      <p>For Development</p>
      <p>{props.account.email}</p>
      <p>{props.account.id}</p>
      </div>
  </div>
)

export default NavBar;