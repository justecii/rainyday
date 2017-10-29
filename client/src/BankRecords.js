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
    console.log("this.state.records: ", this.state.records);
    console.log("user: ", this.state.user)
  }

  papaData(uploaded) {
    console.log("papaData in BankRecords: ", uploaded);
    console.log("user in PAPADATA: ", uploaded.user);
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
        for (let obj of data) {
          obj['CheckNumber'] = obj['Check or Slip #'];
          obj['TransDate'] = obj['Trans Date'];
          obj['PostDate'] = obj['Post Date'];
          obj['PostedDate'] = obj['Posting Date'];
          delete obj['Trans Date'];
          delete obj['Post Date'];
          delete obj['Posting Date'];
        }
        a.setState({
          records: data
        })
        axios.post('/bankRecords', {
          data: data
        }).then(function (response) {
          console.log("response: ", response);
        }).catch(function (error) {
          console.log("error: ", error)
        })
      } })
  }

  handleDelete(i) {
    console.log("handleDelete");
    let currentState = this.state.records;
    let trans = this.state.records[i]._id;
    let a = this;
    axios.put('/bankRecords', {
      data: trans
    }).then(function (response) {
      console.log("currentState: ", currentState);
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
    // console.log("i: ", i);
    let category = e.target.value;
    // console.log("category: ", category);
    let currentState = this.state.records;
    console.log("currentState1: ", currentState);
    currentState[i].Category = category
    console.log("currentState2: ", currentState);
    this.setState({
      records: currentState
    })
    let trans = this.state.records[i]._id;
    let a = this;
    axios.put('/bankRecords/change', {
      data: trans,
      Category: category
    }).then(function (response) {
      // a.setState({
      //   records: currentState
      // })
    }).catch(function (error) {
      console.log("error: ", error);
    })
  }

  updateState(bankRecords) {
    let records = [];
    for (var i = 0; i < bankRecords.length; i++) {
      if (bankRecords[i].isSaved === false) {
        records.push(bankRecords[i])
      }
      // console.log("bankRecords: ", records);
    }
    this.setState({
      records: records
    })
  }


  componentDidMount() {
    //add function to add blank for uncategorized
    let user = this.props.user
    this.setState({
      user: user
    })
    // console.log("XXXX user XXXX: ", user);
    fetch('/bankRecords/' + user)
      .then(response => response.json())
      .then(response =>
      this.updateState(response))
    }

  render() {
    let user = this.props.user
    // console.log("user in client/BankRecords.js: ", user);
    // console.log("this.state.user bankrecords: ", this.state.user);

    return (


      <div className="BankRecordsWrapper  " >
      <h2 onClick={this.change}>My Transactions</h2>
      <p>You can view all of your imported transactions here.</p>
      <br />
      <h4>Import Transactions</h4>
      <p>Upload a CSV file from your bank. The file should include a transaction or posting date, description, and dollar amount.</p>
      <br />
      <InputBankRecords
              papaData={this.papaData}
              records={this.state.records}
              user={user}
              />
      <br />
      <h4 className="editBankDataHeader">Transactions</h4>
      <EditBankData
            {...this.state.records}
            handleDelete={this.handleDelete}
            handleCategChange={this.handleCategChange}
            records={this.state.records}
            user={user}
            />
            {/* tool  */}
            <div className="fixed-action-btn toolbar">
                  <a className="btn-floating btn-large  #26a69a teal lighten-1">
                       <i className="large material-icons">grade</i>
                  </a>
                  <ul className='row'>
                      <li className='col s2'><a href="#!"><i >Date</i></a></li>
                      <li className='col s2'><a href="#!"><i >Description</i></a></li>
                      <li className='col s2'><a href="#!"><i >Amount</i></a></li>
                      <li className='col s2'><a href="#!"><i >Category</i></a></li>
                      <li className='col s2'><a href="#!"><i >Delete</i></a></li>

                  </ul>
                </div>
                {/* end tool */}
      </div>

    );
  }
}
export default BankRecords;
