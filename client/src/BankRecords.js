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
        <table className="highlight centered responsive-table row">
          <thead>
            <tr>
              <th className='col s3'>Date</th>
              <th className='col s3'>Description</th>
              <th className='col s3'>Amount</th>
              <th className='col s2'>Category</th>
            </tr>
          </thead>
        </table>
        <EditBankData />
      </div>
    );
  }
}
export default BankRecords;
