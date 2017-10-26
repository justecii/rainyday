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
      allCatAmt:[],
      bankRecords:[],
      startDate1: "7/24/17",
      endDate1:"8/31/17",
      startDate2: "9/1/17",
      endDate2: "10/19/17"
    }
    this.isUnique = this.isUnique.bind(this);
    this.updateUncat = this.updateUncat.bind(this);
    this.consoliDate = this.consoliDate.bind(this);
    this.uniqueCatByRange = this.uniqueCatByRange.bind(this);
  }

  componentDidMount(){
    let user = this.props.user
    this.setState({
      user: user
    })
    fetch('/bankRecords/' + user)
    .then((response) => response.json())
    .then((response) => this.setState({bankRecords: response}))
    .then((response) => this.updateUncat(this.state.bankRecords))
    .then((response) => {this.setState({bankRecords:this.consoliDate(this.state.bankRecords)})})

  }

  componentDidUpdate(prevProps, prevState) {
    console.log("unique cat",this.uniqueCatByRange(this.state.bankRecords,this.state.startDate1,this.state.endDate1))
  }

  //updates uncategorized records in bankData and creates an array called allCatAmt with two values
  updateUncat(){
    let newCatAmt=[];
    let updatebr = this.state.bankRecords
    for(var i = 0; i< updatebr.length;i++){
      if(updatebr[i].Category!==undefined && !updatebr[i].isSaved){
        newCatAmt.push({
          category: updatebr[i].Category,
          amount: updatebr[i].Amount,
        });
      } else if(updatebr[i].Category===undefined && !updatebr[i].isSaved){
        updatebr[i].Category="uncategorized";
        newCatAmt.push({
          category: "uncategorized",
          amount: updatebr[i].Amount
        });
      }
    }
    this.setState({
        allCatAmt: newCatAmt,
        bankRecords: updatebr
      })
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

  //takes a category and bankData array
  //returns true if category does not exist in array...false if it does
  isUnique(cat,arr){
    var unique = false;
    arr.forEach(function(rec){
      // console.log(rec.Category)
      if(rec.Category===cat && unique===false){
        // console.log(false)
        // return false;
      } else if(rec.Category===cat && unique===true){
        // console.log(false)
        // return true;
      } else if(rec.Category!==cat){
        // console.log(true)
        return true;
      }
    })
  }

  //takes bankdata array, start date, and end date.  
  //returns an array of unique categories
  uniqueCatByRange(array,start,end){
    let a = array;
    let b = [];
    console.log(a)
    for(var i = 0;i<a.length;i++){

      if(a[i].date>=start && a[i].date<=end){

        if(this.isUnique(a[i].Category,array)===true){
          console.log("merffff")
          b.push(a[i].Category)

        }
        //if unique add to b
      }
    }
    return b;
  }

  handleDateChange(e){
    console.log(e.format("YYYY-MM-DD"))
    // this.setState({
    //   date:e.target.value
    // })
  }


  render() {
    console.log("USER DATA STATE", this.state)
    return (
      <div className="UserDataWrapper">
        <SingleDatePicker
               // momentPropTypes.momentObj or null
              onDateChange={(e) => this.handleDateChange( e )} // PropTypes.func.isRequired
              focused={this.state.focused} // PropTypes.bool
              onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
            />
        <p>UserData Page</p>
        <UserSummary />
        <UserPieCharts />
        <UserBarGraph />
      </div>
    );
  }
}
export default UserData;
