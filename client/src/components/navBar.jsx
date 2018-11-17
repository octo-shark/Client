import React from 'react';

const s = {
  wrap: {
   display: 'grid',
   gridTemplateRows: 'repeat(4, 100px)',
   height: '100%',
   padding: '2px',
   gridGap: '2px'
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
    <div style={s.item} onClick={() => props.changeView('main')}>Main</div>
    <div style={s.item} onClick={() => props.changeView('history')}>Hist</div>
    <div style={s.item}>C</div>
    <div style={s.item}>D</div>
  </div>
)

export default NavBar;