import React from 'react';

const s = {
  wrap: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridAutoRows: 'auto',
    height: '100%',
    padding: '4px',
    gridGap: '4px'
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

class TaskEditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.actInfo.name,
      color: this.props.actInfo.color
    }
  }

  handleNameChange(e) {
    this.setState({name: e.target.value})
  }


  render() {
    return (
      <div style={s.modal}>
        <section style={s.modalMain}>
          <input type='text' name='actName' value={this.state.name} required onChange={this.handleNameChange.bind(this)}/>
          <div>
            COLOR
          </div>
          <button onClick={() => {
            this.props.updateAct(this.props.id, this.state.name, this.state.color);
            this.props.handleClose();
          }}>
            Save
            </button>
          <button onClick={() => this.props.handleClose()}>Cancel</button>
        </section>
      </div>
    )
  };
}

export default TaskEditModal;