import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

//
class SavingsSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savings: [],
      amountTotal: [],
      totalPerCat: [],
      avgAmountPerCat: [],
      modalCat: []

    }
    this.check = this.check.bind(this);
  }

  check(e) {
    console.log(this.state.savings);
    console.log("totalPerCat: ", this.state.totalPerCat);
    console.log("total in check: ", this.state.total);
  }


  componentDidMount() {
    fetch('/bankRecords/SavingsSummary')
      .then(response => response.json())
      .then(response =>
        { let amountTotal = []
          let catAndAmount = []
          let total = 0
        for (var i = 0; i < response.length; i++) {
          amountTotal.push(response[i].Amount)
          catAndAmount.push(response[i])
        }
        for (var j = 0; j < response.length; j++) {
          delete catAndAmount[j].Description
          delete catAndAmount[j]._id
          delete catAndAmount[j].isSaved
          delete catAndAmount[j].userId
          delete catAndAmount[j].__v
          total = total + amountTotal[j]
        }

        console.log("total in fetch: ", total)
        this.setState({
          savings: response,
          totalPerCat: catAndAmount,
          total: total
        })})
    }



  render() {
    {console.log("total in render: ", this.state.total)}
    let total = this.state.total;

    return (

      <div>
        <div className="col s3"></div>
        <div className="col s3">{total}</div>
        <br />

        <div className="totalPerCat">
        { function

          this.state.totalPerCat.map((catTot, index) => {
            <div> {console.log("catTot: ", catTot)} </div>
        })}
        </div>

        {this.state.savings.map((saving, index) => (
          <div>
            <section onClick={this.check} key={index} onClick={this.check}>
              <span>{saving.Description}</span>
              <span>{saving.Amount}</span>
              <span>{saving.Category}</span>
            </section>
          </div> ))}

        </div>
    )
  }
}
export default SavingsSummary;
