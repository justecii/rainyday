import React, { Component } from 'react';
import './App.css';


class AllSavings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childProp:""
    }
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
