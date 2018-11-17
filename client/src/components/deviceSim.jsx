import React from 'react'

const DeviceSim = (props) => (
  <div>
    <select>
      <option value="0">Face 0</option>
      <option value="1">Face 1</option>
      <option value="2">Face 2</option>
      <option value="3">Face 3</option>
      <option value="4">Face 4</option>
      <option value="5">Face 5</option>
      <option value="6">Face 6</option>
      <option value="7">Face 7</option>
    </select>
    <input type="submit"  onClick={props.startTimer}/>
    <input type="submit" value="Stop" onClick={() => props.stopTimer()}/>
  </div>
);

export default DeviceSim;