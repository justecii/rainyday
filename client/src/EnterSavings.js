import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

//form for entering
class EnterSavings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isSaved = true, should it be included here...
      savings: [],
      Description: "",
      Category: "",
      date: "",
      Amount: ""
    };
    //thisis the binding line necessary to keep this bound correctly
    // this.componentDidMount = this.componentDidMount.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {

    const target = event.target;
    const value = target.value;
    const name = target.name;
    if (name === "Description") {
      this.setState({
        Description: value
      });
    } else if (name === "Category") {
      this.setState({
        Category: value
      });
    } else if (name === "Amount") {
      this.setState({
        Amount: value
      });
    } else {
      this.setState({
        date: value
      });  
      console.log(this.date.value)
    }
  }

  handleSubmit(e) {
    console.log("Description: ", this.state.Description);
    console.log("Category: ", this.state.Category);
    console.log("Amount: ", this.state.Amount);
    console.log("date: ", this.state.date);
    // e.preventDefault();
    let Description = this.state.Description;
    let Category = this.state.Category;
    let Amount = this.state.Amount;
    let date = this.state.date;
   
    //add all three variables to object {} -- let Object = {insert object of three variables}
    let newObject = {
      Description: Description,
      Category: Category,
      Amount: Amount,
      date: date,
      isSaved: true,
      userId: 10
    }
    //data: Ojbect of the three variables

    //re-set state based on updated form information...
    let tempArr = this.state.savings;
    tempArr.push(newObject)
    //add the new object (Object) to tempArr -- Google: ".shift() for objects"
    //setState to tempArr (which is already done below)
    console.log("state: ", this.state.savings);
    let a = this;
    axios.post('/bankRecords/savedList', {
      data: newObject//insert object of the three variables
    }).then(function (response) {
      a.setState({
        savings: tempArr
      })
    }).catch(function (error) {
      console.log("error: ", error);
    })

  }

  componentDidMount(){
    fetch("/bankRecords/savedList")
    .then((response) => response.json())
    .then((response) => this.setState({savings: response}))
  }
  
  render() {

    return (
      <div className="EnterSavingsWrapper">
        <h4>Choose your savings</h4>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          
          <div className="row highlight">
            <div className="input-field col s12">
              <input id="Description" type="text" className="validate" name="Description" onChange={this.handleChange}/>
              <label htmlFor="Description">Describe what you are saving on..</label>
            </div>
          </div>
      
          <div className="row highlight">
            <div className="col s12">  
              <h5>Category</h5>  
              <select name="Category" value={this.state.value} onChange={this.handleChange}>
                <option  value="" disabled selected> </option>
                <option value="Bills">Bills</option>
                <option value="Groceries">Groceries</option>
                <option value="Transportation">Transportation</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Clothes">Clothes</option>
                <option value="Dining Out">Dining Out</option>
                <option value="Vices">Vices</option>
                <option value="Debt">Debt</option>
                <option value="Housing">Housing</option>
                <option value="Savings">Savings</option>
                <option value="Health">Health</option>
                <option value="Miscellaneous">Miscellaneous</option>
              </select>
            </div>  
          </div>  
          <br />
      
          <div className="row highlight">
            <div className="input-field col s12">
              <input type="number" name="Amount" className="validate"  onChange={this.handleChange}/>  
              <label htmlFor="Amount">Money saved ($)</label>
            </div>
          </div>
          <div className="row highlight">
            <div className="input-field col s12">
              <input type="text" name="date" className="datepicker" onChange={this.handleChange}/>  
              <label htmlFor="date">Created on</label>
            </div>
          </div>
          <input type="submit" value="Submit" />
          
        </form>
      </div>
    );
  }
}
export default EnterSavings;
