import React from 'react';

const s = {
  wrap: {
   display: 'grid',
   gridTemplateRows: 'repeat(4, 1fr)',
   height: '100%',
   alignItems: 'center',
   gridGap: '10px'
  },
  item: {
    backgroundColor: 'coral',
    height: '100%',
    textAlign: 'center',
    fontSize: 30,
    fontStyle: 'bold'

  }
}

const NavBar = () => (
  <div style={s.wrap}>
    <div style={s.item}>A</div>
    <div style={s.item}>B</div>
    <div style={s.item}>C</div>
    <div style={s.item}>D</div>
  </div>
)

export default NavBar;