import React from 'react';
import TaskEditModal from '../components/taskEditModal.jsx';
import DevSimB from '../components/devSimB.jsx';

const s = {
  header: {
    paddingTop: '3rem',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '5rem',
    textShadow: '1px 2px 0px rgba(0, 0, 0, 0.4)'
  },
  wrap: {
    overflowY: 'auto',
    itemAlign: 'center',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  actButtons: {
    display: 'grid',
    pad: '3rem',
    fontSize: '2rem',
    marginTop: '2rem',
  }
}

class SettingsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modelToggled: false,
      modelTarget: null
    };
  }

  showModal(id) {
    this.setState({
      modelToggled: true,
      modelTarget: id
    })
  }

  hideModal() {this.setState({ modelToggled: false })}

  displayModal() {
    if (this.state.modelToggled) {
      return (
        <TaskEditModal
          handleClose={this.hideModal.bind(this)}
          updateAct={this.props.updateAct}
          actInfo={this.props.getActInfo(this.state.modelTarget)}
          id={this.state.modelTarget}
        />
      )
    }
  }

  render() {
    return (
      <div style={s.wrap}>
        <div style={s.header}>
          Settings
        </div>
        <div style={s.actButtons}>
          <DevSimB
            getActInfo={this.props.getActInfo}
            activities={Object.keys(this.props.activities)}
            clickEvent={this.showModal.bind(this)}
            curActivity={this.props.curActivity}
          />
        </div>
        {this.displayModal()}
      </div>
    );
  }
}

export default SettingsView;