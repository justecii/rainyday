import React, { Component } from 'react';
import EnterSavings from './EnterSavings.js'
import SavingsSummary from './SavingsSummary.js'
import AllSavings from './AllSavings.js'
import './App.css';

//parent component
class Savings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childProp:""
    }
  }


  componentDidMount(){
    fetch("/bankRecords")
    .then((response) => response.json())
    .then((response) => this.setState({jobs: response}))
  }


  render() {

    return (
      <div>
        <EnterSavings />
        <AllSavings />
        <SavingsSummary />
      </div>  
    );
  }
}
export default Savings;
