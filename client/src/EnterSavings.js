import React, { Component } from 'react';

import './App.css';


class EnterSavings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childProp:""
    }
  }



  render() {

    return (
      <div className="EnterSavingsWrapper">
        <p>Enter Savings Page</p>
      </div>
    );
  }
}
export default EnterSavings;
