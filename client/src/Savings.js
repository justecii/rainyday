import React, { Component } from 'react';
import EnterSavings from './EnterSavings.js'
import SavingsSummary from './SavingsSummary.js'
import AllSavings from './AllSavings.js'
import './App.css';


class Savings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childProp:""
    }
  }



  render() {

    return (
      <div className="SavingsWrapper">
        <p>Savings Page</p>
        <AllSavings />
        <EnterSavings />
        <SavingsSummary />
      </div>
    );
  }
}
export default Savings;
