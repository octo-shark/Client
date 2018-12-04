import React from 'react';
import PieChart from '../components/legacy/PieChart.jsx';
const s = {
  wrap: {
    display: 'grid',
    overflow: 'hidden',
    height: '98vh'
  },
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
          <PieChart 
            getActInfo={this.props.getActInfo} 
            userHistory={this.props.userHistory} 
            colorAssignment={this.props.colorAssignment}
          />
      </div>
    )
  }
}

export default History;