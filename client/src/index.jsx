import React from 'react';
import ReactDOM from 'react-dom';
import Hi from './components/Hi.jsx';
import Home from './components/home.jsx'
import History from './components/history.jsx'
import { moment } from 'moment';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      time:null
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return(
      <div>
      <History/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('App'));