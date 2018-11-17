import React from 'react';


const s = {
  wrap: {
    backgroundColor: 'lightGrey'
  }
}
class ActivityLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  
  render() {
    return(
      <div style={s.wrap}>
        <p>
        this.props.ActivityName 
        </p>
        <p >
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
