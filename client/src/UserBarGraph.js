import React, { Component } from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, VerticalBarSeries, HorizontalBarSeries,DiscreteColorLegend,Hint} from 'react-vis';
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
      },
      height: 400,
      width: 850
      }
    }
  }

  componentDidMount() {
    $('.barTooltip').hide();
    var merr = $('.userBarGraphWrapper');
  }

  componentWillReceiveProps(nextProps) {
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
    this.setState({
      data1: range1,
      data2: range2,
      saved1: saved1,
      saved2: saved2,
      startDate1:nextProps.startDate1,
      endDate1:nextProps.endDate1,
      startDate2:nextProps.startDate2,
      endDate2:nextProps.endDate2,
    })
  }

  showToolTip(e,info){
    let cssVal={};
    cssVal = {'left':(info.event.pageX),'top':(info.event.pageY)};
    $('.barTooltip').css(cssVal).show();
    this.setState({
      toolTipValue:{
        category: e.x,
        amount: e.y,
      }
    })
  }

  hideToolTip(e){
    $('.barTooltip').hide();
  }

  render() {
    return (
      
      <div className="UserBarGraphWrapper">
        <div className="barTooltip">
          <p>{this.state.toolTipValue.category}</p>
          <p>{Math.round(this.state.toolTipValue.amount)}</p>
        </div>
        <div className="verticalBar">
          <DiscreteColorLegend
            style={{position: 'absolute'}}
            orientation="horizontal" 
            items={[
              {
                title: `Expenses  ${this.state.startDate1}  to ${this.state.endDate1}`,
                color: '#26a69a'
              },
              {
                title: `Expenses  ${this.state.startDate2}  to ${this.state.endDate2}`,
                color: '#3661B0'
              },
              {
                title: `Saved ${this.state.startDate1}  to ${this.state.endDate1}`,
                color: '#FF8E3A'
              },
              {
                title: `Saved ${this.state.startDate2}  to ${this.state.endDate2}`,
                color: '#FFBA3A'
              }
            ]}
          />
          <XYPlot 
            height={400} 
            width={850} 
            xType={'ordinal'}
            stackBy="y"
          >
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <VerticalBarSeries //first range expenses
              opacity={0.8}
              color={'#26a69a'}
              cluster="group1"
              data={this.state.data1}
              onValueMouseOver={(e,info)=>{this.showToolTip(e,info)}}
              onValueMouseOut={(e)=>{this.hideToolTip(e)}}
            />
            <VerticalBarSeries //second range expenses
              opacity={0.8}
              color={'#3661B0'}
              cluster="group2" 
              data={this.state.data2}
              onValueMouseOver={(e,info)=>{this.showToolTip(e,info)}}
              onValueMouseOut={(e)=>{this.hideToolTip(e)}}
            />
            <VerticalBarSeries //first range saved
              opacity={0.8}
              color={'#FF8E3A'}
              cluster="group1" 
              data={this.state.saved1}
              onValueMouseOver={(e,info)=>{this.showToolTip(e,info)}}
              onValueMouseOut={(e)=>{this.hideToolTip(e)}}
            />
            <VerticalBarSeries //second range saved
              opacity={0.8}
              color={'#FFBA3A'}
              cluster="group2" 
              data={this.state.saved2}
              onValueMouseOver={(e,info)=>{this.showToolTip(e,info)}}
              onValueMouseOut={(e)=>{this.hideToolTip(e)}}
            />
          </XYPlot>
        </div>
      </div>
    );
  }
}
export default UserBarGraph;

