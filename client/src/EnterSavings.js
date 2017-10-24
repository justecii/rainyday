import React, { Component } from 'react';

import './App.css';

//form for entering
class EnterSavings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savings: [],
      value: ''
    };
    //thisis the binding line necessary to keep this bound correctly
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A new input was submitted: ' + this.state.value);
    event.preventDefault();
  }

  componentDidMount(){
    fetch("/bankRecords/savedList")
    .then((response) => response.json())
    .then((response) => this.setState({savings: response}))
  }
  
  
  

  render() {

    return (
      <div className="EnterSavingsWrapper">
        <h1>Choose your savings</h1>
        <form onSubmit={this.handleSubmit}>
        <label>
          What is the thing you are saving on: <input type="text" name="Description" />
        </label> 
        <label>
          Category: <input type="text" name="Category" />
        </label> 
        <label>
          Amount: <input type="text" name="Amount" />
        </label> 
        <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}
export default EnterSavings;
