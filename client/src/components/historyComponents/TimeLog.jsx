import React from 'react';

import MorningLog from './MorningLog.jsx'
import AfternoonLog from './AfternoonLog.jsx'
import EveningLog from './EveningLog.jsx'

class Log extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  
  render() {
    return(
      <div className='border'>
        <div>
          <MorningLog/>
          <AfternoonLog/>
          <EveningLog/>
        </div>
      </div>
    )
  }
}

export default Log;