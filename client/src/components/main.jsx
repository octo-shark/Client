import React from 'react';
import TimerDisplay from '../components/timerDisplay.jsx';
import HistoryStack from '../components/historyStack.jsx';
import DeviceSim from '../components/deviceSim.jsx';
import StopWatch from './stopWatch.jsx';

const s = {
  wrap: {
    display: 'grid',
    gridTemplateColumns: '70% 30%',
    gridTemplateRows: '1fr 1fr', //placeholder
    height: '100%'
  },
  timerBox: {
    textAlign: 'center',
    verticalAlign: 'middle',
    gridArea: '1/1 / 2/2'
  },
  historyBox: {
    gridRow: '1/3',
    gridColumn: '2/3',
    backgroundColor: 'Grey',
  },
  sim: {
    gridRow: '2/3',
    gridColumn: '1/2'
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       curActivity: 'name',
       startTime: 0,
      history: [
        {name: 'Eating', start: 'hh:mm', finish: 'hh:mm', color: 0},
        {name: 'Code Share', start: 'hh:mm', finish: 'hh:mm', color: 0},
        {name: 'Research', start: 'hh:mm', finish: 'hh:mm', color: 0},
        {name: 'Exercise', start: 'hh:mm', finish: 'hh:mm', color: 0}
      ]

    };
  }

  startTimer() {
    this.setState({startTime: new Date()});
    console.log('started timer');
  }
  stopTimer() {
    console.log(new Date() - this.state.startTime);
    this.setState({startTime: new Date()}); // FIXME
  }
  formatTime(raw) {

  }
  tick() {

  }
  

  render() {
    return (
      <div style={s.wrap}>
        <div style={s.timerBox}>
           <StopWatch/>
        </div>
        <div style={s.historyBox}>
          <HistoryStack history={this.state.history}/>
        </div>
        <div>
          <DeviceSim startTimer={this.startTimer.bind(this)} stopTimer={this.stopTimer.bind(this)}/>
        </div>
      </div>
    );
  };
}

export default Main;