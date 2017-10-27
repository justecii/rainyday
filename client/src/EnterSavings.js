import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';
import './App.css';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import { DateRangePicker, SingleDatePicker } from 'react-dates';

//TEST PULL REQUEST
//form for entering
class EnterSavings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Description: "",
      Category: "",
      Amount: "",
      date: null,
      user: {}
    };
    //thisis the binding line necessary to keep this bound correctly
    // this.componentDidMount = this.componentDidMount.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleChangeAmount = this.handleChangeAmount.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChangeDescription(e){
    // console.log('handleChangeDescription', e.target.value)
    this.setState({
      Description: e.target.value
    })
  }
  handleChangeCategory(e){
    // console.log('handleChangeCategory', e.target.value)
    this.setState({
      Category: e.target.value
    });
  }
  
  handleChangeAmount(e){
    // console.log('handleChangeAmount', e.target.value)
    this.setState({
      Amount: e.target.value
    });
  }
  
  handleChangeDate(date){
    console.log('handleChangeDate', date)

    console.log(date.format("MM/DD/YY"))
    console.log(this.props.showClearDate)
    this.setState({
      date: date
    })
  }

  resetForm(e) { 
    document.getElementById("myform").reset();
    this.setState({
      date: null
    })
  }


  handleSubmit(e) {
    // console.log('in savings value this is this.date.value', e)
    // console.log("Description: ", this.state.Description);
    // console.log("Category: ", this.state.Category);
    // console.log("Amount: ", this.state.Amount);
    // console.log("date: ", this.state.date);
    e.preventDefault();
    let Description = this.state.Description;
    let Category = this.state.Category;
    let Amount = this.state.Amount;
    // console.log("descript: ", Description);
    // console.log("category: ", Category);
    // console.log("Amount: ", Amount);
    let user = this.state.user;
    let date = this.state.date.format("MM/DD/YY");
  
    //add all three variables to object {} -- let Object = {insert object of three variables}
    let newObject = {
      Description: Description,
      Category: Category,
      Amount: Amount,
      date: date,
      isSaved: true,
      userId: user
    }
    //data: Ojbect of the three variables
    //re-set state based on updated form information...
    
    //add the new object (Object) to tempArr -- Google: ".shift() for objects"
    //setState to tempArr (which is already done below)
    // console.log("state: ", this.state.savings);
   let a = this;
    axios.post('/bankRecords/savedList', {
      data: newObject//insert object of the three variables
    }).then(function (response) {
      a.props.addSaving(newObject);
    }).catch(function (error) {
      console.log("error: ", error);
    })
  }

  
  
  

  componentDidMount() {
    let user = this.props.user
    this.setState({
      user: user
    })
    // fetch('/bankRecords/' + user)
    //   .then(response => response.json())
    //   // .then(response => this.setState({records: response}))
    // .then(response => this.setState({savings: response}))
    }


  
  

  render() {
    let user = this.props.user
    // console.log("user in client/EnterSavings.js: ", user);


    return (
      <div className="EnterSavingsWrapper">
        <h4>Choose your savings</h4>
        <form id="myform" onSubmit={(e) => {this.handleSubmit(e); this.resetForm(e)}}>    
          <div className="row highlight">
            <div className="input-field col s12">
              <input id="Description" type="text" className="validate" name="Description" onChange={this.handleChangeDescription} required/>
              <label htmlFor="Description">Describe what you are saving on..</label>
            </div>
          </div>
      
          <div className="row highlight">
            <div className="col s12">  
              <h5>Category</h5>  
              <select name="Category" value={this.state.value} onChange={this.handleChangeCategory} required>
                <option  value="" disabled defaultValue> </option>
                <option value="Bills">Bills</option>
                <option value="Groceries">Groceries</option>
                <option value="Transportation">Transportation</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Clothing">Clothing</option>
                <option value="Dining Out">Dining Out</option>
                <option value="Vices">Vices</option>
                <option value="Debt">Debt</option>
                <option value="Housing">Housing</option>
                <option value="Savings">Savings</option>
                <option value="Health">Health</option>
                <option value="Miscellaneous">Miscellaneous</option>
                <option value="Income">Income</option>
              </select>
            </div>  
          </div>  
          <br />
      
          <div className="row highlight">
            <div className="input-field col s12">
              <input type="number" name="Amount" className="validate"  onChange={this.handleChangeAmount} required/>  
              <label htmlFor="Amount">Money saved ($)</label>
            </div>
          </div>
            <SingleDatePicker
              date={this.state.date}
              onDateChange={this.handleChangeDate} // PropTypes.func.isRequired
              focused={this.state.focused} // PropTypes.bool
              onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
              isOutsideRange={() => false}
              withPortal={true}
            />

            <br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default EnterSavings;