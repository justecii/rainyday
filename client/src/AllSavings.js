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
    this.SaveCatChange = this.SaveCatChange.bind(this);
    this.deleteSaved = this.deleteSaved.bind(this);
  }

  deleteSaved(e) {
    e.preventDefault();
    let i = e.target.getAttribute('data-key');
    this.props.handleDelete(i);
  }

  SaveCatChange(e) {
    e.preventDefault();
    this.props.handleCatChange(e);
  }

  componentDidMount() {
    let user = this.props.user
    this.setState({
      user: user
    })
  }

  render() {
    let user = this.props.user
 
    let savedOn = this.props.savings.map((saving, index) => (

              <section className="row z-depth-1 valign-wrapper" key={index} onClick={this.check}>
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
        <h4>Take a look at what you've saved!</h4>
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
