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

const NavBar = () => (
  <div style={s.wrap}>
    <div style={s.item} onClick={() => console.log('A')}>A</div>
    <div style={s.item}>B</div>
    <div style={s.item}>C</div>
    <div style={s.item}>D</div>
  </div>
)

export default NavBar;