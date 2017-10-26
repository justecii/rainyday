import React, { Component } from 'react';
import './App.css';

//get all type savings
class AllSavings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savings: []
    }

    this.componentDidMount = this.componentDidMount.bind(this);
    this.check = this.check.bind(this);
    this.SaveCatChange = this.SaveCatChange.bind(this);
    this.deleteSaved = this.deleteSaved.bind(this);
  }
  
  componentDidMount(){
    fetch("/bankRecords/savedList")
    .then((response) => response.json())
    .then((response) => this.setState({savings: response}))
  }
  
  check(e) {
    console.log(this.state.savings);
  }
  // deleteSavedItem(recordId) {
  //   let url = "/bankRecords/savedList/" + recordId;
  //   fetch(url, {method: 'delete'}).then((response) => console.log(response))
  // }
  deleteSaved(e) {
    e.preventDefault();
    let i = e.target.getAttribute('data-key');
    let currentState = this.state.savings;
    let trans = this.state.savings[i]._id;
    let a = this;
    axios.put('/bankRecords', {
      data: trans
    }).then(function (response) {
      currentState.splice(i, 1);
      a.setState({
        savings: currentState
      })
    }).catch(function (error) {
      console.log("error: ", error);
    })
  }

  SaveCatChange(e) {
    e.preventDefault();
    let i = e.target.getAttribute('data-key');
    let Category = e.target.value;
    let currentState = this.state.savings;
    let individState = this.state.savings[i];
    console.log("individState: ", individState);
    let categState = this.state.savings[i].Category = Category;
    individState.Category = categState
    let trans = this.state.savings[i]._id;
    let a = this;
    axios.put('/bankRecords/change', {
      data: trans,
      Category: Category
    }).then(function (response) {
      a.setState({
        savings: currentState,
      })
    }).catch(function (error) {
      console.log("error: ", error);
    })
  }




//   componentDidMount() {
//     fetch('/bankRecords/SavingsSummary')
//       .then(response => response.json())
//       .then(response => {
//         this.setState({savings: response})
//       })
//     }

   
  render() {
    let savedOn = this.state.savings.map((saving, index) => (
      
              <section className="row z-depth-1" key={index} onClick={this.check}>
                <div className='col s4'>{saving.Description}</div>
                <div className='col s3'>
                  <select className="browser-default" data-key={index} onChange={this.SaveCatChange}>
                    <label>{saving.Category}</label>
                    <option value="" disabled selected>{saving.Category}</option>
                    <option value="Bills" data-key={index}>Bills</option>
                    <option value="Groceries" data-key={index}>Groceries</option>
                    <option value="Transportation" data-key={index}>Transportation</option>
                    <option value="Entertainment" data-key={index}>Entertainment</option>
                    <option value="Clothing" data-key={index}>Clothing</option>
                    <option value="Dining Out" data-key={index}> Dining out</option>
                    <option value="Vices" data-key={index}>Vices</option>
                    <option value="Debt" data-key={index}>Debt</option>
                    <option value="Housing" data-key={index}>Housing</option>
                    <option value="Savings" data-key={index}>Savings</option>
                    <option value="Health" data-key={index}>Health</option>
                    <option value="Miscellaneous" data-key={index}>Miscellaneous</option>
                    <option value="Income" data-key={index}>Income</option>
                  </select>
                </div>
                <div className='col s2'>{saving.Amount}</div>
                <div className='col s2'>{saving.date}</div>
      
      
                <div className="waves-effect waves-light btn red col s1 " data-key={index} onClick={this.deleteSaved}>Delete</div>
      
              </section>  ))
    return (
      <div className="allSavings">  
        <h4>Those could be your expenses, instead those are your savings!</h4>
        <div className="row">
          <div className='col s4'>Description</div>
          <div className='col s3'>Category</div>
          <div className='col s2'>Money Saved ($)</div>
          <div className='col s2'>Created on</div>
          <div className='col s1'>Delete</div> 
        </div> 
        {savedOn}
      </div>  

    );
  }
}
export default AllSavings;