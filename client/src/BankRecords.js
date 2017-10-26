import React, { Component } from 'react';
import InputBankRecords from './InputBankRecords.js'
import EditBankData from './EditBankData.js'
import './App.css';
import $ from 'jquery';

class BankRecords extends Component {
  constructor(props) {
    super(props);
    this.state = {
    user: {}
    }
    this.change = this.change.bind(this);
  }

  change(e) {
    console.log(this.state.records);
    console.log("user: ", this.state.user)
  }


  componentDidMount() {
    let user = this.props.user
    this.setState({
      user: user
    })
  }


  render() {
    let user = this.props.user
    console.log("user in client/BankRecords.js: ", user);
    console.log("this.state.user bankrecords: ", this.state.user);

    return (
      <div className="BankRecordsWrapper  "  >
        <p>BankRecords Page</p>
        <InputBankRecords user={user}/>


        <section className="row  " >
{/* movepage */}
   
            <ul id='' className='movepage' onClick={this.change}>
              <li className='col s3'>Date</li>
              <li className='col s3'>Description</li>
              <li className='col s3'>Amount</li>
              <li className='col s2'>Category</li>
            </ul>

            <ul id='tableLable' className='notmoving ' onClick={this.change}>
              <li className='col s3'>Date</li>
              <li className='col s3'>Description</li>
              <li className='col s3'>Amount</li>
              <li className='col s2'>Category</li>
            </ul>
<br/><br/>
       
        <div className='movepage '>


        <EditBankData user={user}/>
        </div>
        </section>
        
      </div>

     

     
    );
  }
}
export default BankRecords;
