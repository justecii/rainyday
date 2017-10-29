import React, { Component } from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, ArcSeries} from 'react-vis';
import $ from 'jquery';


class UserPieCharts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catAmt:[{ //be an array yo
          category: 'Bills',
          amount: 10
        }],
      pieData: [{angle0: 0, angle: Math.PI*2, opacity: 0.2, radius: 75, radius0: 0}],
      toolTipValue:{
        Category:'empty',
        Amount:0,
        Percent:0
      },
      width: 315,
      height:315
    }
  }

  componentDidMount() {
    $('.tooltip').hide();
  }

  componentWillReceiveProps(nextProps) {
    var pieProps = nextProps.pieData;
    // console.log("pieProps", pieProps)
    this.setState({
      pieData: pieProps
    })
  }


  showToolTip(e,info){
    console.log(info.event.pageX,info.event.pageY)
    let cssVal={};
    if (e.x>0 && e.y>0){
      cssVal = {'left':(info.event.pageX),'top':(info.event.pageY)};
    } else if (e.x>0 && e.y<0){
      cssVal = {'left':(info.event.pageX),'bottom':(info.event.pageY)};
    } else if (e.x<0 && e.y<0){
      cssVal = {'right':(info.event.pageX),'bottom':(info.event.pageY)};
    } else if (e.x<0 && e.y>0){
      cssVal = {'right':(info.event.pageX),'top':(info.event.pageY)};
    }

    $('.tooltip').css(cssVal).show();
    this.setState({
      toolTipValue:{
        category: e.category,
        amount: e.amount,
        percent: e.percent
      }
    })
  }

  hideToolTip(e){
    $('.tooltip').hide();
    // this.setState({
    //   toolTipValue:{
    //     Category:'empty',
    //     Amount:0,
    //     Percent:0
    //   }
    // })
  }

  render() {
    // console.log("PIE CHART STATE", this.state)
    return (
      <div className="UserPieChartsWrapper">
        <p>User Pie Charts Component</p>
        <div className="tooltip">
            <p>{this.state.toolTipValue.category}</p>
            <p>${this.state.toolTipValue.amount}</p>
            <p>{this.state.toolTipValue.percent*100}%</p>
        </div>
        <XYPlot
          xDomain={[0, 6]}
          yDomain={[0, 6]}
          width={this.state.width}
          height={this.state.height}>
          <ArcSeries
            animation
            radiusType={'literal'}
            center={{x: 3, y: 3}}
            data={this.state.pieData}
            colorType={'literal'}
            onValueMouseOver={(e,info)=>{this.showToolTip(e,info)}}
            onValueMouseOut={(e)=>{this.hideToolTip(e)}}
          />      
        </XYPlot>
      </div>
    );
  }
}
export default UserPieCharts;
