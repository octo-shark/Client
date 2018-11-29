import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navBar.jsx';
import MainView from './components/mainView.jsx';
import HistoryView from './components/historyView.jsx';
import SettingsView from './components/settingsView.jsx';
import fakeData from './components/fakeUserData.js';
import mockData from './components/mockData.js';
import moment from 'moment';

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
    backgroundColor: '#adb7c1'
  },
  sim: {
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: 'mainView',
      faceAssignment: [],
      assignedActivities: [],
      colorAssignment: {},
      userHistory: [],
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

        console.log('mockData:');
        console.log(mockData);

        this.setState({
          // test data being used
          account: mockData.account,
          activities: mockData.activities,
          assignedActivities: mockData.assigned_activities
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

  getActInfo(id) {
    return this.state.activities[id];
  }

  startTimer(id) {
    if (!this.state.keepTime) {
      this.setState({
        curActivity: id,
        seconds: 0,
        minutes: 0,
        hours: 0,
        timerInterval: setInterval(()=> {this.tick()}, 1000),
        keepTime: true,
        startTime: Date.now(),
      })
    }
  }

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

  taskChange(id) {
    if (!this.state.keepTime) {this.startTimer(id)}
    else {
      let now = Date.now();
      let prev_session = [{
        activity_id: id,
        timestamp_start: this.state.startTime,
        timestamp_end: now
      }];
      this.setState({
        seconds: 0,
        minutes: 0,
        hours: 0,
        startTime: now,
        userHistory: prev_session.concat(this.state.userHistory)
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
            startTimer={this.startTimer.bind(this)}
            stopTimer={this.stopTimer.bind(this)}
            getActInfo={this.getActInfo.bind(this)}
            userHistory={this.state.userHistory}
            orientation={this.state.orientation}
            seconds={this.state.seconds}
            minutes={this.state.minutes}
            hours={this.state.hours}
          /> 
        );
      case 'historyView':
        return (
          <HistoryView
          userHistory={this.state.userHistory}
          colorAssignment={this.state.colorAssignment}
          />
        );
      case 'settingsView':
        return (
          <SettingsView
            account={this.state.account}
            activities={this.state.activities}
            assignedActivities={this.state.assignedActivities}
            getActInfo={this.getActInfo.bind(this)}
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
            taskChange={this.taskChange.bind(this)}
            getActInfo={this.getActInfo.bind(this)}
            account={this.state.account}
            assignedActivities={this.state.assignedActivities}
            colorAssignment={this.state.colorAssignment}
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
