import React, { Component } from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, VerticalBarSeries,DiscreteColorLegend} from 'react-vis';
import $ from 'jquery';

class UserBarGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data1:[
      { x:'', y: 0},
      { x:'', y: 0},
      ],
      data2:[
      { x:'', y: 0},
      { x:'', y: 0},
      ],
      saved1:[
      { x:'', y: 0},
      { x:'', y: 0},
      ],
      saved2:[
      { x:'', y: 0},
      { x:'', y: 0},
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
    console.log("props yo",nextProps)
    if(nextProps.barDataRange1!==null || nextProps.barDataRange1!==undefined){
      var range1 = nextProps.barDataRange1;
    }
    if(nextProps.barDataRange2!==null || nextProps.barDataRange2!==undefined){
      var range2 = nextProps.barDataRange2;
    }
    if(nextProps.barDataSaved1!==null || nextProps.barDataSaved1!==undefined){
      var saved1 = nextProps.barDataSaved1;
    }
    if(nextProps.barDataSaved2!==null || nextProps.barDataSaved2!==undefined){
      var saved2 = nextProps.barDataSaved2;
    }
    // console.log(range1, range2)
    this.setState({
      data1: range1,
      data2: range2,
      saved1: saved1,
      saved2: saved2
    })
  }

  showToolTip(e,info){
    // console.log(info.event.target);
    let cssVal={};
    cssVal = {'left':(info.event.pageX),'top':(info.event.pageY)};
    $('.barTooltip').css(cssVal).show();
    this.setState({
      toolTipValue:{
        category: e.x,
        amount: e.y,
      }
    })
    console.log(e)
  }

  hideToolTip(e){
    $('.barTooltip').hide();
    // this.setState({
    //   toolTipValue:{
    //     category:'empty',
    //     amount:0,
    //   }
    // })
  }

  render() {
    console.log("BAR GRAPH STATE", this.state)
    return (
      
      <div className="UserBarGraphWrapper">
        <div className="barTooltip">
          <p>{this.state.toolTipValue.category}</p>
          <p>{this.state.toolTipValue.amount}</p>
        </div>
        <XYPlot 
          height={400} 
          width={800} 
          xType={'ordinal'}
          stackBy="y"
        >
          <DiscreteColorLegend
            style={{position: 'absolute', left: '200px', top: '0px'}}
            orientation="horizontal" 
            items={[
              {
                title: 'Apples',
                color: '#12939A'
              },
              {
                title: 'Oranges',
                color: '#79C7E3'
              }
            ]}
          />
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <VerticalBarSeries //first range expenses
            cluster="group1"
            data={this.state.data1}
            onValueMouseOver={(e,info)=>{this.showToolTip(e,info)}}
            onValueMouseOut={(e)=>{this.hideToolTip(e)}}
          />
          <VerticalBarSeries //second range expenses
            cluster="group2" 
            data={this.state.data2}
            onValueMouseOver={(e,info)=>{this.showToolTip(e,info)}}
            onValueMouseOut={(e)=>{this.hideToolTip(e)}}
          />
          <VerticalBarSeries //first range saved
            cluster="group1" 
            data={this.state.saved1}
            onValueMouseOver={(e,info)=>{this.showToolTip(e,info)}}
            onValueMouseOut={(e)=>{this.hideToolTip(e)}}
          />
          <VerticalBarSeries //second range saved
            cluster="group2" 
            data={this.state.saved2}
            onValueMouseOver={(e,info)=>{this.showToolTip(e,info)}}
            onValueMouseOut={(e)=>{this.hideToolTip(e)}}
          />
         
        </XYPlot>
      </div>
    );
  }
}
export default UserBarGraph;