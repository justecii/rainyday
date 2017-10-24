import React, { Component } from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, VerticalBarSeries} from 'react-vis';


class UserPieCharts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pieData:{
        Bills: 10,
        Groceries: 10,
        Transportation: 10,
        Entertainment: 10,
        Clothes: 10,
        DiningOut: 10,
        Vices: 10,
        Debt: 10,
        Housing: 5,
        Savings: 5,
        Health: 5,
        Miscellaneous: 5
      }
    }
  }



  render() {

    return (
      <div className="UserPieChartsWrapper">
        <p>User Pie Charts Page</p>
      </div>
    );
  }
}
export default UserPieCharts;
