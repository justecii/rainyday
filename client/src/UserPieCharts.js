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
        Percent:0,
      },
      width: 315,
      height:315,
      startDate1:"1/1/00",
      endDate2:"12/31/99"
    }
  }

  componentDidMount() {
    $('.tooltip').hide();
  }

  componentWillReceiveProps(nextProps) {
    var pieProps = nextProps.pieData;
    var startDate1 = nextProps.startDate1;
    var endDate2 = nextProps.endDate2;
    this.setState({
      pieData: pieProps,
      startDate1: startDate1,
      endDate2: endDate2
    })
  }


  showToolTip(data,e){
    var pagex = e.event.pageX
    var pagey = e.event.pageY
    var cssVal={'left':(pagex),'top':(pagey)};
    $('.tooltip').css(cssVal).show();

    this.setState({
      toolTipValue:{
        category: data.category,
        amount: data.amount,
        percent: data.percent,
        color:data.color
      },
    })
  }


  hideToolTip(e){
    $('.tooltip').hide();
  }

  render() {
    // console.log("sup",this.props)
    return (
      <div className="UserPieChartsWrapper center-align">
        <h4>Spending from </h4>
        <h6>{this.state.startDate1} to {this.state.endDate2}</h6>
        <div className="tooltip">
            <p>{this.state.toolTipValue.category}</p>
            <p>${Math.round(this.state.toolTipValue.amount)}</p>
            <p>{Math.round(this.state.toolTipValue.percent*100)}%</p>
        </div>
        <div className="col s12 center-align">
          <XYPlot
            xDomain={[-1, 1]}
            yDomain={[-1, 1]}
            width={this.state.width}
            height={this.state.height}
            style={{display:'block',margin:'auto'}}
          >
            <ArcSeries
              animation
              radiusType={'literal'}
              center={{x: 0, y: 0}}
              data={this.state.pieData}
              colorDomain={[0,Math.round(this.state.pieData.length/2)*2,this.state.pieData.length]}
              colorRange={['#8CA9B5','#EFC850','#D04448']}
              colorType={'literal'}
              onValueMouseOver={(datapoint,event)=>{this.showToolTip(datapoint,event)}}
              onValueMouseOut={(e)=>{this.hideToolTip(e)}}
            />      
          </XYPlot>
        </div>
      </div>
    );
  }
}
export default UserPieCharts;
