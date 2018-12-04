import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';
const {tFormat, humanDuration} = require('../components/utilities/tFormat.js');

const s = {
  wrap: {
    overflowY: 'auto',
    itemAlign: 'center',
    height: '98vh' //FIXME
  },
}
class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'Doughnut',
      obj: this.consolidate(),
    };

    this.data = {
      labels: Object.values(this.state.obj).map(i => i.name),
      datasets: [{
        label: Object.values(this.state.obj).map(i => 'garbage'),//tFormat(humanDuration(i.time))),
        data: Object.values(this.state.obj).map(i => Math.round((i.time / this.state.obj.total) * 100)),
        backgroundColor: Object.values(this.state.obj).map(i => i.color),
        hoverBackgroundColor: Object.values(this.state.obj).map(i => i.color)
      }]
    }
  }

  changeView(page) {
    console.log(`VIEW_CHANGED: ${page}`);
    this.setState({view: page});
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

  dynamicPage() {
    switch(this.state.view) {
      case 'Doughnut':
        return (
          <div id='pieChart'>
            <Doughnut ref='chart' type='pie' data={this.data}/>
         </div>
        );
      case 'Bar':
        return (
          <div id='pieChart'>
            <Bar ref='chart' type='pie' data={this.data}/>
          </div>
        );
    }
  }

  render() {
    return(
      <div style={s.wrap}>
        <ul style={{textAlign: 'center'}}>
          <button onClick={() => this.changeView('Doughnut')}>Doughnut</button>
          <button onClick={() => this.changeView('Bar')}>Bar</button>
        </ul>
        {this.dynamicPage()}
      </div>
    )
  }
}

export default History;