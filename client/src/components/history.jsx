import React from 'react';
import PieChart from './historyComponents/PieChart.jsx' 
import BackLogs from './historyComponents/BackLogs.jsx'
import ActivityLogs from './historyComponents/ActivityLogs.jsx'

const s = {
  wrap: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)'
  },
  pieChartWrap: {
    gridColumn: '1/2',
    gridRow: '1/2'
  }
}
class History extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }
  
  render() {
    return(
      <div style={s.wrap}>
        <h1>History</h1>
        <div style={s.pieChartWrap}><PieChart/></div>
        <BackLogs/>
        <ActivityLogs/>
      </div>
    )
  }
}

export default History;