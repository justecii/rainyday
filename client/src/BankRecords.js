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
      <div className="BankRecordsWrapper  " onscroll='myFunction() '>
        <p>BankRecords Page</p>
        <InputBankRecords user={user}/>


        <div className="row movepage notmoving">


            <ul onClick={this.change}>
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
