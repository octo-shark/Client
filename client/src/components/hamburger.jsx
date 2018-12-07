import React from 'react';

const uncheck = () => {
  if (document.getElementsByClassName('hamburger')[0].checked) {
    document.getElementsByClassName('hamburger')[0].checked = false;
  }
}

const Hamburger = (props) => {
  const logout = () => {
    if (props.loggedIn) return (
      <li onClick={() => (props.logoutCall(), uncheck())}><a>Logout</a></li>
    )
  }

  return (
    <nav>
      <div id="menuToggle">
        <input type="checkbox" className="hamburger "aria-label="menu"/>
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <li onClick={() => (props.changeView('trackerView'), uncheck())}><a>Track</a></li>
          <li onClick={() => (props.changeView('historyView'), uncheck())}><a>History</a></li>
          <li onClick={() => (props.changeView('settingsView'), uncheck())}><a>Settings</a></li>
          {/* <li onClick={() => props.initDevice(props.setAct)}><a>Connect</a></li> */}
          {logout()}
        </ul>
      </div>
    </nav>
  );
}

export default Hamburger;