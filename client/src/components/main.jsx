import React from 'react';
import TimerDisplay from '../components/timerDisplay.jsx';
import HistoryStack from '../components/historyStack.jsx';
import DeviceSim from '../components/deviceSim.jsx';
import StopWatch from './stopWatch.jsx';

const s = {
  wrap: {
    display: 'grid',
    gridTemplateColumns: '1fr 300px',
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
    };
  }
 
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
          <HistoryStack userHistory={this.props.userHistory}/>
        </div>
        <div>
          <DeviceSim startTimer={this.props.startTimer} stopTimer={this.props.stopTimer}/>
        </div>
      </div>
    );
  };
}

export default Main;