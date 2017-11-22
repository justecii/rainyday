import React, { Component } from 'react';
import InputBankRecords from './InputBankRecords.js'
import EditBankData from './EditBankData.js'
import './App.css';
import axios from 'axios';
var Papa = require('papaparse');

class BankRecords extends Component {
  constructor(props) {
    super(props);
    this.state = {
    user: {},
    records: []
    }
    this.papaData = this.papaData.bind(this);
    this.handleCategChange = this.handleCategChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  papaData(uploaded) {
    let user = uploaded.user;
    let a = this;
    let data;
    let papaParse = Papa.parse(uploaded, {
      header: true,
      delimiter: ",",
      complete( result, file ) {
        data = result.data;
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
        }).catch(function (error) {
          console.log("error: ", error);
        })
      } })
    console.log (a, papaParse)
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
    let i = e.target.getAttribute('data-key');
    let category = e.target.value;
    let currentState = this.state.records;
    currentState[i].Category = category
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
    fetch('/bankRecords/' + user)
      .then(response => response.json())
      .then(response =>
      this.updateState(response))
    }

  render() {
    let user = this.props.user
    return (
      <div className="BankRecordsWrapper row " >
        <div className='col s10 offset-s1'>
          <h3 onClick={this.change}>My Transactions</h3>
          <p>You can view all of your imported transactions here.</p>
          <br />
          
          <InputBankRecords
            papaData={this.papaData}
            records={this.state.records}
            user={user}
            />
          <br />
          <h4 className="editBankDataHeader ">Transactions</h4>
          <EditBankData
            {...this.state.records}
            handleDelete={this.handleDelete}
            handleCategChange={this.handleCategChange}
            records={this.state.records}
            user={user}
          />
          {/* tool  */}
          <div className="fixed-action-btn toolbar">
            <a className="btn-floating btn-large  #263238 blue-grey darken-4">
              <i className="large material-icons">grade</i>
            </a>
            <ul className='row'>
              <li className='col s2'><a href="#!"><i >Date</i></a></li>
              <li className='col s4'><a href="#!"><i >Description</i></a></li>
              <li className='col s2'><a href="#!"><i >Amount</i></a></li>
              <li className='col s2'><a href="#!"><i >Category</i></a></li>
              <li className='col s2'><a href="#!"><i >Delete</i></a></li>
            </ul>
          </div> {/* end tool */}
        </div>
      </div>
    );
  }
}
export default BankRecords;
