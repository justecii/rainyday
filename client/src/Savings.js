import React, { Component } from 'react';
import EnterSavings from './EnterSavings.js';
import SavingsSummary from './SavingsSummary.js';
import AllSavings from './AllSavings.js';
import axios from 'axios';

import './App.css';

//parent component
class Savings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      savings: []
      
    }
    this.addSaving = this.addSaving.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCatChange = this.handleCatChange.bind(this);
  }

  handleDelete(i) {
    let currentState = this.state.savings;
    let trans = this.state.savings[i]._id;
    let a = this;
    axios.put('/bankRecords', {
      data: trans
    }).then(function (response) {
      currentState.splice(i, 1);
       a.setState({savings: currentState});
    }).catch(function (error) {
      console.log("error: ", error);
    })
  }

  handleCatChange(e){
    let i = e.target.getAttribute('data-key');
    let category = e.target.value;
    let currentState = this.state.savings;
    currentState[i].Category = category;
    this.setState({
      savings: currentState
    })
    let trans = this.state.savings[i]._id;
    axios.put('/bankRecords/change', {
      data: trans,
      Category: category
    }).then(function (response) {
      console.log("response: ", response);
    }).catch(function (error) {
      console.log("error: ", error);
    })
  }

  addSaving(saving){
    let temp = this.state.savings;
    temp.push(saving);
    this.setState({
      savings: temp
    })
  }

  componentDidMount() {
    let user = this.props.user
    this.setState({
      user: user
    })
    fetch('/bankRecords/SavingsSummary/' + user)
    .then(response => response.json())
    .then(response => {
      this.setState({savings: response})})
    }


  render() {
    let user = this.props.user
    return (

      <div className="SavingsWrapper row">
        <div className="col s10 offset-s1">
          <EnterSavings  addSaving={this.addSaving} user={user}/>
          <AllSavings 
            savings={this.state.savings}  
            setSavings={this.setSavings} 
            user={user}
            handleDelete={this.handleDelete}
            handleCatChange={this.handleCatChange}
          />
        </div>
        {/* tool tip */}
        <div className="fixed-action-btn toolbar">
          <a className="btn-floating btn-large #263238 blue-grey darken-4 pulse">
            <i className="large material-icons">flare</i>
          </a>
          <ul>
            <li className="waves-effect waves-light"><a href="#!">
              <i >Here's where you can track that you didn't spend $147 on donuts on Tuesday, March 4.</i></a>
            </li>
          </ul>
        </div> {/* end of tool tip */}
      </div>

    );
  }
}
export default Savings;
