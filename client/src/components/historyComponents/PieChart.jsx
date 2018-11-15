import React from 'react';
import {Pie} from 'react-chartjs-2';

class PieChart extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
    this.data =
    {labels: [
      'Red',
      'Green',
      'Yellow'
    ],
    datasets: [{
      data: [Math.random()*10, Math.random()*10, Math.random()*10],
      backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ],
      hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ]
    }]
    }
  }
  render(){
    return (
      <div id='pieChart'>
      <Pie data={this.data}/>
      </div>
    )
  }
}

export default PieChart;