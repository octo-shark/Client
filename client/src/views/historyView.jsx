import React from 'react';
import PieChart from '../components/legacy/PieChart.jsx';
const s = {
  wrap: {
    display: 'grid',
    gridTemplateColumns: '1fr 200px',
    gridTemplateRows: 'repeat(2, 1fr)',
  },
  pieChart:{
    gridColumn: '1/2',
    gridRow: '1/2',
    textAlign: 'center'
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
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  
  render() {
    return(
      <div style={s.wrap}>
        <div style={s.pieChart}>
          <h1>PieChart</h1>
          <PieChart userHistory={this.props.userHistory} colorAssignment={this.props.colorAssignment}/>
        </div>
      </div>
    )
  }
}

export default History;