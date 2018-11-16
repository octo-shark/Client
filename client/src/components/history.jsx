import React from 'react';
import PieChart from './historyComponents/PieChart.jsx' 
import BackLogs from './historyComponents/BackLogs.jsx'
import ActivityLogs from './historyComponents/ActivityLogs.jsx'
class History extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }
  
  render() {
    return(
      <div>
        <h1>History</h1>
        <PieChart/>
        <BackLogs/>
        <ActivityLogs/>
      </div>
    )
  }
}

export default History;