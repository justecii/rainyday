import React, { Component } from 'react';
import './App.css';


class InputBankRecords extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childProp:""
    }
  }



  render() {

    return (
      <div className="InputBankRecordsWrapper">
        <p>Input Bank Records Page</p>
      </div>
    );
  }
}
export default InputBankRecords;
