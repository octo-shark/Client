import React from 'react';
import ReactDOM from 'react-dom';
import Time from './homeComponents/time.jsx'
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }
  

  render() {
    return(
      <div>
        <div>
          <Time time={this.state.time}/>
        </div>
      </div>
    )
  }
}
export default Home;