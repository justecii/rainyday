import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

//get all type savings
class AllSavings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }

    this.componentDidMount = this.componentDidMount.bind(this);
    this.check = this.check.bind(this);
    this.SaveCatChange = this.SaveCatChange.bind(this);
    this.deleteSaved = this.deleteSaved.bind(this);
  }

  check(e) {
    console.log("savings state: ", this.state.savings);
    console.log("user state: ", this.state.user);
  }

  deleteSaved(e) {
    e.preventDefault();
    let i = e.target.getAttribute('data-key');
    this.props.handleDelete(i);
  }



  SaveCatChange(e) {
    e.preventDefault();
    this.props.handleCatChange(e);
    // let i = e.target.getAttribute('data-key');
    // let Category = e.target.value;
    // let currentState = this.props.savings;
    // let individState = this.props.savings[i];
    // let categState = this.props.savings[i].Category = Category;
    // individState.Category = categState
    // let trans = this.props.savings[i]._id;
    // let a = this;
    // axios.put('/bankRecords/change', {
    //   data: trans,
    //   Category: Category
    // }).then(function (response) {
    //   a.props.setSavings(currentState);
    // }).catch(function (error) {
    //   console.log("error: ", error);
    // })
  }

  componentDidMount() {
    let user = this.props.user
    this.setState({
      user: user
    })
    }





  render() {

    console.log('savings props', this.props.savings)

    let user = this.props.user
    console.log("user in client/AllSavings.js: ", user);


    let savedOn = this.props.savings.map((saving, index) => (

              <section className="row z-depth-1" key={index} onClick={this.check}>
                <div className='col s3'>{saving.Description}</div>
                <div className='col s3'>
                  <select className="browser-default" data-key={index} value={saving.Category} onChange={this.SaveCatChange}>
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


                <div className="waves-effect waves-light btn red col s2 " data-key={index} onClick={this.deleteSaved}>Delete</div>

              </section>  ))

    return (
      <div className="allSavings">
        <h4>Those could be your expenses, instead those are your savings!</h4>
        <div className="row">
          <div className='col s3'>Description</div>
          <div className='col s3'>Category</div>
          <div className='col s2'>Money Saved ($)</div>
          <div className='col s2'>Created on</div>
          <div className='col s2'>Delete</div>
        </div>
        {savedOn}
      </div>

    );
  }
}
export default AllSavings;
