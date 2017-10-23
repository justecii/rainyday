import React, { Component } from 'react';
import InputBankRecords from './InputBankRecords.js'
import EditBankData from './EditBankData.js'
import './App.css';


class BankRecords extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childProp:""
    }
  }



  render() {

    return (
      <div className="BankRecordsWrapper">
        <p>BankRecords Page</p>
        <InputBankRecords />
        <EditBankData />
      </div>
    );
  }
}
export default BankRecords;
