import React, { Component } from 'react';
import './App.css';


class UserBarGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childProp:""
    }
  }



  render() {

    return (
      <div className="UserBarGraphWrapper">
        <p>UserBarGraph Page</p>
      </div>
    );
  }
}
export default UserBarGraph;
