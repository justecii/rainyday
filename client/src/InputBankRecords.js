import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
var Papa = require('papaparse');


class InputBankRecords extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childProp:"",
      bank: []
    }
    this.uploadFile = this.uploadFile.bind(this);
  }

  uploadFile(e) {
    e.preventDefault();
    let uploaded = e.target.files[0];
    let papaData = Papa.parse(uploaded, {
      header: true,
      delimiter: ",",
      complete( result, file ) {
        console.log("result.data: ", result.data);
        // console.log('file: ', file);
        let data = result.data;
        axios.post('/bankRecords', {
          data: data
        }).then(function (response) {
          console.log("response: ", response);
        }).catch(function (error) {
          console.log("error: ", error)
        })
      } });
  }

  render() {
    return (
      <div>
        <h1>Upload A File</h1>
        <form  onSubmit={this.uploadFile} action="/jobs" method="POST">
          <input type="file" name="uploadCSV" onChange={this.uploadFile}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}


export default InputBankRecords;
