import React from 'react'

class DeviceSim extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: null,
      startTime: null
    };
  }
  
  startTimer() {
    this.setState({startTime: new Date()});
    console.log('started timer');
  }


  render() {
    return (
      <div>
        <select>
          <option value="0">Face 0</option>
          <option value="1">Face 1</option>
          <option value="2">Face 2</option>
          <option value="3">Face 3</option>
          <option value="4">Face 4</option>
          <option value="5">Face 5</option>
          <option value="6">Face 6</option>
          <option value="7">Face 7</option>
        </select>
        <input type="submit" value="Start" onClick={() => this.startTimer()}/>
      </div>
    );
  };
}

export default DeviceSim;