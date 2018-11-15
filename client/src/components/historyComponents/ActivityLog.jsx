import React from 'react';

class ActivityLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  
  render() {
    return(
      <div id='activityLog'>
        <p>
        this.props.ActivityName 
        </p>
        <p id='activityLog_Time'>
        this.props.ActivityTime
        </p>
        <p>
        this.props.ActivityDescription
        </p>
        
      </div>
    )
  }
}

export default ActivityLog;
