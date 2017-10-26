import React, { Component } from 'react';
import InputBankRecords from './InputBankRecords.js'
import EditBankData from './EditBankData.js'
import './App.css';


class BankRecords extends Component {
  constructor(props) {
    super(props);
    this.state = {
    user: {}
    }
  }



  render() {
    let user = this.props.user
    console.log("user2: ", user);

    return (
      <div className="BankRecordsWrapper ">
        <p>BankRecords Page</p>
        <InputBankRecords user={user}/>


        <div className="row movepage notmoving">


            <ul>
              <li className='col s3'>Date</li>
              <li className='col s3'>Description</li>
              <li className='col s3'>Amount</li>
              <li className='col s2'>Category</li>
            </ul>


        </div>
        <div className='movepage'></div>

        <EditBankData user={user}/>
      </div>
    );
  }
}
export default BankRecords;
