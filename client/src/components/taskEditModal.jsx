import React from 'react';
import { HuePicker } from 'react-color';

const s = {
  wrap: {
    height: '100%',
    padding: '0.4rem',
    gridGap: '0.4rem'
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    position: 'fixed',
    background: 'grey',
    width: '80%',
    height: '80%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    textAlign: 'center'
  },
  nameBlock: {
    backgroundColor: 'lightgrey',
    justifyContent: 'center'
  },
  colorBlock: {
    backgroundColor: 'lightgrey',
  },
  buttons: {
    backgroundColor: 'lightgrey',
  }
}

class TaskEditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.actInfo.name,
      color: this.props.actInfo.color
    }
  }

  handleNameChange(e) { this.setState({name: e.target.value}) };

  handleColorChange(e) { this.setState({color: e.target.value}) };



  render() {
    return (
      <div style={s.modal}>
        <section style={s.modalMain}>
          <div style={s.nameBlock}>
            <p>NAME</p>
            <input
              type='text'
              name='actName'
              required
              value={this.state.name}
              onChange={this.handleNameChange.bind(this)}
            />
          </div>
          <div style={s.colorBlock}>
            <p>COLOR</p>
            <HuePicker 
              // color={this.state.color}
              // onChange={this.handleColorChange.bind(this)}
            />
          </div>
          <div style={s.buttons}>
            <button onClick={() => {
              this.props.updateAct(this.props.id, this.state.name, this.state.color);
              this.props.handleClose();
            }}>
              Save
            </button>
            <button onClick={() => this.props.handleClose()}>Cancel</button>
          </div>
        </section>
      </div>
    )
  };
}

export default TaskEditModal;