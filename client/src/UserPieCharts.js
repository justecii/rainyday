import React, { Component } from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, ArcSeries} from 'react-vis';
import $ from 'jquery';


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
        {angle0: 0 * Math.PI / 4, angle: 1 * Math.PI / 4, opacity: 0.2, radius: 50, radius0: 0, color:'blue'},
        {angle0: 1 * Math.PI / 4, angle: 2 * Math.PI / 4, radius: 50, radius0: 0, color:'red'},
        {angle0: 2 * Math.PI / 4, angle: 3 * Math.PI / 4, radius: 50, radius0: 0, color:'green'},
        {angle0: 3 * Math.PI / 4, angle: 4 * Math.PI / 4, radius: 50, radius0: 0, color:'yellow'},
        {angle0: 4 * Math.PI / 4, angle: 5 * Math.PI / 4, radius: 50, radius0: 0, color:'purple'},
        {angle0: 5 * Math.PI / 4, angle: 6 * Math.PI / 4, radius: 50, radius0: 0, color:'blue'}
      ],
      radius: 75,
      radius0: 0,
      toolTipValue:{
        Category:'empty',
        Amount:0,
        Percent:0
      },
      width: 400,
      height:400
    }
  }

  componentDidMount() {
    $('.tooltip').hide();
    let dataArr = this.state.propData
    let total = 0;

    for(var i = 0; i<dataArr.length;i++){ //calculates total amount spent
      total += dataArr[i].amount;
    }
    for(var j = 0; j<dataArr.length;j++){ //assigns a % of total for each category
      dataArr[j].percent = dataArr[j].amount/total;
    }
    dataArr[0].angle0 = 0;//first slice starts at 0 degrees
    for(var l = 1; l<dataArr.length;l++){ //each angle starts where the last one left off
      dataArr[l].angle0 = dataArr[l-1].angle0 + dataArr[l-1].percent*2*Math.PI;
    }
    for(var k = 0; k<dataArr.length;k++){ //converts % to radians
      dataArr[k].angle = dataArr[k].angle0 + dataArr[k].percent*2*Math.PI;
    }
    var CSS_COLOR_NAMES = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];
    for(var m = 0; m<dataArr.length;m++){//assigning radius, radius from state and color based on index
      dataArr[m].radius = this.state.radius;
      dataArr[m].radius0 = this.state.radius0;
      dataArr[m].opacity = 0.5;
      dataArr[m].color = CSS_COLOR_NAMES[Math.floor(Math.random()*CSS_COLOR_NAMES.length)];
    }
    this.setState({
      myData:dataArr
    })
  }

  showToolTip(e){
    let cssVal={};
    if (e.x>0 && e.y>0){
      cssVal = {'left':(e.x)+225,'top':(e.y*-1)+225};
    } else if (e.x>0 && e.y<0){
      cssVal = {'left':(e.x)+225,'top':(e.y*-1)+375};
    } else if (e.x<0 && e.y<0){
      cssVal = {'left':(e.x)+100,'top':(e.y*-1)+375};
    } else if (e.x<0 && e.y>0){
      cssVal = {'left':(e.x)+100,'top':(e.y*-1)+225};
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
    this.setState({
      toolTipValue:{
        Category:'empty',
        Amount:0,
        Percent:0
      }
    })
  }

  render() {
    // console.log("PIE CHART STATE", this.state)
    return (
      <div className="UserPieChartsWrapper">
        <p>User Pie Charts Page</p>
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
            data={this.state.myData}
            colorType={'literal'}
            onValueMouseOver={(e)=>{this.showToolTip(e)}}
            onValueMouseOut={(e)=>{this.hideToolTip(e)}}
          />      
        </XYPlot>
      </div>
    );
  }
}
export default UserPieCharts;
