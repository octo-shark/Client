import React from 'react';
import ActivityButton from './activityButton.jsx';
import TaskEditModal from './taskEditModal.jsx';

const s = {
  wrap: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridAutoRows: 'auto',
    height: '100%',
    padding: '4px',
    gridGap: '4px'
  },
  title: {
    backgroundColor: 'lightGrey',
    textAlign: 'center',
    fontSize: 36
  },
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.6)'
  },
  modalMain: {
    position: 'fixed',
    background: 'white',
    width: '80%',
    height: 'auto',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)'
  },
  displayBlock: {
    display: 'block'
  },
  displayNone: {
    display: 'none'
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
    console.log('show');
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
        <button type='button' onClick={() => this.showModal()}>Open</button>
      </div>
    );
  }
}

const Modal = ({ handleClose, children }) => {

  return (
    <div style={s.modal}>
      <section style={s.modalMain}>
        {children}
        <button onClick={() => handleClose()}>Save</button> 
        <button onClick={() => handleClose()}>Cancel</button>
      </section>
    </div>
  );
};

export default SettingsView;