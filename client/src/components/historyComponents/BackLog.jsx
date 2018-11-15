import React from 'react';
import Log from './TimeLog.jsx'; 

class BackLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  
  render() {
    return(
      <div className='border'>
      BackLog!
      <Log/>
      </div>
    )
  }
}

export default BackLog;