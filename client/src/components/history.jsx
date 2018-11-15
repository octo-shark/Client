import React from 'react';
import PieChart from './historyComponents/PieChart.jsx' 
import BackLog from './historyComponents/BackLog.jsx'
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
        <PieChart/>
        <BackLog/>
        <ActivityLogs/>
      </div>
    )
  }
}

export default History;