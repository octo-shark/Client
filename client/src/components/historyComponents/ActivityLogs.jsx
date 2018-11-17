import React from 'react';
import ActivityLog from './ActivityLog.jsx'
const s = {
  wrap: {
    display: 'grid',
    templateRows: 'repeat(2, 1fr)',
    gridGap: '5px',
    backgroundColor: 'grey',
    padding: '5px',
  }
}
class ActivityLogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return(
      <div style={s.wrap}>
          Activity Log!
          <ActivityLog/>
          <ActivityLog/>
          <ActivityLog/>
          <ActivityLog/>
          <ActivityLog/>
          <ActivityLog/>
          <ActivityLog/>
          <ActivityLog/>
      </div>
    )
  }
}

export default ActivityLogs;
