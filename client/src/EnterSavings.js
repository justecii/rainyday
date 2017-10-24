import React, { Component } from 'react';

import './App.css';

//form for entering
class EnterSavings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isSaved = true, should it be included here...
      savings: [],
      value: "transportation"
    };
    //thisis the binding line necessary to keep this bound correctly
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log('this is event from handle submit', event.target);
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
        <form onSubmit={(e) => this.handleSubmit(e)}>
        <label>
          What is the thing you are saving on: <input type="text" name="Description" placeholder="saving on" onChange={this.handleChange}/>
        </label> 
        <label>
          Category:
        </label>  
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="bills">Bills</option>
            <option value="groceries">Groceries</option>
            <option value="transportation">Transportation</option>
            <option value="entertainment">Entertainment</option>
            <option value="clothes">Clothes</option>
            <option value="dining Out">Dining Out</option>
            <option value="vices">Vices</option>
            <option value="debt">Debt</option>
            <option value="housing">Housing</option>
            <option value="savings">Savings</option>
            <option value="health">Health</option>
            <option value="miscellaneous">Miscellaneous</option>
          </select>
        
        <br />
        <label>
          Amount: <input type="number" name="Amount" placeholder="enter number" onChange={this.handleChange}/>
        </label> 
        <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default EnterSavings;
