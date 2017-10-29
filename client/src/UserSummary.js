import React, { Component } from 'react';
import './App.css';


class UserSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allExpenses:[],
      allSaved:[]
    }
  }

  componentWillReceiveProps(nextProps) {
     var allExpenses = nextProps.allExpenses
     var allSaved = nextProps.allSaved
    this.setState({
      allExpenses:allExpenses,
      allSaved:allSaved
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="UserSummaryWrapper">
        <p>Your User Summary!</p>
        <p>Spending by Category</p>
        {this.state.allExpenses.map((category,index) => (
          <div key={index} className="row">
            <div className="col s4">{category.category}:</div>
            <div className="col s2">{Math.round(category.amount)}</div>
          </div>
        ))}
        <p>Savings by Category</p>
        {this.state.allSaved.map((category,index) => (
          <div key={index} className="row">
            <div className="col s4">{category.category}:</div>
            <div className="col s2">{Math.round(category.amount)}</div>
          </div>
        ))}
      </div>
    );
  }
}
export default UserSummary;
