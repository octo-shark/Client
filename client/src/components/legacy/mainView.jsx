import React from 'react';
import HistoryStack from './historyStack.jsx';
import CurrentActivityBlock from '../currentActivityBlock.jsx';

const s = {
  wrap: {
    display: 'grid',
    gridTemplateColumns: '1fr 30rem',
    height: '100%'
  },
  historyBox: {
    gridColumn: '2/3',
    backgroundColor: 'Grey',
    overflow: 'auto',
    height: '98vh' // FIXME change literal to relative value
  }
}

class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
 
  render() {
    return (
      <div style={s.wrap}>
        <CurrentActivityBlock 
          curActivity={this.props.curActivity}
          actInfo={this.props.getActInfo(this.props.curActivity)}
          curActTime={this.props.curActTime}
          toggleTimer={this.props.toggleTimer}
          keepTime={this.props.keepTime}
        />
        <div style={s.historyBox}>
          <HistoryStack
            userHistory={this.props.userHistory}
            getActInfo={this.props.getActInfo}
          />
        </div>
      </div>
    );
  };
}

export default MainView;