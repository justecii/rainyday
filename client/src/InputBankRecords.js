import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
var Papa = require('papaparse');


class InputBankRecords extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bank: [],
      user: {}
    }
    this.uploadFile = this.uploadFile.bind(this);
    this.change = this.change.bind(this);
  }

  change(e) {
    console.log(this.state.records);
    console.log("user: ", this.state.user)
  }

  uploadFile(e) {
    e.preventDefault();
    let uploaded = e.target.files[0];
    let user = this.state.user;
    console.log("user in uploadFile(): ", user);
    let papaData = Papa.parse(uploaded, {
      header: true,
      delimiter: ",",
      complete( result, file ) {
        let data = result.data;
        data.map(id => id.userId = user)
        console.log("data userId: ", data);
        data.map(saved => saved.isSaved = false)
        console.log("data isSaved: ", data);
        axios.post('/bankRecords', {
          data: data
        }).then(function (response) {
          console.log("response: ", response);
        }).catch(function (error) {
          console.log("error: ", error)
        })
      } });
  }

  componentDidMount() {
    let user = this.props.user
    this.setState({
      user: user
    })
  }

  render() {
    let user = this.props.user
    console.log("user in client/InputBankRecords: ", user);
    console.log("this.state.user inputbankrecords: ", this.state.user);

    return (
      <div>

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
