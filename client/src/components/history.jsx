import React from 'react';
// import PieChart from './historyComponents/PieChart.jsx' 
import BackLogs from './historyComponents/BackLogs.jsx'
import ActivityLogs from './historyComponents/ActivityLogs.jsx'
const s = {
  wrap: {
    display: 'grid',
    gridTemplateColumns: '1fr, 300px',
    gridTemplateRows: 'repeat(2, 1fr)',
  },
  pieChart:{
    gridColumn: '1/2',
    gridRow: '1/2',
    textAlign: 'center',
    backgroundColor: 'lightBlue'
  },
  backLogWrap: {
    gridColumn: '1/2',
    gridRow: '2/2',
    backgroundColor: 'lightGrey'
  },
  activityLog: {
    gridColumn: '2/3',
    gridRow: '1/3',
    backgroundColor: 'lightGreen'
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
      <div style={s.pieChart}>
        <h1>PieChart</h1>
        {/* <PieChart/> */}
      </div>
      <div style={s.backLogWrap}>
        <BackLogs/>

      </div>
      <div style={s.activityLog}>

        <ActivityLogs/>
      </div>
      </div>
    )
  }
}

export default History;