import React from 'react';
import DevSimB from '../components/devSimB.jsx';

const s = {
  //FIXME navbar buttons are wrong size, 100x96
  wrap: {
    display: 'grid',
    gridTemplateRows: '10rem 10rem 10rem',
    height: '100%',
    gridGap: '0.2rem',
    padding: '0.2rem',
    overflow: 'wrap'
  },
  item: {
    fontSize: '2em',
    backgroundColor: 'lightGrey',
    textAlign: 'center'
  }
}

const NavBar = (props) => (
  <div style={s.wrap}>
      <div style={s.item} onClick={() => props.changeView('trackerView')}>Track</div>
      <div style={s.item} onClick={() => props.changeView('historyView')}>Hist</div>
      <div style={s.item} onClick={() => props.changeView('settingsView')}>Set</div>
  </div>
)

export default NavBar;