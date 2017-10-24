import React, { Component } from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, VerticalBarSeries} from 'react-vis';


class UserBarGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: [
        {x: 0, y: 8},
        {x: 1, y: 5},
        {x: 2, y: 4},
        {x: 3, y: 9},
        {x: 4, y: 1},
        {x: 5, y: 7},
        {x: 6, y: 6},
        {x: 7, y: 3},
        {x: 8, y: 2},
        {x: 9, y: 2},
      ],
      data2: [
        {x: 0, y: 3},
        {x: 1, y: 5},
        {x: 2, y: 6},
        {x: 3, y: 9},
        {x: 4, y: 4},
        {x: 5, y: 7},
        {x: 6, y: 1},
        {x: 7, y: 1},
        {x: 8, y: 3},
        {x: 9, y: 3}
      ]
    }
  }

  render() {
    return (
      <div className="UserBarGraphWrapper">
        <XYPlot height={300} width={400}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <VerticalBarSeries data={this.state.data1}/>
          <VerticalBarSeries data={this.state.data2}/>
        </XYPlot>
      </div>
    );
  }
}
export default UserBarGraph;