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
      { x:'Bills', y: 10},
      { x:'Groceries', y: 9},
      { x:'Transportation', y: 4},
      { x:'Entertainment', y: 10},
      { x:'Clothes', y: 6 },
      { x:'Dining Out', y: 10},
      { x:'Vices',y: 10},
      { x:'Debt',y: 10},
      { x:'Housing',y: 5},
      { x:'Savings',y: 5},
      { x:'Health',y: 5},
      { x:'Miscellaneous',y: 5}
      ],
      data2:[
      { x:'Bills', y: 5},
      { x:'Groceries', y: 3},
      { x:'Transportation', y: 4},
      { x:'Entertainment', y: 6},
      { x:'Clothes', y: 6 },
      { x:'Dining Out', y: 10},
      { x:'Vices',y: 7},
      { x:'Debt',y: 3},
      { x:'Housing',y: 1},
      { x:'Savings',y: 3},
      { x:'Health',y: 5},
      { x:'Miscellaneous',y: 4}
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
    console.log(merr.position(),merr.offset())
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