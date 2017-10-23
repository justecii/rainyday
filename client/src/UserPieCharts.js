import React, { Component } from 'react';
import './App.css';


class UserPieCharts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childProp:""
    }
  }



  render() {

    return (
      <div className="UserPieChartsWrapper">
        <p>UserPieCharts Page</p>
      </div>
    );
  }
}
export default UserPieCharts;
