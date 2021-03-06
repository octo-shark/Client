import React from "react";
import ReactDOM from "react-dom";
import HistoryView from "./views/historyView.jsx";
import SettingsView from "./views/settingsView.jsx";
import TrackerView from "./views/trackerView.jsx";
import LandingView from "./views/landingView.jsx";
import Hamburger from "./components/hamburger.jsx";
// import mockData from "./components/utilities/mockData.js";
import { relativeTimeThreshold } from "moment";

const axios = require("axios");
const proxy = 'https://d1fvvcoh0ci3m5.cloudfront.net'
const s = {
  wrap: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "0 1fr", //placeholder
    height: "100vh"
  }
};

// Device
var socket;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: "landingView",
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
    };
  }

  // componentDidMount() {
  //   this.initDeviceSocket(this.setActivityIdToDeviceSide.bind(this));
  //   console.log('Has account logged: ', this.state.account)
  //   if(this.state.account){
  //     axios.get(`${proxy}/profile/${this.account.data.user.googleID}`)
  //       .then(res => {
  //         console.log('COmponent Did mount',res);
  //         this.setState({
  //           account:  account.data.user,
  //           activities: account.data.activities,
  //           assignedActivities: account.data.assigned_activities,
  //         });
  //       })
  //       .catch(err => console.log(err));
  //     axios.get(`${proxy}/profile/${this.account.data.user.id}/timestamps`)
  //       .then(res => {
  //         console.log(res);
  //         this.setState({
  //           userHistory: res.data
  //         })
  //       })
  //       .catch(err => console.log(err));
  //   }
  // }

  componentDidMount() {
    // console.log("Has account logged: ", this.state.account);

    if (window.sessionStorage.authenticated) {
      let baseView = "trackerView";

      axios.get(`${proxy}/auth/${window.sessionStorage.authenticated}`)
        .then(res => {
          // console.log("!!!", res);
          this.setState({
            account: res.data.user,
            activities: this.formatActArrToObj(res.data.activities),
            assignedActivities: res.data.assigned_activities,
            view: baseView
          });
        })
        // .catch(err => console.log(err));
    }
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
    axios
      .get(`${proxy}/`)
      .then(res => {
        // console.log("got data from proxy: ", res.data);
        if (res.data.user) baseView = "trackingView";
        this.setState({
          account: account.data.user,
          activities: account.data.activities,
          assignedActivities: account.data.assigned_activities
        });
      })
      // .catch(err => console.log(err));
  }


  getTimeStampData(id) {
    axios
      .get(`${proxy}/profile/${id}/timestamps`)
      .then(res => {
        // console.log(res);
        this.setState({
          userHistory: res.data
        });
      })
      // .catch(err => console.log(err));
  }
  //     this.initDeviceSocket(this.setActivityIdToDeviceSide.bind(this));

  // Time Pylon device socket i/o
  initDeviceSocket(setActivityIdToDeviceSide) {
    socket = new WebSocket("ws://localhost:8081");
    socket.onopen = this.openDeviceSocket;
    socket.onmessage = this.getDeviceData;
    socket.onerror = this.onDeviceError;
    socket.setActivityIdToDeviceSide = setActivityIdToDeviceSide;
  }
  openDeviceSocket() {
    //console.log('Socket to device is open');
    socket.send("Connect to Time Pylon");
  }
  onDeviceError(evt) {
    // console.log("ERROR: " + evt.data + "\n");
    return;
  }
  getDeviceData(result) {
    // '{\'side\':0}\r'
    var inData = result.data.slice(1, -3); // strip out just JSON
    inData = JSON.parse(inData.split("\\").join("")); // replace the backslashes
    if (inData.side !== -1) {
      this.setActivityIdToDeviceSide(+inData.side);
    }
  }
  setActivityIdToDeviceSide(side) {
    // console.log("setActivityIdToDeviceSide", side);
    let newActivityId = this.state.assignedActivities[side];
    // console.log('newactID', newActivityId);
    this.taskChange(newActivityId);
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
      if (!document.getElementsByClassName("playstop")[1].checked) {
        document.getElementsByClassName("playstop")[1].checked = true;
      }
      this.setState({
        curActivity: id,
        timerInterval: setInterval(() => {
          this.tick();
        }, 1001),
        keepTime: true,
        startTime: Date.now()
      });
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
    });
  }

  postTimeStamp(end) {
    let stamp = {
      user_id: this.state.account.id,
      activity_id: this.state.curActivity,
      timestamp_start: this.state.startTime,
      timestamp_end: end
    };

    // console.log(stamp);
    this.setState({
      userHistory: this.state.userHistory.concat(stamp)
    })
    axios.post(`${proxy}/${this.state.account.id}/timestamps`, stamp);
    // .then(res => console.log(res))
    // .catch(err => console.log(err));
  }

  updateAct(id, name, color) {
    let newActs = Object.assign({}, this.state.activities);
    newActs[id].name = name;
    newActs[id].color = color;
    this.setState({ activities: newActs });

    axios
      .post(`${proxy}/auth/update_activity`, {
        id: id,
        name: name,
        color: color
      })
      // .then(res => console.log(res))
      // .catch(err => console.log(err));
  }

  taskChange(id) {
    // console.log('taskchange', id);
    if (!this.state.keepTime) {
      this.startTimer(id);
    } else {
      let now = Date.now();
      this.postTimeStamp(now);
      this.setState({
        startTime: now,
        curActivity: id
      });
    }
  }

  changeView(page) {
    // console.log(`VIEW_CHANGED: ${page}`);
    if (this.state.account) {
      this.setState({ view: page }, () => {
        if (this.state.view === "trackerView") {
          if (this.state.keepTime) {
            document.getElementsByClassName("playstop")[1].checked = true;
          }
        }
      });
    }
  }

  dynamicPage() {
    switch (this.state.view) {
      case "landingView":
        return <LandingView loginCall={this.loginCall.bind(this)} />;
      case "trackerView":
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
        );
      case "historyView":
        return (
          <HistoryView
            userHistory={this.state.userHistory}
            colorAssignment={this.state.colorAssignment}
            getActInfo={this.getActInfo.bind(this)}
          />
        );
      case "settingsView":
        return (
          <SettingsView
            account={this.state.account}
            assignedActivities={this.state.assignedActivities}
            activities={this.state.activities}
            getActInfo={this.getActInfo.bind(this)}
            updateAct={this.updateAct.bind(this)}
          />
        );
      default:
        return (
          <p>
            <h1>Invalid Page</h1>
          </p>
        );
    }
  }

  loginCall() {
    window.open(
      `${proxy}/auth/google`,
      "_blank",
      "scrollbars=yes,width=500,height=500"
    );

    axios
      .get(`${proxy}/auth/initLogin/google.com`)
      .then(res => {
        // console.log("...Waiting for google login response...", res);
        return axios.get(`${proxy}/auth/wait?id='+${res.data}`);
      })
      .then(res => {
        // console.log(res);
        this.setState({
          account: res.data.user,
          activities: this.formatActArrToObj(res.data.activities),
          assignedActivities: res.data.assigned_activities,
          view: res.data.user ? "trackerView" : "landingView"
        });
        this.getTimeStampData(res.data.account.id);
        // console.log(res.data.assigned_activities, res.data.activities);
        window.sessionStorage["authenticated"] = res.data.user.googleID;
      })
      // .catch(err => console.log(err));
  }

  formatActArrToObj(arr) {
    let actObj = {};
    for (let x of arr) {
      actObj[x.activity_id] = { name: x.activity_name, color: x.color };
    }
    return actObj;
  }

  logoutCall() {
    window.sessionStorage.clear();
    document.body.style.background = `#606060`;
    this.setState({
      account: null,
      activities: {},
      assignedActivities: [],
      view: "landingView"
    });
    axios
      .get(`${proxy}/auth/logout`)
      // .then(response => {
        // console.log("logout res: ", response);
      // })
      // .catch(err => {
        // console.log("error logging out: ", err);
      // });
  }

  dynamicBurger() {
    if (!!this.state.account) return (
      <Hamburger
        changeView={this.changeView.bind(this)}
        loginCall={this.loginCall.bind(this)}
        logoutCall={this.logoutCall.bind(this)}
        loggedIn={!!this.state.account}
     />
    );
  }

  render() {
    return (
      <div style={s.wrap}>
        {this.dynamicBurger()}
        <div>{this.dynamicPage()}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("App"));
