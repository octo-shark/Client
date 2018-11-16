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
    backgroundColor: 'Grey'
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
      history: [
        {name: 'Eating', start: 'hh:mm', finish: 'hh:mm', color: 0},
        {name: 'Code Share', start: 'hh:mm', finish: 'hh:mm', color: 0},
        {name: 'Research', start: 'hh:mm', finish: 'hh:mm', color: 0},
        {name: 'Exercise', start: 'hh:mm', finish: 'hh:mm', color: 0}
      ]

    };
  }

  // startTimer() {
  //   this.setState({startTime: new Date()});
  //   console.log('started timer');
  // }
  // stopTimer() {
  //   console.log(new Date() - this.state.startTime);
  //   this.setState({startTime: new Date()}); // FIXME
  // }
 
  render() {
    return (
      <div style={s.wrap}>
      {console.log('FROM MAIN', this.props.hours, this.props.minutes, this.props.seconds)}
        <div style={s.timerBox}>
           <StopWatch
             seconds={this.props.seconds}
             minutes={this.props.minutes}
             hours={this.props.hours}
           />
        </div>
        <div style={s.historyBox}>
          <HistoryStack history={this.state.history}/>
        </div>
        <div>
          <DeviceSim startTimer={this.props.startTimer} stopTimer={this.props.stopTimer}/>
        </div>
      </div>
    );
  };
}

export default Main;