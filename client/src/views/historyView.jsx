import React from 'react';
import PieChart from '../components/legacy/PieChart.jsx';
const s = {
  wrap: {
    overflowY: 'auto',
    itemAlign: 'center',
    height: '98vh' //FIXME
  },
}
class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'Doughnut'
    };
    this.changeView.bind(this);
  }

  changeView(page) {
    console.log(`VIEW_CHANGED: ${page}`);
    this.setState({view: page});
  }

  // dynamicPage() {
  //   switch(this.state.view) {
  //     case 'Pie': 
  //       return (
  //         <PieChart 
  //           changeView={this.changeView.bind(this)}
  //           getActInfo={this.props.getActInfo} 
  //           userHistory={this.props.userHistory} 
  //           view={'Pie'}
  //         />
  //       );
  //       case 'Doughnut': 
  //       return (
  //         <PieChart 
  //           changeView={this.changeView.bind(this)}
  //           getActInfo={this.props.getActInfo} 
  //           userHistory={this.props.userHistory} 
  //           view={'Doughnut'}
            
  //         />
  //       );
  //       case 'Bar': 
  //       return (
  //         <PieChart 
  //           changeView={this.changeView.bind(this)}
  //           getActInfo={this.props.getActInfo} 
  //           userHistory={this.props.userHistory} 
  //           view={'Bar'}
  //         />
  //       );
  //   }
  // }
  render() {
    return(
      <div style={s.wrap}>
            <ul style={{textAlign: 'center'}}>
              <button><a onClick={() => this.changeView('Pie')}>Pie</a></button>
              <button><a onClick={() => this.changeView('Doughnut')}>Doughnut</a></button>
              <button><a onClick={() => this.changeView('Bar')}>Bar</a></button>
            </ul>
         <PieChart 
            changeView={this.changeView.bind(this)}
            getActInfo={this.props.getActInfo} 
            userHistory={this.props.userHistory} 
            view={this.state.view}
          />
      </div>
    )
  }
}

export default History;