import React from 'react';
import ReactDOM from 'react-dom';
import HistoryView from './views/historyView.jsx';
import SettingsView from './views/settingsView.jsx';
import TrackerView from './views/trackerView.jsx';
import LandingView from './views/landingView.jsx';
import Hamburger from './components/hamburger.jsx';
import mockData from './components/utilities/mockData.js';

const axios = require('axios');
const proxy = 'https://d1fvvcoh0ci3m5.cloudfront.net';
const s = {
  wrap: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '0 1fr', //placeholder
    height: '98vh'
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
      view: 'landingView',
      faceAssignment: [],
      assignedActivities: [],
      activities: {},
      colorAssignment: {},
      userHistory: [],
      account: {email: 'test'},
      curActivity: null,
      startTime: 0,
      stopTime: 0,
      duration: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      orientation: 0,
      keepTime: false,
      timerInterval: null,
      googleHTML: {}
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
          assignedActivities: mockData.assigned_activities,
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
        timerInterval: setInterval(()=> {this.tick()}, 1000),
        keepTime: true,
        startTime: Date.now(),
      })
    }
  }

  stopTimer() {
    this.postTimeStamp(Date.now());
    this.setState({
      duration: 0,
      timerInterval: clearInterval(this.state.timerInterval),
      keepTime: false
    });
  }

  tick() {
    this.setState({
      duration: Date.now() - this.state.startTime
    })
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
      case 'landingView':
        return (
          <LandingView />
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
            duration={this.state.duration}
          />
        )
      case 'historyView':
        return (
          <HistoryView
            userHistory={this.state.userHistory}
            colorAssignment={this.state.colorAssignment}
            getActInfo={this.getActInfo.bind(this)}
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
  loginCall(){
    window.open('http://localhost:3000/auth/google','_blank','scrollbars=yes,width=500,height=500');
    axios.get('http://localhost:3000/auth/initLogin/google.com').then((response)=>{
      console.log("...Waiting for google login response...",response)
      return axios.get('http://localhost:3000/auth/wait?id='+response.data);
    }).then(response=>{
      this.changeView('trackerView')
      console.log("Got response...: ", response);
    })
  }

  logoutCall(){
    axios.get('http://localhost:3000/auth/logout')
    .then(() => {
      console.log('Changing View')
      this.changeView('landingView')
    })
    .catch((err)=>{
      console.log('error logging out: ', err)
    })
  }

  render() {
    return(
      <div style={s.wrap}>
        <Hamburger
          changeView={this.changeView.bind(this)}
          loginCall={this.loginCall.bind(this)}
          logoutCall={this.logoutCall.bind(this)}
        />
        <div style={s.page}>
           {this.dynamicPage()}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('App'));
