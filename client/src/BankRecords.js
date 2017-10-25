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
      <div className="BankRecordsWrapper ">
        <p>BankRecords Page</p>
        <InputBankRecords />

       
        <div className="row movepage notmoving">
         

            <ul>
              <li className='col s3'>Date</li>
              <li className='col s3'>Description</li>
              <li className='col s3'>Amount</li>
              <li className='col s2'>Category</li>
            </ul>

         
        </div>
        <div className='movepage'></div>

        <EditBankData />
      </div>
    );
  }
}
export default BankRecords;
