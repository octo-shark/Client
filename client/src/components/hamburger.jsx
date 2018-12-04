import React from 'react';


const Hamburger = (props) => (
  <nav>
    <div id="menuToggle">
      <input type="checkbox"/>
      <span></span>
      <span></span>
      <span></span>
      <ul id="menu">
        <li><a onClick={() => props.changeView('trackerView')}>Track</a></li>
        <li><a onClick={() => props.changeView('historyView')}>History</a></li>
        <li><a onClick={() => props.changeView('settingsView')}>Settings</a></li>
        <li><a onClick={() => props.loginCall()}>Login</a></li>
        <li><a onClick={() => props.logoutCall()}>Logout</a></li>

      </ul>
    </div>
  </nav>
)

export default Hamburger;