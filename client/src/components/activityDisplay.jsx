import React from 'react';

const s = {
  wrap: {
    display: 'grid',
    gridTemplateRows: 'repeat(auto, 3em)',
    padding: '1rem',
    gridGap: '1rem'
  }
}

const scrollTo = (element, to, duration) => {
  if (duration < 0) return;
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 2;

  setTimeout(function() {
    element.scrollTop = element.scrollTop + perTick;
    scrollTo(element, to, duration - 2);
  }, 10);
}


const ActivityDisplay = (props) => {
  return (
    <div style={s.wrap}>
      {props.activities.map(id => {
        let info = props.getActInfo(id);
        let faceStyle = {
          fontSize: '1.5em',
          border: 'none',
          height: '3em',
          overflow: 'hidden',
          background: info.color,
          color: 'white',
          textShadow: '1px 2px 0px rgba(0, 0, 0, 0.4)',
          WebkitBoxShadow: '0 4px 1px -1px rgba(0, 0, 0, 0.2)',
          MozBoxShadow: '0 4px 1px -1px rgba(0, 0, 0, 0.2)',
          boxShadow: '0 4px 1px -1px rgba(0, 0, 0, 0.2)'
        }
        if (props.curActivity === id) faceStyle.display = 'none'

        return (
          <button 
            style={faceStyle}
            key={`assignedAct ${id}`}
            onClick={() => {
              props.clickEvent(id);
              let element = document.getElementById('scrollDiv');
              if (element) scrollTo(element, 0, 20);
            }}>
            <div>{info.name}</div>
          </button>
        );
      })}
    </div>
  );
}

export default ActivityDisplay;
