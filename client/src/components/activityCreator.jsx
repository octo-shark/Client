import React from 'react';

class ActivityCreator extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '',
      color: '#FF0000'
    }
  }
  render() {
    return (
      <div>
        <form>
          <div>
            <label for='title'>Activity Name: </label>
            <input type='text' name='title' value={this.state.title} onChange={(e) => {this.setState({title: e.target.value})}}></input>
          </div>
          <div>
            <label for='color'>Color: </label>
            <input type='text' name='color' value={this.state.color} onChange={(e) => {this.setState({color: e.target.value})}}></input>
          </div>
        </form>
      </div>
    )
  }
}

export default ActivityCreator;