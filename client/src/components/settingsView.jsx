import React from 'react';
import ActivityButton from './activityButton.jsx';
import TaskEditModal from './taskEditModal.jsx';

const s = {
  wrap: {
    display: 'grid',
    gridAutoRows: 'auto',
    height: '100%',
    padding: '0.4rem',
    gridGap: '0.4rem'
  },
  title: {
    backgroundColor: 'lightGrey',
    textAlign: 'center',
    fontSize: '3rem'
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
        <div style={s.title}>
          <a>Settings</a>
        </div>
        <div>
          {Object.keys(this.props.activities).map(id=> (
            <ActivityButton id={id} info={this.props.getActInfo(id)} key={`act_${id}`} clickEvent={this.showModal.bind(this)}/>
          ))}
        </div>
        {this.displayModal()}
      </div>
    );
  }
}

export default SettingsView;