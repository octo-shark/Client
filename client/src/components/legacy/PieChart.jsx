import React from 'react';
import {Pie} from 'react-chartjs-2';
const {tFormat} = require('../utilities/tFormat.js');
const {humanDuration} =require('../utilities/tFormat.js');
const s = {
}

class PieChart extends React.Component{
  constructor(props){
    super(props);
    this.state = {  
      obj: this.consolidate()
    }

    this.data = {
    labels: Object.values(this.state.obj).map(i => i.name),
    datasets: [{
      //label: Object.values(this.state.obj).map(i => 'garbage'),//tFormat(humanDuration(i.time))),
      data: Object.values(this.state.obj).map(i => Math.round((i.time / this.state.obj.total) * 100)),
      backgroundColor: Object.values(this.state.obj).map(i => i.color),
      hoverBackgroundColor: Object.values(this.state.obj).map(i => i.color)
    }]
    }
    this.consolidate = this.consolidate.bind(this);
  }

  consolidate() {
    let obj = {};
    Object.defineProperties(obj, {
      total: {
        value: 0,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    [...this.props.userHistory].forEach(id=> {
      if(!obj[id.activity_id]) {
        obj[id.activity_id] = {
          name: this.props.getActInfo(id.activity_id).name,
          color: this.props.getActInfo(id.activity_id).color,
          time: id.timestamp_end - id.timestamp_start
        };
        obj.total+= (id.timestamp_end - id.timestamp_start);
      } else {
        obj[id.activity_id].time += id.timestamp_end - id.timestamp_start;
        obj.total+= (id.timestamp_end - id.timestamp_start);
      }
    })
    return obj;
  }

  render(){
    return (
      console.log(this.state.obj),
      console.log(this.state),
      <div id='pieChart'>
      <Pie ref='chart' type='pie' data={this.data}/>
      </div>
    )
  }
}

export default PieChart;