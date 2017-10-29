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


  showToolTip(data,e){
    console.log(data.x,data.y)
    var pagex = e.event.pageX
    var pagey = e.event.pageY
    var cssVal={'left':(pagex),'top':(pagey)};

    console.log("cssval",cssVal)
    $('.tooltip').css(cssVal).show();

    this.setState({
      toolTipValue:{
        category: data.category,
        amount: data.amount,
        percent: data.percent
      },
    })
  }


  hideToolTip(e){
    $('.tooltip').hide();
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
          xDomain={[-1, 1]}
          yDomain={[-1, 1]}
          width={this.state.width}
          height={this.state.height}>
          <ArcSeries
            animation
            radiusType={'literal'}
            center={{x: 0, y: 0}}
            data={this.state.pieData}
            colorType={'literal'}
            onValueMouseOver={(datapoint,event)=>{this.showToolTip(datapoint,event)}}
            onValueMouseOut={(e)=>{this.hideToolTip(e)}}
            onSeriesClick={(e)=>{console.log(e.event.target)}}
          />      
        </XYPlot>
      </div>
    );
  }
}
export default UserPieCharts;
