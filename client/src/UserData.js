import React, { Component } from 'react';
import UserSummary from './UserSummary.js'
import UserPieCharts from './UserPieCharts.js'
import UserBarGraph from './UserBarGraph.js'
import './App.css';


class UserData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childProp:""
    }
  }



  render() {

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
