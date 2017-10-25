import React, { Component } from 'react';
import axios from 'axios';
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

  deleteSavedItem(recordId) {
    let url = "/bankRecords/savedList/" + recordId;
    fetch(url, {method: 'delete'}).then((response) => console.log(response))
  }
   
  render() {
    console.log('those are savings', this.state.savings);

    let savedOn = this.state.savings.map((item, index) => (
      
        <div className="row" key={index}>
          <div className='col s5'>{item.Description}</div>
          <div className='col s3'>{item.Category}</div>
          <div className='col s2'>{item.Amount}</div>
          <div className="waves-effect waves-light btn red col s1 "  onClick={(e)=> this.deleteSavedItem(item._id)}>Delete</div> 
        </div>
    ))
    
    return (
      <div>  
        <h1>Those could be your expenses, instead those are your savings!</h1>
        <div className="row">
          <div className='col s5'>Description</div>
          <div className='col s3'>Category</div>
          <div className='col s2'>Money Saved ($)</div>
          <div className='col s1'>Delete</div> 
        </div> 
        {savedOn}
      </div>  
    )    
  }
}
export default AllSavings;
