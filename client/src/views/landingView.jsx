import React from 'react';

const s = {
  wrap: {
    display: 'grid',
    textAlign: 'center'
  },
  bOpacBox: {
    background: 'black',
    opacity: 0.5
  },
  wOpacBox: {
    background: 'white',
    opacity: 0.5
  },
  button: {
    height: '10rem',
    width: '30rem',
    fontSize: '4rem'
  }
}

class LandingView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div style={s.wrap}>
        <h1 style={s.bOpacBox}>LANDING VIEW</h1>
        <div>
          <button style={s.button}>Login</button>
        </div>

      </div>
    )
  }
}

export default LandingView;