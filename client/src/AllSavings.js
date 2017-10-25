import React, { Component } from 'react';
import './App.css';

//get all type savings
class AllSavings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savings: []
    }
    this.componentDidMount = this.componentDidMount.bind(this)
  }
  
  componentDidMount(){
    fetch("/bankRecords/savedList")
    .then((response) => response.json())
    .then((response) => this.setState({savings: response}))
  }
  

  render() {
    console.log('those are savings', this.state.savings);

    let savedOn = this.state.savings.map((item, index) => (
      <p className='savedOn' key={item._id}>
        {item.Description} that belong to category {item.Category} and the amount you want to save is {item.Amount} 
      </p>

    ));
   
    return (
      <div className="AllSavingsWrapper">
        <h1>Things you are going to save on:</h1>
        <ul>
          <li>
            {savedOn}
          </li>
        </ul>
      </div>
    );
  }
}
export default AllSavings;
