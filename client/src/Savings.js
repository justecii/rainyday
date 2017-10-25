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

      <div className="SavingsWrapper container ">



        <p>Savings Page</p>
        <EnterSavings />
        <section className="row movepage">
        <h1>Savings Summary:</h1>
            <ul className="colHeader">
              <li className='col s3'>Description</li>
              <li className='col s3'>Amount</li>
              <li className='col s3'>Category</li>
            </ul>

        </section>
        <AllSavings />
        <SavingsSummary />
      </div>
    );
  }
}
export default Savings;
