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
      startDate1: "07/24/17",
      endDate1:"08/31/17",
      startDate2: "09/01/17",
      endDate2: "10/19/17"
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
    .then((response) => {

      var cleanBankRecords = this.recordSoap(response)
      var categoryList1 = this.uniqueCatByRange(cleanBankRecords,this.state.startDate1,this.state.endDate1)
      var categoryList2 = this.uniqueCatByRange(cleanBankRecords,this.state.startDate2,this.state.endDate2)
      var dateList1 = this.uniqueDateByRange(cleanBankRecords,this.state.startDate1,this.state.endDate1)
      var dateList2 = this.uniqueDateByRange(cleanBankRecords,this.state.startDate2,this.state.endDate2)
      var newCatAmtRange1 = this.makeCatAmt(categoryList1,cleanBankRecords)
      var newCatAmtRange2 = this.makeCatAmt(categoryList2,cleanBankRecords)
      var newDatAmtRange1 = this.makeDateAmt(dateList1,cleanBankRecords)
      var newDatAmtRange2 = this.makeDateAmt(dateList2,cleanBankRecords)
      this.setState({
        bankRecords: cleanBankRecords,
        catAmtRange1:newCatAmtRange1,
        catAmtRange2:newCatAmtRange2,
        dateAmtRange1:newDatAmtRange1,
        dateAmtRange2:newDatAmtRange2,
      })
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
          onDatesChange={({startDate,endDate}) => this.setState({startDate1:startDate,endDate1:endDate})} // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          isOutsideRange={() => false}
          withPortal={true}
        />
        <p>Second Date Range</p>
        <DateRangePicker
          startDate={moment(this.state.startDate2)} // momentPropTypes.momentObj or null,
          endDate={moment(this.state.endDate2)} // momentPropTypes.momentObj or null,
          onDatesChange={({startDate,endDate}) => this.setState({startDate2:startDate,endDate2:endDate})} // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          isOutsideRange={() => false}
          withPortal={true}
        />
        <UserSummary />
        <UserPieCharts catAmt={this.state.catAmtRange1}/>
        <UserBarGraph />
      </div>
    );
  }
}

 

export default UserData;
