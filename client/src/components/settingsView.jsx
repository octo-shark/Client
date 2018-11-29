import React from 'react';
import ActivityButton from './activityButton.jsx';

const s = {
  wrap: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridAutoRows: '50px',
    height: '100%',
    padding: '4px',
    gridGap: '4px'
  },
  title: {
    backgroundColor: 'lightGrey',
    textAlign: 'center',
    fontSize: 36
  }
}

class SettingsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div style={s.wrap}>
        <div style={s.title}>
          <a>Settings</a>
        </div>
        <div>
          {Object.keys(this.props.activities).map(id=> (
            <ActivityButton info={this.props.getActInfo(id)}/>
          ))}
        </div>
        
      </div>
    );
  }
}


export default SettingsView;