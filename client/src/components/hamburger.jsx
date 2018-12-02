import React from 'react';

// const s = {
//   menuToggle: {
//     display: 'block',
//     position: 'relative',
//     top: '5rem',
//     left: '5rem',
//     zIndex: 1,
//     userSelect: 'none'
//   },
//   menuToggleInput: {
//     display: 'block',
//     width: '4rem',
//     height: '3.2rem',
//     position: 'aboslute',
//     top: '-0.7rem',
//     left: '0.5rem',
//     curser: 'pointer',
//     opacity: 0,
//     zIndex: 2
//   },
//   menuToggleSpan: {
//     display: 'block',
//     width: '3.3rem',
//     height: '4rem',
//     marginBottom: '0.5rem',
//     position: 'relative',
//     background: '#cdcdcd',
//     borderRadius: '3px',
//     zIndex: 1,
//     transformOrigin: '0.4rem, 0rem',
//     transition:
//       'transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),' +
//       'background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),' +
//       'opacity 0.55s ease'
//   }

// }

const Hamburger = (props) => (
  <nav role="navigation">
    <div id="menuToggle">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      <ul id="menu">
        <li><button onClick={}>Track</button></li>
        <li><button>Hist</button></li>
        <li><button>Set</button></li>
        <li><button>other</button></li>
      </ul>
    </div>
  </nav>
)

export default Hamburger;