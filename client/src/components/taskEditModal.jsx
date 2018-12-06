import React from 'react';
import CirclePicker from 'react-color/lib/Circle'

let s = {
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
    position: 'fixed',
    background: 'grey',
    width: '80%',
    height: '80%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    textAlign: 'center',
    borderStyle: 'solid',
    borderWidth: '2rem',
    fontSize: '4rem',
    color: 'black'
  },
  nameBlock: {
    backgroundColor: 'lightgrey',
  },
  colorBlock: {
    backgroundColor: 'lightgrey',
    height: '40%'
  },
  buttons: {
    display: 'grid',
    gridGap: '1rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))',
    overflow: 'wrap',
    textAlign: 'center',
    padding: '0.5rem'
  },
  save: {
    backgroundColor: '#e7e7e7',
    border: 'none',
    color: 'Black',
    padding: '1.5rem, 3.2rem',
    width: '20rem',
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: '5.5rem'
  },
  cancel: {
    backgroundColor: '#e7e7e7',
    border: 'none',
    color: 'Black',
    padding: '1.5rem, 3.2rem',
    width: '20rem',
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: '5.5rem'
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

  handleColorChange(newColor) { 
    // console.log(newColor.hex);
    this.setState({color: newColor.hex});
    s.modalMain.backgroundColor = newColor;
  };

  render() {
    return (
      <div style={s.modal}>
        <section style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          position: 'fixed',
          background: 'grey',
          width: '80%',
          height: '80%',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          textAlign: 'center',
          // borderStyle: 'solid',
          // borderWidth: '2rem',
          // borderColor: this.state.color,
          fontSize: '4rem',
          color: 'black'
        }}>
          <div style={{'backgroundColor':`${this.state.color}`}}>
            <input
              type='text'
              className='actName'
              required
              value={this.state.name}
              onChange={this.handleNameChange.bind(this)}
            />
          </div>
          <div style={s.colorBlock}>
              <CirclePicker onChangeComplete={this.handleColorChange.bind(this)} width='85vw' circleSpacing='20'/>
          </div>
          <div style={s.buttons}>
            <div>
              <button style={s.save} onClick={() => {
                this.props.updateAct(this.props.id, this.state.name, this.state.color);
                this.props.handleClose();
              }}>
                Save
              </button>
            </div>
            <div>
              <button style={s.cancel} onClick={() => this.props.handleClose()}>Cancel</button>
            </div>
          </div>
        </section>
      </div>
    )
  };
}

export default TaskEditModal;