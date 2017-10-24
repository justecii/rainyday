import React, { Component } from 'react';
import './App.css';

//
class SavingsSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childProp:""
    }
  }



  render() {

    return (
      <div className="SavingsSummaryWrapper">
        <p>Savings Summary Page</p>
      </div>
    );
  }
}
export default SavingsSummary;
