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
      startDate1: "",
      endDate1:"",
      startDate2: "",
      endDate2: ""
    }
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
    .then((response) => {
      var newbr = this.consoliDate(this.state.bankRecords);
      this.setState({bankRecords:newbr})
    })
  }

  updateUncat(){
    let newRecords=[];
    this.state.bankRecords.forEach(function(record){
      if(record.Category!==undefined && !record.isSaved){
        newRecords.push({
          category: record.Category,
          amount: record.Amount,
        });
      } else if(record.Category===undefined && !record.isSaved){
        newRecords.push({
          category: "uncategorized",
          amount: record.Amount
        });
      }
    });
    this.setState({
        allCatAmt: newRecords
      })
  }

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
      console.log(array[i])
    }
      // console.log("###TransDate###",record.TransDate)
      // console.log("###PostedDate###",record.PostedDate)
      // console.log("###Date###",record.Date)
    console.log(updated);
    return updated;
  }

  uniqueCatByRange(array,start,end){
    let a = array;
    let b = [];
    a.forEach(function(rec){
      ///need date first
    })
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
