import React, { Component } from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, ArcSeries} from 'react-vis';


class UserPieCharts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      propData:[{ //be an array yo
          category: 'Bills',
          amount: 10
        },{
          category: 'Groceries',
          amount: 10
        },{
          category: 'Transportation',
          amount: 10
        },{
          category: 'Entertainment',
          amount: 10
        },{
          category: 'Clothes',
          amount: 10
        },{
          category: 'Dining Out',
          amount: 10
        },{
          category: 'Vices',
          amount: 10
        },{
          category: 'Debt',
          amount: 10
        },{
          category: 'Housing',
          amount: 5
        },{
          category: 'Savings',
          amount: 5
        },{
          category: 'Health',
          amount: 5
        },{
          category: 'Miscellaneous',
          amount: 5
        }],
      myData: [
        {angle0: 0, angle: Math.PI / 4, opacity: 0.2, radius: 50, radius0: 0, color:1},
        {angle0: Math.PI / 4, angle: 2 * Math.PI / 4, radius: 50, radius0: 0, color:2},
        {angle0: 2 * Math.PI / 4, angle: 3 * Math.PI / 4, radius: 50, radius0: 0, color:3},
        {angle0: 3 * Math.PI / 4, angle: 4 * Math.PI / 4, radius: 50, radius0: 0, color:4},
        {angle0: 4 * Math.PI / 4, angle: 5 * Math.PI / 4, radius: 50, radius0: 0, color:5},
        {angle0: 0, angle: 5 * Math.PI / 4, radius: 1.1, radius0: 0.8, color:6}
      ],
      data: [],
      radius: 75,
      radius0: 0,

    }
  }

  componentDidMount() {
    //calculate total amount
    //calculate % and radians
    //calculate starting radians i.e. angle0
    let dataArr = this.state.propData
    let total = 0;

    for(var i = 0; i<dataArr.length;i++){ //calculates total amount spent
      total += dataArr[i].amount;
    }
    for(var j = 0; j<dataArr.length;j++){ //assigns a % of total for each category
      dataArr[j].percent = dataArr[j].amount/total;
    }
    for(var k = 0; k<dataArr.length;k++){ //converts % to radians
      dataArr[k].angle = dataArr[k].percent*2*Math.PI;
    }
    dataArr[0].angle0 = 0;//first slice starts at 0 degrees
    for(var l = 1; l<dataArr.length;l++){ //each angle starts where the last one left off
      dataArr[l].angle0 = dataArr[l-1].angle0 + dataArr[l-1].angle;
    }
    for(var m = 0; m<dataArr.length;m++){//assigning radius, radius from state and color based on index
      dataArr[m].radius = this.state.radius;
      dataArr[m].radius0 = this.state.radius0;
      dataArr[m].color = 5*(dataArr[m].angle0/(2*Math.PI));
    }
    this.setState({
      myData:dataArr
    })
  }

  render() {
    console.log("PIE CHART STATE", this.state)
    return (
      <div className="UserPieChartsWrapper">
        <p>User Pie Charts Page</p>
        <XYPlot
          xDomain={[-5, 5]}
          yDomain={[-5, 5]}
          width={300}
          height={300}>
          <ArcSeries
            animation
            radiusType={'literal'}
            center={{x: -2, y: 2}}
            data={this.state.myData}
            colorDomain={[0, 1, 5]} 
            colorRange={['#f2f2f2', '#pink', 'blue']} 
            colorType={'linear'}/>
        </XYPlot>
      </div>
    );
  }
}
export default UserPieCharts;
