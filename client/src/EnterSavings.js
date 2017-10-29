import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';
import './App.css';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import { DateRangePicker, SingleDatePicker } from 'react-dates';


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
    this.componentDidMount = this.componentDidMount.bind(this);
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
    e.preventDefault();
    let Description = this.state.Description;
    let Category = this.state.Category;
    let Amount = this.state.Amount;
    let user = this.state.user;
    let date = this.state.date.format("MM/DD/YY");

    //add all the variables to object {} -- let Object = {insert object of three variables}
    let newObject = {
      Description: Description,
      Category: Category,
      Amount: Amount,
      date: date,
      isSaved: true,
      userId: user
    }
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
    }





  render() {
    let user = this.props.user
    // console.log("user in client/EnterSavings.js: ", user);


    return (
      <div className="EnterSavingsWrapper">
        <form id="myform" onSubmit={(e) => {this.handleSubmit(e); this.resetForm(e)}}>
          <div className="row highlight">
            <h5>Description</h5>
            <div className="input-field col s12">
              <input id="Description" type="text" className="validate" name="Description" onChange={this.handleChangeDescription} required/>
              <label htmlFor="Description">Enter your {`saving's`} description here</label>
            </div>
          </div>
          <div className="row highlight">
            <h5>Category</h5>
            <br />
            <div className="col s12">
              <select name="Category" value={this.state.value} onChange={this.handleChangeCategory} required>
                <option  value="" > </option>
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
          <div className="row highlight">
            <h5>Savings</h5>
            <div className="input-field col s12">
              <input type="number" name="Amount" className="validate"  onChange={this.handleChangeAmount} required/>
              <label htmlFor="Amount">Money saved ($)</label>
            </div>
          </div>
            <h5>Date</h5>
            <SingleDatePicker
              date={this.state.date}
              onDateChange={this.handleChangeDate} // PropTypes.func.isRequired
              focused={this.state.focused} // PropTypes.bool
              onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
              isOutsideRange={() => false}
              withPortal={true}
              numberOfMonths={1}
              showDefaultInputIcon={true}
            />

            <br />
            <input className="btn waves-effect waves-light movedownalittle" type="submit" value="Submit"  />  
        </form>
        <br/>
        <div className='divider'> </div>

      </div>
    );
  }
}
export default EnterSavings;
