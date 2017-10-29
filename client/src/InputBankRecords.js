import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
var Papa = require('papaparse');


class InputBankRecords extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [],
      user: {}
    }
    this.uploadFile = this.uploadFile.bind(this);
    this.change = this.change.bind(this);
  }

  change(e) {
    console.log("records: ", this.state.records);
    console.log("user: ", this.state.user)
  }

  uploadFile(e) {
    e.preventDefault();
    // console.log("uploadFile: ", e.target)
    let uploaded = e.target.files[0];
    let user = this.state.user;
    // console.log("XXXX user in uploadfile XXXX: ", user);
    uploaded.user = user;
      this.props.papaData(uploaded);
  }

  componentDidMount() {
    let user = this.props.user
    let records = this.props.records
    this.setState({
      user: user,
      records: records
    })
  }

  render() {
    let user = this.props.user
    // console.log("user in client/InputBankRecords: ", user);
    // console.log("this.state.records inputbankrecords: ", this.state.records);
    // console.log("this.props.records inputbankrecords: ", this.props.user);

    return (
      <div className="inputData">
        <form action="/bankRecordsReactRoute">
          <div onClick={this.change} className="file-field input-field col s12 ">
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
