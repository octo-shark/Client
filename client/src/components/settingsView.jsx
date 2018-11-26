import React from 'react';

const s = {
  wrap: {
    display: 'grid',
    gridTemplateColumns: '1f',
    gridAutoRows: 'minmax(20px, 60px)',
    height: '100%',
    padding: '4px',
    gridGap: '4px'
  },
  title: {
    backgroundColor: 'lightGrey',
    textAlign: 'center',
    fontSize: 36
  },
  accountInfo: {
    display: 'grid',
    backgroundColor: 'lightGrey',
    gridAutoRows: 'auto'
  }
}

class SettingsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={s.wrap}>
        <div style={s.title}>
          <a>Account Settings</a>
        </div>
        <div style={s.accountInfo}>
          <a>username: {this.props.account.username}</a>
          <a>email: {this.props.account.email}</a>
          <a>id: {this.props.account.id}</a>
        </div>
      </div>
    )
  }
}

export default SettingsView;