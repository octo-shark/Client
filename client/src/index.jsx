import React from 'react';
import ReactDOM from 'react-dom';
import Hi from './components/Hi.jsx';
import PieChart from './components/PieChart.jsx'
class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }
  
  render() {
    return(
      <div>
        <Hi />
        <div id='pieChart'>
        <PieChart/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('App'));