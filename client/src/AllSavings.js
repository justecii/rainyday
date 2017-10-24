import React, { Component } from 'react';
import './App.css';

//get all type savings
class AllSavings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savings: []
    }
  }
  
  componentDidMount(){
    fetch("/bankRecords/savedList")
    .then((response) => response.json())
    .then((response) => this.setState({savings: response}))
  }


  render() {

    return (
      <div className="AllSavingsWrapper">
        <p>All Savings Page</p>
        
      </div>
    );
  }
}
export default AllSavings;
