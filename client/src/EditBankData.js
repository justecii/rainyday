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
    console.log(this.props.records);
    console.log("user: ", this.state.user)
  }

  deleteTransaction(e) {
    e.preventDefault();
    let i = e.target.getAttribute('data-key');
    this.props.handleDelete(i);

    // let currentState = this.props.records;
    // let trans = this.props.records[i]._id;
    // let a = this;
    // axios.put('/bankRecords', {
    //   data: trans
    // }).then(function (response) {
    //   currentState.splice(i, 1);
    //   a.setState({
    //     records: currentState
    //   })
    // }).catch(function (error) {
    //   console.log("error: ", error);
    // })
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
    console.log("props records componentDid editbankdata: ", this.props.records)
    console.log("state records componentDid editbankdata: ", this.state.records)
    this.setState({
      user: user,
      records: records
    })
    // fetch('/bankRecords/' + user)
    //   .then(response => response.json())
    //   .then(response => this.setState({records: response}))
    }


  render() {
    let user = this.props.user
    let records = this.props.records
    console.log("props records render() editbankdata: ", this.props.records)
    console.log("state records render() editbankdata: ", this.state.records)
    // let categName = this.state.records.map((categ, index) => (
    //     {if (categ.Category !== "" || {categ.Category} !== undefined || {categ.Category} !== null) {
    //      {categ.Category} } else { } }</option>
    //   ))

    let mappedItems = this.props.records.map((records, index) => (
          <section onClick={this.change} className="row z-depth-1" key={index}>
                <div className='col s3' data-key={index}>{records.TransDate} {records.PostedDate}</div>
                <div className='col s3' data-key={index}>{records.Description}</div>
                <div className='col s3' data-key={index}>{records.Amount}</div>
                <div className='col s2'>

                  <select name='' className="browser-default " value={this.state.value} data-key={index} onChange={this.categoryChange}>
                    <option value="" disabled  selected >{records.Category}</option>
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

          </section>  ))
    return (
      <div>{mappedItems}</div>
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
