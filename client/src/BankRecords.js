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
      <div className="BankRecordsWrapper  " onscroll='myFunction() '>
        <p>BankRecords Page</p>
        
        <InputBankRecords />

       
        <div className="row movepage  col s12  sticky-action ">
         

            <ul id="tableLable" className='notmoving #e0f7fa cyan lighten-5 z-depth-1 '>
              <li  className='col s3' >Date</li>
              <li className='col s3'>Description</li>
              <li className='col s3'>Amount</li>
              <li className='col s2'>Category</li>
            </ul>

         
        
        <div className='movepage content'></div>

        <EditBankData />
      </div>

     

      </div>
    );
  }
}
export default BankRecords;
