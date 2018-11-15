import React from 'react';
import ActivityLog from './ActivityLog.jsx'
class ActivityLogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  
  render() {
    return(
      <div className='border'>
        <div>
          <ActivityLog/>
        </div>
      </div>
    )
  }
}

export default ActivityLogs;
