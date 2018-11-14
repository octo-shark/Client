import React from 'react';
import ReactDOM from 'react-dom';
import Hi from './components/hi.jsx';
import NavBar from './components/navBar.jsx';

const s = {
  wrap: {
    display: 'grid',
    gridTemplateColumns: '100px 1fr',
    gridTemplateRows: '400px 400px' //placeholder
  },
  nav: {
    gridArea: '1/1 / -1/1',
    backgroundColor: 'grey',
    height: '100%',
    textAlign: 'center'
  }
}


class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return(
      <div style={s.wrap}>
        <div style={s.nav}>
          <NavBar/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('App'));