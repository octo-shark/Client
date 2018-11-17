import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navBar.jsx';
import Main from './components/main.jsx';
import DeviceSim from './components/deviceSim.jsx';
import History from './components/history.jsx';

const s = {
  wrap: {
    display: 'grid',
    gridTemplateColumns: '100px 1fr',
    gridTemplateRows: '1fr', //placeholder
    gridGap: '5px',
    height: '95vh'
  },
  nav: {
    gridArea: '1/1 / -1/1',
    backgroundColor: 'grey',
    height: '100%',
    textAlign: 'center'
  },
  page: {
    backgroundColor: 'pink'
  },
  sim: {
  }
}


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: 'main',
      settings: {
        faceAssignment: [
          {id: 22, name: 'Reading', color: '#ff9999'},
          {id: 23, name: 'Phone Calls', color: '#660066'},
          {id: 24, name: 'Browsing Reddit', color: '#ffcc00'},
          {id: 25, name: 'Walking in Circles', color: '#669999'},
          {id: 26, name: 'Complaining', color: '#66ccff'},
          {id: 33, name: 'Debugging', color: '#993333'},
          {id: 66, name: 'Lunch', color: '#ff99ff'},
          {id: 76, name: 'Napping', color: '#666633'}
        ]
      },
      userHistory: [
        {name: 'Reading', totalTime: 90, start: '11:00am', finish: '12:30pm', color: '#ff9999'},
        {name: 'Phone Calls', totalTime: 15, start: '12:30pm', finish: '12:45pm', color: '#660066'},
        {name: 'Browsing Reddit', totalTime: 6, start: '12:45pm', finish: '12:51pm', color: '#ffcc00'},
        {name: 'Walking in Circles', totalTime: 129, start: '12:51', finish: '3:00pm', color: '#669999'}
      ],
      on: false,
      start: 0,
      stop: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      orientation: 0,
      startTime: null,
      stopTime: null,
      keepTime: false
    }
            
  };

  startTimer() {
    // this.setState({keepTime: true})
    // .then (() => {
    //   while (this.state.keepTime) {
      setInterval(()=> {this.tick()}, 1000);
    //   }
    // })
  };

  stopTimer() {
    clearInterval(interval);
    // this.setState({ 
    //   stopTime: Date.now(),
    //   keepTime: false});
    console.log(Date.now() - this.state.startTime);
    console.log('FROM APP', this.state.hours, this.state.minutes, this.state.seconds);
  }

  tick() {
    console.log('tik');
    this.setState({
      seconds: this.state.seconds + 1
    })
    if(this.state.seconds > 59) { 
      this.setState({
        minutes: this.state.minutes + 1,
        seconds: 0
      })
    }
    if (this.state.minutes > 59) {
      this.setState({
        hours: this.state.hours + 1,
        minutes: 0
      })
    }
  }

  changeView(page) {
    console.log(`VIEW SET TO: ${page}`);
    this.setState({view: page});
  }

  dynamicPage() {
    // FIXME do breaks need to be included?
    switch(this.state.view) {
      case 'main':
        return (
          <Main
          settings={this.state.settings} 
          orientation={this.state.orientation}
          startTimer={this.startTimer.bind(this)}
          stopTimer={this.stopTimer.bind(this)}
          seconds={this.state.seconds}
          minutes={this.state.minutes}
          hours={this.state.hours}
          userHistory={this.state.userHistory}
        /> 
        );
        break;
      case 'history':
        return (
          <History/>
        )
        break;
      default: 
        return (
          <p>NO PAGE</p>
        );
        break;
    }
  }

  render() {
    return(
      <div style={s.wrap}>
        <div style={s.nav}>
          <NavBar changeView={this.changeView.bind(this)}/>
        </div>
        <div style={s.page}>
           {this.dynamicPage()}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('App'));