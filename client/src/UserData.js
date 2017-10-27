import React, { Component } from 'react';
import UserSummary from './UserSummary.js'
import UserPieCharts from './UserPieCharts.js'
import UserBarGraph from './UserBarGraph.js'
import './App.css';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';

import { DateRangePicker, SingleDatePicker } from 'react-dates';


class UserData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bankRecords:[],
      catAmtRange1:[],
      catAmtRange2:[],
      dateAmtRange1:[],
      dateAmtRange2:[],
      pieDataFullRange:[],
      startDate1: "07/24/17",
      endDate1:"08/31/17",
      startDate2: "09/01/17",
      endDate2: "10/19/17",
      pieRadius: 75,
      pieRadius0: 0,
    }
    this.makeUnique = this.makeUnique.bind(this);
    this.recordSoap = this.recordSoap.bind(this);
    this.consoliDate = this.consoliDate.bind(this);
    this.uniqueCatByRange = this.uniqueCatByRange.bind(this);
    this.uniqueDateByRange = this.uniqueDateByRange.bind(this);
    this.stod = this.stod.bind(this);
  }

  componentDidMount(){
    let user = this.props.user
    this.setState({
      user: user
    })
    fetch('/bankRecords/' + user)
    .then((response) => response.json())
    .then((response) => {this.updateLists(response)})
  }

  updateLists(bankRecords){
    var cleanBankRecords = this.recordSoap(bankRecords)
    var categoryList1 = this.uniqueCatByRange(cleanBankRecords,this.state.startDate1,this.state.endDate1)
    var categoryList2 = this.uniqueCatByRange(cleanBankRecords,this.state.startDate2,this.state.endDate2)
    var categoryListFullRange = this.uniqueCatByRange(cleanBankRecords,this.state.startDate1,this.state.endDate2)
    var dateList1 = this.uniqueDateByRange(cleanBankRecords,this.state.startDate1,this.state.endDate1)
    var dateList2 = this.uniqueDateByRange(cleanBankRecords,this.state.startDate2,this.state.endDate2)
    var newCatAmtRange1 = this.makeCatAmt(categoryList1,cleanBankRecords)
    var newCatAmtRange2 = this.makeCatAmt(categoryList2,cleanBankRecords)
    var newCatAmtFullRange = this.makeCatAmt(categoryListFullRange,cleanBankRecords)
    var newDatAmtRange1 = this.makeDateAmt(dateList1,cleanBankRecords)
    var newDatAmtRange2 = this.makeDateAmt(dateList2,cleanBankRecords)
    var newPieDataFullRange = this.convertToPie(newCatAmtFullRange)
    this.setState({
      bankRecords: cleanBankRecords,
      catAmtRange1:newCatAmtRange1,
      catAmtRange2:newCatAmtRange2,
      dateAmtRange1:newDatAmtRange1,
      dateAmtRange2:newDatAmtRange2,
      pieDataFullRange:newPieDataFullRange
    })
  }


  //updates uncategorized records in bankData and consolidates date field
  //references consoliDate
  recordSoap(records){
    let updatebr = records;
    for(var i = 0; i< updatebr.length;i++){
      if(updatebr[i].Category===undefined && !updatebr[i].isSaved){
        updatebr[i].Category="uncategorized";
      }
    }
    updatebr = this.consoliDate(updatebr)
    return updatebr;
  }

  //takes bankData array and combines relevant dates into date key.  Returns new array.
  consoliDate(array){//you love this pun, you know it
    let updated = array;
    for(var i = 0; i<array.length;i++){
      if(array[i].date===undefined){
        if(array[i].TransDate===undefined){
          updated[i].date=array[i].PostedDate
        } else if(array[i].PostedDate===undefined){
          updated[i].date=array[i].TransDate
        }
      }
    }
    return updated;
  }

  //takes an array and returns an array with only unique values
  makeUnique(arr){
    var a = arr;
    var b = []
    b.push(a[0]);
    a.forEach(function(item,index){
      if(!b.includes(item)){
        b.push(item)
      }
    })
    return b;
  }

   //converts from string in form MM/DD/YY to date (post 2000 only)
  stod(dateString){
    var parts =dateString.split('/');
    var mydate = new Date("20"+parts[2],parts[0]-1,parts[1]);
    return mydate;
  }

  //takes bankdata array, start date, and end date.  
  //returns an array of unique categories for that date range
  uniqueCatByRange(array,start,end){
    let a = array;
    let b = [];
    for(var i = 0;i<a.length;i++){
      if(this.stod(a[i].date)>=this.stod(start) && this.stod(a[i].date)<=this.stod(end)){
        b.push(a[i].Category)
      }
    }
    b = this.makeUnique(b)
    return b;
  }

  //takes bankdata array, start date, and end date.  
  //returns an array of unique categories for that date range
  uniqueDateByRange(array,start,end){
    let a = array;
    let b = [];
    for(var i = 0;i<a.length;i++){
      if(this.stod(a[i].date)>=this.stod(start) && this.stod(a[i].date)<=this.stod(end)){
        b.push(a[i].date)
      }
    }
    b = this.makeUnique(b)
    return b;
  }

  //takes an array of unique categories and bankRecords array
  //returns an array of objects with categories and a sum of respective amounts
  makeCatAmt(unique,records){
    var catAmt = [];
    for(var i = 0; i<unique.length; i++){ //for each unique category
      var sum = 0;
      for(var j = 0; j<records.length; j++){ //go through the records and add to sum if categories match
        if(unique[i]===records[j].Category){
          sum += Math.abs(records[j].Amount)
        }
      }
      catAmt.push({category: unique[i],amount: sum}) //push an object with category and sum
    }
    return catAmt;
  }

  //takes an array of unique dates and bankRecords array
  //returns an array of objects with dates and a sum of respective amounts
  makeDateAmt(unique,records){
    var dateAmt = [];
    for(var i = 0; i<unique.length; i++){ //for each unique date
      var sum = 0;
      for(var j = 0; j<records.length; j++){ //go through the records and add to sum if dates match
        if(unique[i]===records[j].date){
          sum += Math.abs(records[j].Amount)
        }
      }
      dateAmt.push({date: unique[i],amount: sum}) //push an object with date and sum
    }
    return dateAmt;
  }

  convertToPie(catAmt){
    let dataArr = catAmt;
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
      dataArr[m].radius = this.state.pieRadius;
      dataArr[m].radius0 = this.state.pieRadius0;
      dataArr[m].opacity = 0.5;
      dataArr[m].color = CSS_COLOR_NAMES[Math.floor(Math.random()*CSS_COLOR_NAMES.length)];
    }
    return dataArr
  }



  handleDateChange(e){
    console.log("you just clicked this bro",e.startDate.format("MM/DD/YY"))
    // this.setState({
    //   date:e.target.value
    // })
  }


  render() {
    console.log("USER DATA STATE this is dumb ignore it", this.state)
    return (
      <div className="UserDataWrapper">
        
        <p>Make Toolbar for datepicker with directions</p>
        <p>First Date Range</p>
        <DateRangePicker
          startDate={moment(this.state.startDate1)} // momentPropTypes.momentObj or null,
          endDate={moment(this.state.endDate1)} // momentPropTypes.momentObj or null,
          onDatesChange={({startDate,endDate}) => {
            var start = startDate.format("MM/DD/YY")
            var end = endDate.format("MM/DD/YY")
          this.setState({startDate1:start,endDate1:end},this.updateLists(this.state.bankRecords)
          )}} // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput1} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput1 => this.setState({ focusedInput1 })} // PropTypes.func.isRequired,
          isOutsideRange={() => false}
          withPortal={true}
        />
        <p>Second Date Range</p>
        <DateRangePicker
          startDate={moment(this.state.startDate2)} // momentPropTypes.momentObj or null,
          endDate={moment(this.state.endDate2)} // momentPropTypes.momentObj or null,
          onDatesChange={({startDate,endDate}) => {
            var start = startDate.format("MM/DD/YY")
            var end = endDate.format("MM/DD/YY")
          this.setState({startDate1:start,endDate1:end},this.updateLists(this.state.bankRecords)
          )}} // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput2} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput2 => this.setState({ focusedInput2 })} // PropTypes.func.isRequired,
          isOutsideRange={() => false}
          withPortal={true}
        />
        <UserSummary />
        <UserPieCharts pieData={this.state.pieDataFullRange}/>
        <UserBarGraph />
      </div>
    );
  }
}

 

export default UserData;
