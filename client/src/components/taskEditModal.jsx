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

const TaskEditModal = (props) => (
  <div>
    
  </div>
)

export default TaskEditModal;