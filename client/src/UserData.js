import React, { Component } from 'react';
import UserSummary from './UserSummary.js'
import UserPieCharts from './UserPieCharts.js'
import UserBarGraph from './UserBarGraph.js'
import './App.css';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

import { DateRangePicker, SingleDatePicker } from 'react-dates';


class UserData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bankRecords:[],
      catAmtRange1:[],
      catAmtSaved1:[],
      catAmtRange2:[],
      catAmtSaved2:[],
      dateAmtRange1:[],
      dateAmtRange2:[],
      pieDataFullRange:[],
      savedDataFullRange:[],
      startDate1: "7/23/17",
      endDate1:"8/31/17",
      startDate2: "9/1/17",
      endDate2: "11/30/17",
      pieRadius: 125,
      pieRadius0: 0,
    }
    this.makeUnique = this.makeUnique.bind(this);
    this.recordSoap = this.recordSoap.bind(this);
    this.consoliDate = this.consoliDate.bind(this);
    this.uniqueCatByRange = this.uniqueCatByRange.bind(this);
    this.uniqueDateByRange = this.uniqueDateByRange.bind(this);
    this.stringToDate = this.stringToDate.bind(this);
  }

  componentDidMount(){
    var startDate1 = this.state.startDate1
    var startDate2 = this.state.startDate2
    var endDate1 = this.state.endDate1
    var endDate2 = this.state.endDate2
    let user = this.props.user
    this.setState({
      user: user
    })
    fetch('/bankRecords/' + user)
    .then((response) => response.json())
    .then((response) => {this.updateLists(response,startDate1,endDate1,startDate2,endDate2,true)})
  }

  //returns an object with full range of dates for the data
  updateLists(bankRecords,startDate1,endDate1,startDate2,endDate2,firstLoad){
    
    //array of all records with a value for "date" and "category"
    let cleanBankRecords = this.recordSoap(bankRecords)

    // arrays of each type of record
    let expenseRecords=Array.from(this.splitBankRecTypes(cleanBankRecords).expense)
    let incomeRecords=Array.from(this.splitBankRecTypes(cleanBankRecords).income)
    let savedRecords=Array.from(this.splitBankRecTypes(cleanBankRecords).saved)
    let uncatRecords=Array.from(this.splitBankRecTypes(cleanBankRecords).uncategorized)

    // arrays of bankRecords by date range and type
    let expenseList1 = this.filterByRange(expenseRecords,startDate1,endDate1)  
    let expenseList2 = this.filterByRange(expenseRecords,startDate2,endDate2)
    let savedList1 = this.filterByRange(savedRecords,startDate1,endDate1)
    let savedList2 = this.filterByRange(savedRecords,startDate2,endDate2)
    let categoryListFullRange = this.uniqueCatByRange(cleanBankRecords,startDate1,endDate2) 
    let savedListFullRange = this.uniqueCatByRange(savedRecords,startDate1,endDate2)
    let categoryListAllRecords = this.uniqueCatByRange(cleanBankRecords,startDate1,endDate2) //maybe trash

    // arrays of dates sorted
    let allDates = this.uniqueDateByRange(cleanBankRecords,"1/1/00","12/31/99")
    let dateList1 = this.uniqueDateByRange(expenseRecords,startDate1,endDate1)
    let dateList2 = this.uniqueDateByRange(expenseRecords,startDate2,endDate2)
    allDates = this.sortDates(allDates)
    dateList1 = this.sortDates(dateList1)
    dateList2 = this.sortDates(dateList2)

    // arrays with category and amount given a time range
    let newCatAmtRange1 = this.makeCatAmt(categoryListFullRange,expenseList1) //expense records needs to be by date
    let newCatAmtRange2 = this.makeCatAmt(categoryListFullRange,expenseList2)
    let newCatAmtSaved1 = this.makeCatAmt(categoryListFullRange,savedList1)
    let newCatAmtSaved2 = this.makeCatAmt(categoryListFullRange,savedList2) //saved records needs to be by date range
    let newCatAmtFullRange = this.makeCatAmt(categoryListFullRange,expenseRecords) //for pie
    let newCatAmtSavedFullRange = this.makeCatAmt(savedListFullRange,savedRecords)

    //future development for line graph
    // let newDatAmtRange1 = this.makeDateAmt(dateList1,expenseRecords)
    // let newDatAmtRange2 = this.makeDateAmt(dateList2,expenseRecords)

    //arrays formatted for components
    let newPieDataFullRange = this.convertToPie(newCatAmtFullRange)
    let newBarDataRange1 = this.convertToBar(newCatAmtRange1)
    let newBarDataRange2 = this.convertToBar(newCatAmtRange2)
    let newBarDataSaved1 = this.convertToBar(newCatAmtSaved1)
    let newBarDataSaved2 = this.convertToBar(newCatAmtSaved2)
    if(this.state.bankRecords!==null && this.state.pieDataFullRange!==null && this.state.barDataRange1!==null && 
      this.state.barDataRange2!==null && this.state.barDataSaved1!==null & this.state.barDataSaved2!==null){
        if(firstLoad){ //on first load sets date range from first to last available date and separates at median
          this.setState({
            bankRecords: cleanBankRecords,
            pieDataFullRange:newPieDataFullRange,
            savedDataFullRange:newCatAmtSavedFullRange,
            barDataRange1:newBarDataRange1,
            barDataRange2:newBarDataRange2,
            barDataSaved1:newBarDataSaved1,
            barDataSaved2:newBarDataSaved2,
            startDate1:allDates[0],
            endDate1:allDates[Math.floor(allDates.length/2)],
            startDate2:allDates[Math.floor(allDates.length/2)+1],
            endDate2:allDates[allDates.length-1]
          })
        } else{
          this.setState({
            bankRecords: cleanBankRecords,
            pieDataFullRange:newPieDataFullRange,
            savedDataFullRange:newCatAmtSavedFullRange,
            barDataRange1:newBarDataRange1,
            barDataRange2:newBarDataRange2,
            barDataSaved1:newBarDataSaved1,
            barDataSaved2:newBarDataSaved2,
          })
        }
    }
  }


  //updates uncategorized records in bankData and consolidates date field
  //references consoliDate
  recordSoap(records){
    let updatebr = records;
    for(var i = 0; i< updatebr.length;i++){
      if(updatebr[i].Category===undefined || updatebr[i].Category===""){
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
  stringToDate(dateString){
    var parts =dateString.split('/');
    var mydate = new Date("20"+parts[2],parts[0]-1,parts[1]);
    return mydate;
  }

  //takes bankdata array, start date, and end date.  
  //returns an array of unique categories for that date range
  uniqueCatByRange(array,start,end){
    var a = array;
    var b = [];
    for(var i = 0;i<a.length;i++){
      if(this.stringToDate(a[i].date)>=this.stringToDate(start) && this.stringToDate(a[i].date)<=this.stringToDate(end)){
        var category=a[i].Category
        b.push(category)
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
      if(this.stringToDate(a[i].date)>=this.stringToDate(start) && this.stringToDate(a[i].date)<=this.stringToDate(end)){
        b.push(a[i].date)
      }
    }
    b = this.makeUnique(b)
    return b;
  }

  //takes bankdata array, start date, and end date.  
  //returns an array of bankdata arrays in that date range
  filterByRange(array,start,end){
    let a = array;
    let b = [];
    for(var i = 0;i<a.length;i++){
      if(this.stringToDate(a[i].date)>=this.stringToDate(start) && this.stringToDate(a[i].date)<=this.stringToDate(end)){
        b.push(a[i])
      }
    }
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
    //var CSS_COLOR_NAMES = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];
    var CSS_COLOR_NAMES = ["Aqua","Aquamarine",
    "Black","Blue","BlueViolet","Brown",
    "CadetBlue","Chartreuse","Coral",
    "Crimson","Cyan","DarkBlue","DarkCyan",
    "DarkGreen","DarkMagenta","Darkorange",
    "DarkOrchid","DarkSlateBlue","DarkTurquoise",
    "DeepPink","DeepSkyBlue","DimGray",
    "DodgerBlue","FireBrick","Fuchsia",
    "Gold",
    "IndianRed","Indigo",
    "LawnGreen","LightBlue","LightCoral","LightCyan",
    "LightGreen","LightPink","LightSalmon","LightSeaGreen",
    "LightSkyBlue",
    "Lime","LimeGreen","Maroon","MediumAquaMarine",
    "MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen",
    "MediumTurquoise","MediumVioletRed","MidnightBlue",
    "Olive","OliveDrab","Orange","OrangeRed","Orchid",
    "PaleGreen","PaleVioletRed",
    "Peru","Pink","Purple","Red","RoyalBlue",
    "Salmon","SkyBlue","SlateBlue",
    "Teal","Thistle","Tomato",
    "Turquoise","Yellow","YellowGreen"];
    
    // var CSS_COLOR_NAMES = ["Brown","CadetBlue","DarkCyan","DarkGoldenRod","DarkOliveGreen",
    // "DarkOrange","DarkOrchid","DarkRed","DarkSeaGreen","DarkSlateBlue","DarkSlateGrey",
    // "DarkTurquoise","Gold","IndianRed","LightSeaGreen",
    // "Maroon","MediumAquaMarine","MediumSeaGreen","MediumTurquoise","MidnightBlue","Olive",
    // "OliveDrab","Orange","OrangeRed","PaleGreen","Peru","RoyalBlue",
    // "Salmon","SeaGreen","SteelBlue","Tomato","Turquoise","YellowGreen"];
    for(var m = 0; m<dataArr.length;m++){//assigning radius, radius from state and color based on index
      dataArr[m].radius = this.state.pieRadius;
      dataArr[m].radius0 = this.state.pieRadius0;
      dataArr[m].opacity = 0.9;
      dataArr[m].color = CSS_COLOR_NAMES[Math.floor(Math.random()*CSS_COLOR_NAMES.length)];
      //CSS_COLOR_NAMES[Math.floor(Math.random()*CSS_COLOR_NAMES.length)]
      
    }
    return dataArr
  }

  convertToBar(catAmt){
    let dataArr = catAmt;
    for(var i = 0; i<dataArr.length;i++){
      var temp = dataArr[i];
      if(temp.category!==null && temp.category!==undefined){
        dataArr[i]={x:temp.category,y:temp.amount}
      } else {
        dataArr[i]={x:"",y:temp.amount}
      }
    }
    return dataArr
  }

  //accepts a bankRecords array and returns an object with 3 arrays...income, expense, saved, uncategorized
  splitBankRecTypes(bankRecords){
    var br = bankRecords;
    var income = [];
    var expense = [];
    var saved = [];
    var uncategorized = [];

    for(var i = 0; i< br.length;i++){
      if(br[i].isSaved){
        saved.push(br[i])
      } else if(br[i].Category==='Income' && !br.isSaved){
        income.push(br[i])
      } else if(br[i].Category==='uncategorized' && !br.isSaved){
        uncategorized.push(br[i])
      } else {
        expense.push(br[i])
      }
    }
    return {income:income,expense:expense,saved:saved,uncategorized:uncategorized}
  }

  sortDates(array){
    array.sort(function(a, b) {
      var dateA = new Date(a), dateB = new Date(b);
      return dateA - dateB;
    });
    return array;
  }


  render() {
    // console.log("USER DATA STATE", this.state)
    return (
      <div className="UserDataWrapper">
        
<<<<<<< HEAD
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
          this.setState({startDate2:start,endDate2:end},this.updateLists(this.state.bankRecords)
          )}} // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput2} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput2 => this.setState({ focusedInput2 })} // PropTypes.func.isRequired,
          isOutsideRange={() => false}
          withPortal={true}
        />
        <UserSummary />
        <UserPieCharts pieData={this.state.pieDataFullRange}/>
        {/* <UserBarGraph barDataRange1={this.state.barDataRange1} barDataRange2={this.state.barDataRange2}/> */}
=======
        <div className="row">
          <div className="col m6">
            <div className="col s6">
              <p>Start Date 1</p>
              <SingleDatePicker
                date={moment(this.state.startDate1)}
                onDateChange={(date) => {
                  var startDate1 = date.format("MM/DD/YY")
                  this.setState({startDate1:startDate1},
                    this.updateLists(this.state.bankRecords,startDate1,this.state.endDate1,this.state.startDate2,this.state.endDate2)
                )}}
                focused={this.state.focused1} // PropTypes.bool
                onFocusChange={({ focused }) => this.setState({ focused1:focused })} // PropTypes.func.isRequired
                isOutsideRange={() => false}
                withPortal={true}
                numberOfMonths={1}
              />
            </div>
            <div className="col s6">
              <p>End Date 1</p>
              <SingleDatePicker
                date={moment(this.state.endDate1)}
                onDateChange={(date) => {
                  var endDate1 = date.format("MM/DD/YY")
                  this.setState({endDate1:endDate1},
                    this.updateLists(this.state.bankRecords,this.state.startDate1,endDate1,this.state.startDate2,this.state.endDate2)
                )}}
                focused={this.state.focused2} // PropTypes.bool
                onFocusChange={({ focused }) => this.setState({ focused2: focused })} // PropTypes.func.isRequired
                isOutsideRange={() => false}
                withPortal={true}
                numberOfMonths={1}
              />
            </div>
          </div>
          <div className="col m6">
            <div className="col s6">
              <p>Start Date 2</p>
              <SingleDatePicker
                date={moment(this.state.startDate2)}
                onDateChange={(date) => {
                  var startDate2 = date.format("MM/DD/YY")
                  this.setState({startDate2:startDate2},
                    this.updateLists(this.state.bankRecords,this.state.startDate1,this.state.endDate1,startDate2,this.state.endDate2)
                )}}
                focused={this.state.focused3} // PropTypes.bool
                onFocusChange={({ focused }) => this.setState({ focused3: focused })} // PropTypes.func.isRequired
                isOutsideRange={() => false}
                withPortal={true}
                numberOfMonths={1}
              />
              </div>
              <div className="col s6">
              <p>End Date 2</p>
              <SingleDatePicker
                date={moment(this.state.endDate2)}
                // onDateChange={this.handleChangeDate} // PropTypes.func.isRequired
                onDateChange={(date) => {
                  var endDate2 = date.format("MM/DD/YY")
                  this.setState({endDate2:endDate2},
                    this.updateLists(this.state.bankRecords,this.state.startDate1,this.state.endDate1,this.state.startDate2,endDate2)
                )}}
                focused={this.state.focused4} // PropTypes.bool
                onFocusChange={({ focused }) => this.setState({ focused4: focused })} // PropTypes.func.isRequired
                isOutsideRange={() => false}
                withPortal={true}
                numberOfMonths={1}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col m6 s12">
            <UserSummary allExpenses={this.state.pieDataFullRange} allSaved={this.state.savedDataFullRange}/>
          </div>
          <div className="col m6 s12">
            <UserPieCharts pieData={this.state.pieDataFullRange}/>
          </div>
        </div>

          <UserBarGraph 
            barDataRange1={this.state.barDataRange1} 
            barDataRange2={this.state.barDataRange2}
            barDataSaved1={this.state.barDataSaved1}
            barDataSaved2={this.state.barDataSaved2}
          />
>>>>>>> 20f95289062eb4659571de61300566538066c1eb
      </div>
    );
  }
}



export default UserData;


 

 
