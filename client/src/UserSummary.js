import React, { Component } from 'react';
import './App.css';


class UserSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childProp:""
    }
  }



  render() {

    return (
      <div className="UserSummaryWrapper">
        <p>UserSummary Page</p>
      </div>
    );
  }
}
export default UserSummary;
