import React from 'react';

const s = {
  page: {
    itemAlign: 'center',
    height: '100vh'

  },
  wrap: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 'auto',
    height: '100%',
    justifyContent: 'center'
  },
  signup: {
    fontSize: '4rem',
    background: 'none',
    border: 'none',
    paddingRight: '2rem',
    color: 'white',
    outline: 'none',
    cursor: 'pointer',
    textShadow: '2px 2px 0px rgba(0, 0, 0, 0.4)'
  },
  login: {
    fontSize: '4rem',
    background: 'none',
    border: 'none',
    color: 'white',
    paddingLeft: '2rem',
    outline: 'none',
    cursor: 'pointer',
    textShadow: '2px 2px 0px rgba(0, 0, 0, 0.4)'
  },
  timeshark: {
    color: 'white',
    fontSize: '5rem',
    textShadow: '2px 2px 0px rgba(0, 0, 0, 0.4)'
  },
  desc: {
    color: 'white',
    fontSize: '2rem',
    paddingBottom: '3rem',
    textShadow: '2px 2px 0px rgba(0, 0, 0, 0.4)'
  }
}

class LandingView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={s.page}>
        <div style={s.wrap}>
          <div style={s.timeshark}>
            Timeshark
          </div>
          <div style={s.desc}>
            A simple time management app
          </div>
          <span>
            <button style={s.signup} onClick={() =>this.props.loginCall()}>Sign up</button>
            <button style={s.login} onClick={() =>this.props.loginCall()}>Login</button>
          </span>
        </div>

      </div>
    )
  }
}

export default LandingView;