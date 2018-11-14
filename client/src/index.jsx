import React from 'react';
import ReactDOM from 'react-dom';
import Hi from './components/Hi.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return(
      <div><Hi /></div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('App'));