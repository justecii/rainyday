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
      bankRecords:[]
    }
  }

  componentDidMount(){
    fetch("/bankRecords")
    .then((response) => response.json())
    .then((response) => this.setState({bankRecords: response}))
    .then((response) => this.updateUncat(this.state.bankRecords))
  }

  updateUncat(){
    let newRecords=[];
    // list of categories
    // amount per category
    // amount saved (isSavedTrue)
    // array of saved
    // amt by date
    // saved by date
    // sort dates

    this.state.bankRecords.forEach(function(record){
      if(record.Category!==undefined && !record.isSaved){
        newRecords.push({
          category: record.Category,
          amount: record.Amount
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
