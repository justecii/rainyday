import React, { Component } from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, VerticalBarSeries} from 'react-vis';
import $ from 'jquery';

class UserBarGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data1:[
      { x:'Sample A', y: 10},
      { x:'Sample B', y: 9},
      { x:'C', y: 4},

      ],
      data2:[
      { x:'Sample A', y: 5},
      { x:'Sample B', y: 3},
      ],
      toolTipValue:{
        toolTipValue:{
        category:'empty',
        amount:0,
      }
      }
    }
  }

  componentDidMount() {
    $('.barTooltip').hide();
    var merr = $('.userBarGraphWrapper');
  }

  componentWillReceiveProps(nextProps) {
    var range1 = nextProps.barDataRange1;
    var range2 = nextProps.barDataRange2;
    // console.log(range1, range2)
    this.setState({
      data1: range1,
      data2: range2
    })
  }

  showToolTip(e,info){
    // console.log(info.event.target);
    let cssVal={};
    cssVal = {'left':(info.event.target.getAttribute('x')),'top':(info.event.target.getAttribute('y'))+400};
    this.setState({
      toolTipValue:{
        category: e.x,
        amount: e.y,
      }
    })
  }

  hideToolTip(e){
    $('.barTooltip').hide();
    this.setState({
      toolTipValue:{
        category:'empty',
        amount:0,
      }
    })
  }

  render() {
    return (
      
      <div className="UserBarGraphWrapper">
        <div className="barTooltip">
          <p>{this.state.toolTipValue.category}</p>
          <p>{this.state.toolTipValue.amount}</p>
        </div>
        <XYPlot height={400} width={800} xType={'ordinal'}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <VerticalBarSeries 
            data={this.state.data1}
            onValueMouseOver={(e,info)=>{this.showToolTip(e,info)}}
            onValueMouseOut={(e)=>{this.hideToolTip(e)}}
          />
          <VerticalBarSeries 
            data={this.state.data2}
            onValueMouseOver={(e,info)=>{this.showToolTip(e,info)}}
            onValueMouseOut={(e)=>{this.hideToolTip(e)}}
          />
         
        </XYPlot>
      </div>
    );
  }
}
export default UserBarGraph;