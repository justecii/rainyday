import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';
import $ from 'jquery';
// var Papa = require('papaparse');


class InputBankRecords extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [],
      user: {}
    }
    this.uploadFile = this.uploadFile.bind(this);
  }

  uploadFile(e) {
    e.preventDefault();
    let uploaded = e.target.files[0];
    let user = this.state.user;
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
    $('.card__share > a').on('click', function(e){
      e.preventDefault(); // prevent default action - hash doesn't appear in url
      $(this).parent().find( 'div' ).toggleClass( 'card__social--active' );
      $(this).toggleClass('share-expanded');
    });
  }

  render() {
    // let user = this.props.user
    return (
      <div className="inputData">
        <form action="/bankRecordsReactRoute">
          <div className="card__share">
            <div className="card__social">
              <a><span>
              To Import Bank Records: Upload a CSV file from your computer.  
              It must include a Transaction or Post Date, Description, and Amount.</span></a>
            </div>
            <a id="share" className="share-icon">?</a>
          </div>
          <div onClick={this.change} className="file-field input-field col s4 ">
            <div className="btn #263238 blue-grey darken-4">
              <span>Import File</span>
              <input type="file" name="uploadCSV" onChange={this.uploadFile}/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}



export default InputBankRecords;
