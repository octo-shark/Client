
module.exports.timer = () => {
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
