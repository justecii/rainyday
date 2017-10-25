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
  
  deleteTransaction(e) {
    e.preventDefault();
    let i = e.target.getAttribute('data-key');
    let currentState = this.state.records;
    let trans = this.state.records[i]._id;
    let a = this;
    axios.put('/bankRecords', {
      data: trans
    }).then(function (response) {
      currentState.splice(i, 1);
      a.setState({
        records: currentState
      })
    }).catch(function (error) {
      console.log("error: ", error);
    })
  }

  render() {
    console.log('those are savings', this.state.savings);

    let savedOn = this.state.savings.map((item, index) => (
      
        <div className="row" key={index}>
          <div className='col s5'>{item.Description}</div>
          <div className='col s3'>{item.Category}</div>
          <div className='col s3'>{item.Amount}</div>
          <div className="waves-effect waves-light btn red col s1 " data-key={index} onClick={this.deleteSavedItem}>Delete</div> 
        </div>
    ))
    
    return (
      <div>  
        <div className="row">
          <div className='col s5'>Description</div>
          <div className='col s3'>Category</div>
          <div className='col s3'>Amount</div>
          <div className='col s1'>Delete</div> 
        </div> 
        {savedOn}
      </div>  
    )    
  }
}
export default AllSavings;
