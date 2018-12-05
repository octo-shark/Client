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
    height: '98vh',
  },
  page: {
    backgroundColor: '#606060'
    // backgroundColor: '#ff80ab'
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
      account: null,
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
    let baseView = 'landingView';
    if(window.sessionStorage['authenticated']) baseView = 'trackerView';
    console.log('Has account logged: ', this.state.account)
    this.setState({view: baseView});
    // this.getDataFromProxy();
    // axios.get(`${proxy}/profile/${this.account.data.user.id}/timestamps`)
    //   .then(res => {
    //     console.log(res);
    //     this.setState({
    //       userHistory: res.data
    //     })
    //   })
    //   .catch(err => console.log(err));
  }
  
  getDataFromProxy() {
    let baseView = 'landingView';
    axios.get(`localhost:3000/`)
    .then(res => {
      console.log('got data from proxy: ',res.data);
      if (res.data.user) baseView = 'trackingView';
      this.setState({
        account:  account.data.user,
        activities: account.data.activities,
        assignedActivities: account.data.assigned_activities,
        view: baseView
      });
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
      user_id: this.state.account.id,
      activity_id: this.state.curActivity,
      timestamp_start: this.state.startTime,
      timestamp_end: end
    };
    axios.post(`${proxy}/${this.state.account.id}/timestamps`, stamp)
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
          <LandingView loginCall={this.loginCall.bind(this)}/>
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
          <p><h1>Invalid Page</h1></p>
        );
    }
  }

  loginCall(){
    window.open('http://localhost:3000/auth/google','_blank','scrollbars=yes,width=500,height=500');
    axios.get('http://localhost:3000/auth/initLogin/google.com').then((res)=>{
      console.log("...Waiting for google login response...",res)
      return axios.get('http://localhost:3000/auth/wait?id='+res.data);
    }).then(res => {

       console.log(res);
       this.setState({
         account: res.data.user,
         activities: this.formatActArrToObj(res.data.activities),
         assignedActivities: res.data.assigned_activities
       })
       if (res.data.user && res.data.activities && res.assigned_activities) {
         this.changeView('trackerView');
       }
       console.log(res.data.assigned_activities, res.data.activities);
      // this.setState({account: response.data.user})
      // this.setState({activities: response.data.activities})
      // this.setState({assigned_activities: response.assigned_activities})

      window.sessionStorage['authenticated'] = true;
    }).catch(err => console.log(err));
  }

  formatActArrToObj(arr) {
    let actObj = {};
    for (let x of arr) {
      actObj[x.activity_id] = {name: x.activity_name, color: x.color}
    }
    return actObj;
  }

  logoutCall(){
    window.sessionStorage.clear();
    this.setState({
      account: null,
      view: 'landingView'
    })
    axios.get('http://localhost:3000/auth/logout')
    .then((response) => {
      console.log('logout res: ', response)
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
