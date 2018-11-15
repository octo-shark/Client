import React from 'react';

class ActivityLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  
  render() {
    return(
      <div className='border'>
        <div>
          this.props.ActivityName
          this.props.ActivityDescription
          this.props.ActivityTime
        </div>
      </div>
    )
  }
}

export default ActivityLog;
