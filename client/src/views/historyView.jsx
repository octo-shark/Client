import React from 'react';
import {Doughnut, Bar} from 'react-chartjs-2';
const {tFormat, humanDuration} = require('../components/utilities/tFormat.js');

const s = {
  wrap: {
    overflow: 'auto',
    textAlign: 'center',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  topText: {
    fontSize: '4rem',
    color: 'white'
  }
}

// Chart.defaults.global.legend.position = 'bottom';

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'Doughnut',
      obj: this.consolidate(),
      units: 'minutes',
      legend: {
        labels: {
          fontColor: 'rgb(255,255,255)'
        }
      }
    };

    this.data = {
      labels: Object.values(this.state.obj).map(i => i.name),
      datasets: [{
        label: Object.values(this.state.obj).map(i => ''),//tFormat(humanDuration(i.time))),
        data: Object.values(this.state.obj).map(i =>((i.time / (1000*60))).toPrecision(2)),  //Math.round((i.time / this.state.obj.total) * 100)
        backgroundColor: Object.values(this.state.obj).map(i => i.color),
        hoverBackgroundColor: Object.values(this.state.obj).map(i => i.color)
      }]
    }
    
  }

  changeView(page) {
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
          <div>
            <Doughnut 
              ref={'chart'}
              data={this.data}
              height={450}
              options={{
                maintainAspectRatio: false
              }}
              legend={this.state.legend}
              // options={{
                // responsive: true,
                // maintainAspectRatio: false
              // }}
            />
         </div>
        );
      case 'Bar':
        return (
          <div>
            <Bar
              ref={'chart'}
              data={this.data}
              height={300}
              options={{
                maintainAspectRatio: false
              }}
              legend={this.state.legend}
              // options={{
                // responsive: true,
                // maintainAspectRatio: false,
                // scales: {
                //   yAxes: [{
                //       ticks: {
                //           beginAtZero:true
                //       }
                //   }]
                // }
              // }}
            />
          </div>
        );
    }
  }

  render() {
    return(
      <div style={s.wrap}>
        <a style={s.topText}>Minutes</a>
        {this.dynamicPage()}
        <ul style={{textAlign: 'center'}}>
          <button onClick={() => this.changeView('Doughnut')}>Doughnut</button>
          <button onClick={() => this.changeView('Bar')}>Bar</button>
        </ul>
      </div>
    )
  }
}

export default History;