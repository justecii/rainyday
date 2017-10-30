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
    return (
      <div className="UserSummaryWrapper">
        <div className="row">
          <h4 className="center-align">Spending by Category</h4>
          {this.state.allExpenses.map((category,index) => (
            <div key={index} >
              <div className="col s4">{category.category}:</div>
              <div className="col s2">{Math.round(category.amount)}</div>
            </div>
          ))}
        </div>
        <div className="row">
          <h4 className="center-align">Savings by Category</h4>
          {this.state.allSaved.map((category,index) => (
            <div key={index} className="row">
              <div className="col s4">{category.category}:</div>
              <div className="col s2">{Math.round(category.amount)}</div>
            </div>
          ))}
        </div>
        
      </div>
    );
  }
}
export default UserSummary;
