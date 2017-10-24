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
        let data = result.data;
        console.log("data: ", data);
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
        <form action="/bankRecordsReactRoute">
          <div className="file-field input-field ">
            <div className="btn #00838f cyan darken-3">
              <span>File</span>
              <input type="file" name="uploadCSV" onChange={this.uploadFile}/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}


export default InputBankRecords;
