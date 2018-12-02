import React from 'react';
import TaskEditModal from '../components/taskEditModal.jsx';
import DevSimB from '../components/devSimB.jsx';

const s = {
  wrap: {

  },
  actButtons: {
    display: 'grid',
    pad: '3rem',
    fontSize: '2rem',
    marginLeft: '5rem',
    marginRight: '5rem',
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
      <div>
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