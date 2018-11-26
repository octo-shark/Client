import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navBar.jsx';
import MainView from './components/mainView.jsx';
import HistoryView from './components/historyView.jsx';
import SettingsView from './components/settingsView.jsx';
import fakeData from './components/fakeUserData.js';
import moment from 'moment';
import { throws } from 'assert';


const axios = require('axios');
const proxy = 'http://ec2-18-217-21-9.us-east-2.compute.amazonaws.com';
const s = {
  wrap: {
    display: 'grid',
    gridTemplateColumns: '100px 1fr',
    gridTemplateRows: '1fr', //placeholder
    gridGap: '5px',
    height: '98vh'
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

// const exampleUserFaceAssignment = [
//   {id: 1, name: 'Reading', color: '#b9f6ca'},
//   {id: 2, name: 'Phone Calls', color: '#84ffff'},
//   {id: 3, name: 'Browsing Reddit', color: '#b388ff'},
//   {id: 4, name: 'Walking in Circles', color: '#ff80ab'},
//   {id: 26, name: 'Complaining', color: '#ff9e80'},
//   {id: 33, name: 'Debugging', color: '#ffff8d'},
//   {id: 66, name: 'Lunch', color: '#80d8ff'},
//   {id: 76, name: 'Napping', color: '#ea80fc'}
// ]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: 'mainView',
      faceAssignment: [],
      colorAssignment: {},
      userHistory: [
        {name: 'Reading', totalTime: 90, start: '11:00am', finish: '12:30pm', color: '#ff9999'},
        {name: 'Phone Calls', totalTime: 15, start: '12:30pm', finish: '12:45pm', color: '#660066'},
        {name: 'Browsing Reddit', totalTime: 6, start: '12:45pm', finish: '12:51pm', color: '#ffcc00'},
        {name: 'Walking in Circles', totalTime: 129, start: '12:51', finish: '3:00pm', color: '#669999'}
      ],
      account: {email: 'test'},
      curActivity: null,
      on: false,
      startTime: 0,
      stopTime: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      orientation: 0,
      startTime: null,
      stopTime: null,
      keepTime: false,
      timerInterval: null
    }
  };

  componentDidMount() {
    axios.get(`${proxy}/rikki`)
      .then(res => {
        console.log(res);
        console.log(fakeData);
        this.setState({
          // test data being used
          account: res.data[0],
          faceAssignment: fakeData.assigned_activites,
          colorAssignment: fakeData.color_preferences
        });
      })
      .catch(err => console.log(err));
    axios.get(`${proxy}/rikki/timestamps`)
      .then(res => {
        console.log(res);
        this.setState({
          userHistory: res.data
        })
      })
      .catch(err => console.log(err));
  }

  startTimer(index) {
    if (!this.state.keepTime) {
      this.setState({
        curActivity: index,
        seconds: 0,
        minutes: 0,
        hours: 0,
        timerInterval: setInterval(()=> {this.tick()}, 1000),
        keepTime: true,
        startTime: Date.now(),
      })
    }
  };

  stopTimer() {
    let prev = moment.duration(Date.now() - this.state.startTime);
    console.log(`${prev.hours()}:${prev.minutes()}:${prev.seconds()}`);
    this.setState({ 
      timerInterval: clearInterval(this.state.timerInterval),
      keepTime: false,
    })
  }

  tick() {
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

  taskChange(index) {
    if (!this.state.keepTime) {this.startTimer(index)}
    else {
      let now = Date.now();
      let prev_session = {
        activity_id: this.state.faceAssignment[index].id,
        timestamp_start: this.state.startTime,
        timestamp_end: now
      }
      this.setState({
        seconds: 0,
        minutes: 0,
        hours: 0,
        startTime: now,
        userHistory: this.state.userHistory.concat(prev_session)
      })
    }
  }

  changeView(page) {
    console.log(`VIEW_CHANGED: ${page}`);
    this.setState({view: page});
  }

  dynamicPage() {
    // FIXME do breaks need to be included?
    switch(this.state.view) {
      case 'mainView':
        return (
          <MainView
            userHistory={this.state.userHistory}
            colorAssignment={this.state.colorAssignment}
            orientation={this.state.orientation}
            startTimer={this.startTimer.bind(this)}
            stopTimer={this.stopTimer.bind(this)}
            seconds={this.state.seconds}
            minutes={this.state.minutes}
            hours={this.state.hours}
          /> 
        );
      case 'historyView':
        return (
          <HistoryView/>
        );
      case 'settingsView':
        return (
          <SettingsView
            account={this.state.account}
            faceAssignment={this.state.faceAssignment}
          />
        );
      default: 
        return (
          <p>Invalid Page</p>
        );
    }
  }

  render() {
    return(
      <div style={s.wrap}>
        <div style={s.nav}>
          <NavBar 
            changeView={this.changeView.bind(this)}
            account={this.state.account}
            faceAssignment={this.state.faceAssignment}
            colorAssignment={this.state.colorAssignment}
            taskChange={this.taskChange.bind(this)}
          />
        </div>
        <div style={s.page}>
           {this.dynamicPage()}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('App'));