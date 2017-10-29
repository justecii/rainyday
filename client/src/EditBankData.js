import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class EditBankData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [],
      user: {}
    }
    this.deleteTransaction = this.deleteTransaction.bind(this);
    this.categoryChange = this.categoryChange.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.change = this.change.bind(this);
  }

  change(e) {
    console.log("this.props.records: ", this.props.records);
    console.log("this.state.records: ", this.state.records);
    console.log("user: ", this.state.user)
  }

  deleteTransaction(e) {
    e.preventDefault();
    let i = e.target.getAttribute('data-key');
    console.log("deleteTransaction");
    this.props.handleDelete(i);
  }

  categoryChange(e) {
    e.preventDefault();
    console.log(e.target)
    console.log("e: ", e);
    this.props.handleCategChange(e);
  }

  componentDidMount() {
    //add function to add blank for uncategorized
    let user = this.props.user
    let records = this.props.records
    // console.log("props records componentDid editbankdata: ", this.props.records)
    // console.log("state records componentDid editbankdata: ", this.state.records)
    this.setState({
      user: user,
      records: records
    })
    }


  render() {
    let user = this.props.user
    let records = this.props.records
    // console.log("props records render() editbankdata: ", this.props.records)
    // console.log("state records render() editbankdata: ", this.state.records)
    // let categName = this.state.records.map((categ, index) => (
    //     {if (categ.Category !== "" || {categ.Category} !== undefined || {categ.Category} !== null) {
    //      {categ.Category} } else { } }</option>
    //   ))

    let mappedItems = this.props.records.map((records, index) => (
          <section onClick={this.change} className="row z-depth-1" key={index}>

            <div>
                <div className='col s3' data-key={index}>{records.TransDate} {records.PostedDate}</div>
                <div className='col s3' data-key={index}>{records.Description}</div>
                <div className='col s3' data-key={index}>{records.Amount}</div>
                <div className='col s2'>
                  <select name='' className="browser-default " data-key={index} onChange={this.categoryChange}>
                  if({records.Category} === '' || {records.Category} === undefined || {records.Category} === null) {
                      <option value="" disabled  value></option>
                    } else { <option value="" disabled  selected>{records.Category}</option> }
                    <option value="Bills" >Bills</option>
                    <option value="Groceries" >Groceries</option>
                    <option value="Transportation" >Transportation</option>
                    <option value="Entertainment" >Entertainment</option>
                    <option value="Clothing" >Clothing</option>
                    <option value="Dining Out" > Dining out</option>
                    <option value="Vices" >Vices</option>
                    <option value="Debt" >Debt</option>
                    <option value="Housing" >Housing</option>
                    <option value="Savings" >Savings</option>
                    <option value="Health" >Health</option>
                    <option value="Miscellaneous" >Miscellaneous</option>
                    <option value="Income" >Income</option>
                  </select>
                </div>

                <div className="waves-effect waves-light btn red col s1  " data-key={index} onClick={this.deleteTransaction}>Delete</div>
                </div>
          </section>  ))

    return (
      <div>
        <br/>
        <section className="row   sectionRow" >
          <ul id='tableLable' className='notmoving ' onClick={this.change}>
            <li className='col s3'>Date</li>
            <li className='col s3'>Description</li>
            <li className='col s3'>Amount</li>
            <li className='col s2'>Category</li>
          </ul>
        </section>
        <br />
        <div className="mappedItems">{mappedItems}</div>
      </div>
    );
  }
}
export default EditBankData;


//
// if({records.Category} === '' || {records.Category} === undefined || {records.Category} === null) {
//   <option value="" disabled  selected data-key={index}></option>
// } else {
  // <option value="" disabled  selected data-key={index}>{records.Category}</option>
// }
