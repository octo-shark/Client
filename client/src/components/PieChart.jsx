import React from 'react';
import ReactPieChart from 'react-svg-piechart';

class PieChart extends React.Component{
  constructor(props){
    super();
    this.state = {

    }
    this.data = [
      {title: "Time 1", value: 100, color: "#22594e"},
      {title: "Time 2", value: 60, color: "#2f7d6d"}, 
      {title: "Time 3", value: 30, color: "#3da18d"},
      {title: "Time 4", value: 20, color: "#69c2b0"},
      {title: "Time 5", value: 10, color: "#a1d9ce"},
    ]

  }
  render(){
    return (
      <div>
      <ReactPieChart
        data={this.data}
            // If you need expand on hover (or touch) effect
            expandOnHover
            // If you need custom behavior when sector is hovered (or touched)
  
        onSectorHover={(d, i, e) => {
          if (d) {
            console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
          } else {
            console.log("Mouse leave - Index:", i, "Event:", e)
            }
          }
        }
      />
      </div>
    )
  }

}

export default PieChart;