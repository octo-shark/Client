import React from 'react';
import Hamburger from './hamburger.jsx';

const s = {
  //FIXME navbar buttons are wrong size, 100x96
  wrap: {
    display: 'grid',
    gridTemplateColumns: '10rem 1fr',
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
    <Hamburger />
  </div>
)

export default NavBar;