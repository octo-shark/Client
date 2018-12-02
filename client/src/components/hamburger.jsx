import React from 'react';

const Hamburger = (props) => (
  <nav>
    <div id="menuToggle">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      <ul id="menu">
        <li><button onClick={() => props.changeView('trackerView')}>Track</button></li>
        <li><button onClick={() => props.changeView('historyView')}>Hist</button></li>
        <li><button onClick={() => props.changeView('settingsView')}>Set</button></li>
      </ul>
    </div>
  </nav>
)

export default Hamburger;