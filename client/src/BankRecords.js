import React, { Component } from 'react';
import InputBankRecords from './InputBankRecords.js'
import EditBankData from './EditBankData.js'
import './App.css';
import $ from 'jquery';
import axios from 'axios';
var Papa = require('papaparse');

class BankRecords extends Component {
  constructor(props) {
    super(props);
    this.state = {
    user: {},
    records: []
    }
    this.change = this.change.bind(this);
    this.papaData = this.papaData.bind(this);
    this.handleCategChange = this.handleCategChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  change(e) {
    console.log(this.state.records);
    console.log("user: ", this.state.user)
  }

  papaData(uploaded) {
    console.log("papaData in BankRecords: ", uploaded);
    // let user = this.state.user
    console.log("user in PAPADATA: ", uploaded.user);
    // console.log("this.state.user in papaData: ", this.state.user);
    let user = uploaded.user;
    let a = this;
    let data;
    let papaParse = Papa.parse(uploaded, {
      header: true,
      delimiter: ",",
      complete( result, file ) {
        console.log("result: ", result);
        data = result.data;
        console.log("data1: ", data);
        data.forEach(function(item) {
          item.userId = user
          item.isSaved = false
        })

        // data.map(id => id.userId = user);
        // // console.log("data userId: ", data);
        // data.map(saved => saved.isSaved = false)
        // // console.log("data isSaved: ", data);

        console.log("data2: ", data);
        axios.post('/bankRecords', {
          data: data
        }).then(function (response) {
          console.log("response: ", response);
        }).catch(function (error) {
          console.log("error: ", error)
        })
        a.setState({
          records: data
        })
      } })
  }

  handleDelete(i) {
    let currentState = this.state.records;
    let trans = this.state.records[i]._id;
    let a = this;
    axios.put('/bankRecords', {
      data: trans
    }).then(function (response) {
      currentState.splice(i, 1);
      a.setState({
        records: currentState
      })
    }).catch(function (error) {
      console.log("error: ", error);
    })
  }

  handleCategChange(e) {
    console.log("target: ", e);
    let i = e.target.getAttribute('data-key');
    console.log("i: ", i);
    let category = e.target.value;
    console.log("category: ", category);
    let currentState = this.state.records;
    console.log("currentState: ", currentState);
    currentState[i].Category = category
    let trans = this.state.records[i]._id;
    let a = this;
    axios.put('/bankRecords/change', {
      data: trans,
      Category: category
    }).then(function (response) {
      a.setState({
        records: currentState
      })
    }).catch(function (error) {
      console.log("error: ", error);
    })
  }


  componentDidMount() {
    //add function to add blank for uncategorized
    let user = this.props.user
    this.setState({
      user: user
    })
    console.log("XXXX user XXXX: ", user);
    fetch('/bankRecords/' + user)
      .then(response => response.json())
      .then(response => this.setState({records: response}))
    }

  render() {
    let user = this.props.user
    console.log("user in client/BankRecords.js: ", user);
    console.log("this.state.user bankrecords: ", this.state.user);

    return (

      <div className="BankRecordsWrapper row " >
        
        <div className='col s10 offset-s1'>
        <InputBankRecords
                papaData={this.papaData}
                records={this.state.records}
                user={user}
                />
                <div className='movepage'></div> 
        <section className="z-depth-2  " >
          <ul id='tableLable' className='notmoving ' onClick={this.change}>
            <li className='col s3'>Date</li>
            <li className='col s3'>Description</li>
            <li className='col s3'>Amount</li>
            <li className='col s2'>Category</li>
          </ul>
          <br/><br/>
          <EditBankData
                {...this.state.records}
                handleDelete={this.handleDelete}
                handleCategChange={this.handleCategChange}
                records={this.state.records}
                user={user}
                />
        </section>
      </div>
      </div>

    );
  }
}
export default BankRecords;
