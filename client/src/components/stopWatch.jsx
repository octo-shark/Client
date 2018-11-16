import React from 'react';

const s = {
  hours: {
    fontSize: 30
  },
  minutes: {
    fontSize: 30
  },
  seconds: {
    fontSize: 20
  }
}

class StopWatch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0
    }

  }
  timer() {
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
  
  format(num) {
    let str = '';
    if (num < 10) str += '0';
    str += num.toString();
    return str;
  }

  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 1000);
  }
  componentWillUnmount(){
    clearInterval(this.intervalId);
  }
  render() {
    return(
      <div>
        <a style={s.hours}>{this.format(this.state.hours)}:</a>
        <a style={s.minutes}>{this.format(this.state.minutes)}:</a>
        <a style={s.seconds}>{this.format(this.state.seconds)}</a>
      </div>
    );
  }
}

export default StopWatch;