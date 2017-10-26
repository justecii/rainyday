import React, { Component } from 'react';
import UserSummary from './UserSummary.js'
import UserPieCharts from './UserPieCharts.js'
import UserBarGraph from './UserBarGraph.js'
import './App.css';


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
    .then((response) => this.updateCatAmt(this.state.bankRecords))
  }

  updateCatAmt(){
    let newCatAmt=this.state.allCatAmt;
    // list of categories
    // amount per category
    // amount saved (isSavedTrue)
    // array of saved
    // amt by date
    // saved by date
    // sort dates

    this.state.bankRecords.forEach(function(record){
      if(record.Category!==undefined){
        newCatAmt.push({
          category: record.Category,
          amount: record.Amount
        });
      } else{
        newCatAmt.push({
          category: "uncategorized",
          amount: record.Amount
        });
      }
    });
    this.setState({
        allCatAmt: newCatAmt
      })
  }


  render() {
    console.log("USER DATA STATE", this.state)
    return (
      <div className="UserDataWrapper">
        <p>UserData Page</p>
        <UserSummary />
        <UserPieCharts />
        <UserBarGraph />
      </div>
    );
  }
}
export default UserData;
