import React, { Component } from 'react';
import './App.css';

class SavingsSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savings: [],
      amountTotal: [],
      totalPerCat: [],
      avgAmountPerCat: [],
      modalCat: [],
      user: {}

    }
    this.check = this.check.bind(this);
  }

  componentDidMount() {
    let user = this.props.user
    this.setState({
      user: user
    })
    fetch('/bankRecords/SavingsSummary/' + user)
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
        this.setState({
          savings: response,
          totalPerCat: catAndAmount,
          total: total
        })
      })
    }



  render() {
    
    let total = this.state.total;
    let user = this.props.user

    return (

      <div >
        <div className="col s3"></div>
        <div className="col s3">{total}</div>
        <br />
          {this.state.totalPerCat.map((catTot, index) => {
              <div> {console.log("catTot: ", catTot)} {catTot}</div>
          })}

        {this.state.savings.map((saving, index) => (
          <section key={index} onClick={this.check}>
              <span>{saving.Description}</span>
              <span>{saving.Amount}</span>
              <span>{saving.Category}</span>
          </section> ))}


      </div>
    )
  }
}
export default SavingsSummary;
