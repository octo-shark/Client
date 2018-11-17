import React from 'react';
import PieChart from './historyComponents/PieChart.jsx' 
import BackLogs from './historyComponents/BackLogs.jsx'
import ActivityLogs from './historyComponents/ActivityLogs.jsx'
<<<<<<< HEAD

const s = {
  wrap: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)'
  },
  pieChartWrap: {
    gridColumn: '1/2',
    gridRow: '1/2'
=======
const s = {
  wrap: {
    display: 'grid',
    gridTemplateColumns: '1fr, 250px',
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
>>>>>>> 510dfbf0ae61cb946059c313c102be935412d854
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
<<<<<<< HEAD
        <h1>History</h1>
        <div style={s.pieChartWrap}><PieChart/></div>
=======
      <div style={s.pieChart}>
        <h1>Meme</h1>
        <PieChart/>
      </div>
      <div style={s.backLogWrap}>
>>>>>>> 510dfbf0ae61cb946059c313c102be935412d854
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