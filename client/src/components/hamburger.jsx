import React from 'react';

const uncheck = () => {
  if (document.getElementsByClassName('hamburger')[0].checked) {
    document.getElementsByClassName('hamburger')[0].checked = false;
  }
}

const Hamburger = (props) => (
  <nav>
    <div id="menuToggle">
      <input type="checkbox" className="hamburger "aria-label="menu"/>
      <span></span>
      <span></span>
      <span></span>
      <ul id="menu">
        <li><a onClick={() => (props.changeView('trackerView'), uncheck())}>Track</a></li>
        <li><a onClick={() => (props.changeView('historyView'), uncheck())}>History</a></li>
        <li><a onClick={() => (props.changeView('settingsView'), uncheck())}>Settings</a></li>
        <li><a onClick={() => (props.loginCall(), uncheck())}>Login</a></li>
        <li><a onClick={() => (props.logoutCall(), uncheck())}>Logout</a></li>

      </ul>
    </div>
  </nav>
)

export default Hamburger;