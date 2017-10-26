import React, { Component } from 'react';
import EnterSavings from './EnterSavings.js';
import SavingsSummary from './SavingsSummary.js';
import AllSavings from './AllSavings.js';
import './App.css';

//parent component
class Savings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }


  componentDidMount() {
    let user = this.props.user
    this.setState({
      user: user
    })
    fetch('/bankRecords/' + user)
      .then(response => response.json())
      .then(response => this.setState({records: response}))
    }


  render() {
    let user = this.props.user
    // console.log("user in client/Savings.js: ", user);

    return (

      <div className="SavingsWrapper container ">
       
        <EnterSavings user={user}/>
        <AllSavings user={user}/>
        {/* <SavingsSummary user={user}/> */}
      </div>

    );
  }
}
export default Savings;
