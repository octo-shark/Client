import React from 'react';
import {Pie} from 'react-chartjs-2';

const s = {
}

class PieChart extends React.Component{
  constructor(props){
    super(props);
    


    this.state = {  
      time: this.props.userHistory.map(i => {
      console.log(i)
        return i.timestamp_end - i.timestamp_start;
      }),

      color: this.props.userHistory.map(i => {
        console.log(this.props.colorAssignment)
        return this.props.colorAssignment[i.activity_id]
      }),

      activities: this.props.userHistory.map(i => {
        return i.activity_id
      })
    }

    this.data =
    {labels: this.state.activities,
    datasets: [{
      data: this.state.time,
      backgroundColor: this.state.color,
      hoverBackgroundColor: this.state.color
    }]
    }
  }
  render(){
    {console.log("user time data: ",this.state.time)}
    return (
      <div id='pieChart'>
      <Pie data={this.data}/>
      </div>
    )
  }
}

export default PieChart;