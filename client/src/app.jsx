import React from 'react';
import ReactDOM from 'react-dom';
import HistoryView from './views/historyView.jsx';
import SettingsView from './views/settingsView.jsx';
import TrackerView from './views/trackerView.jsx';
import Hamburger from './components/hamburger.jsx';
import mockData from './components/utilities/mockData.js';
import moment from 'moment';

const axios = require('axios');
const proxy = 'http://ec2-3-16-0-251.us-east-2.compute.amazonaws.com';
const s = {
  wrap: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '0 1fr', //placeholder
    height: '98vh'
  },
  page: {
    backgroundColor: '#606060'
  },
  sim: {
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: 'trackerView',
      faceAssignment: [],
      assignedActivities: [],
      activities: {},
      colorAssignment: {},
      userHistory: [],
      account: {email: 'test'},
      curActivity: null,
      startTime: 0,
      stopTime: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      orientation: 0,
      keepTime: false,
      timerInterval: null
    }
  };

  componentDidMount() {
    axios.get(`${proxy}/rikki`)
      .then(res => {
        console.log(res);
        console.log('mockData is being used:');
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

  toggleTimer() {
    if (!this.state.keepTime) this.startTimer(this.state.curActivity);
    else this.stopTimer();
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
    this.postTimeStamp(Date.now());
    this.setState({
      seconds: 0,
      minutes: 0,
      hours: 0,
      timerInterval: clearInterval(this.state.timerInterval),
      keepTime: false
    });
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
  
  postTimeStamp(end) {
    let stamp = {
      user_id: this.state.account.username,
      activity_id: this.state.curActivity,
      timestamp_start: this.state.startTime,
      timestamp_end: end
    };
    axios.post(`${proxy}/${this.state.account.username}/timestamps`, stamp)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  updateAct(id, name, color) {
    console.log(id);
    console.log('prev acts:');
    console.log(this.state.activities);

    let newActs = Object.assign({}, this.state.activities);
    newActs[id].name = name;
    newActs[id].color = color;
    this.setState({activities: newActs});

    console.log('new acts:');
    console.log(this.state.activities);
  }

  taskChange(id) {
    if (!this.state.keepTime) {this.startTimer(id)}
    else {
      let now = Date.now();
      this.postTimeStamp(now);
      this.setState({
        seconds: 0,
        minutes: 0,
        hours: 0,
        startTime: now,
        curActivity: id
      })
    }
  }

  changeView(page) {
    console.log(`VIEW_CHANGED: ${page}`);
    this.setState({view: page});
  }

  dynamicPage() {
    switch(this.state.view) {
      case 'mainView':
        return (
          <MainView
            toggleTimer={this.toggleTimer.bind(this)}
            getActInfo={this.getActInfo.bind(this)}
            curActivity={this.state.curActivity}
            userHistory={this.state.userHistory}
            orientation={this.state.orientation}
            keepTime={this.state.keepTime}
            curActTime={{
              seconds: this.state.seconds,
              minutes: this.state.minutes,
              hours: this.state.hours
            }}
          /> 
        );
      case 'trackerView':
        return (
          <TrackerView
            toggleTimer={this.toggleTimer.bind(this)}
            getActInfo={this.getActInfo.bind(this)}
            taskChange={this.taskChange.bind(this)}
            curActivity={this.state.curActivity}
            assignedActivities={this.state.assignedActivities}
            keepTime={this.state.keepTime}
            curActTime={{
              seconds: this.state.seconds,
              minutes: this.state.minutes,
              hours: this.state.hours
            }}
          />
        )
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
            getActInfo={this.getActInfo.bind(this)}
            updateAct={this.updateAct.bind(this)}
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
        <Hamburger
          changeView={this.changeView.bind(this)}
        />
        <div style={s.page}>
           {this.dynamicPage()}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('App'));
