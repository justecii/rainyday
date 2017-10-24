import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class EditBankData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records: []
    }
    this.deleteTransaction = this.deleteTransaction.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  deleteTransaction(e) {
    e.preventDefault();
    let i = e.target.getAttribute('data-key');
    let currentState = this.state.records;
    let trans = this.state.records[i]._id;
    let a = this;
    axios.put('/bankRecords', {
      data: trans
    }).then(function (response) {
      currentState.splice(i, 1);
      a.setState({
        records: currentState
      })
    }).catch(function (error) {
      console.log("error: ", error);
    })
  }

  componentDidMount() {

    fetch('/bankRecords')
      .then(response => response.json())
      .then(response => this.setState({records: response}))
    }


  render() {

    return (
        this.state.records.map((records, index) => (
          <table className="highlight centered responsive-table" key={index}>
            <tbody>
              <tr>
                <td>{records.TransDate}</td>
                <td>{records.Description}</td>
                <td>{records.Amount}</td>
                <td> <a className='dropdown-button btn ' href='#' data-activates='dropdown1'>Catigorize!</a></td>
                <ul id='dropdown1' className='dropdown-content'>
                  <li><a href="#!">Entertainment</a></li>
                  <li><a href="#!">Transportation</a></li>
                  <li><a href="#!"> Dinning out</a></li>
                  <li><a href="#!">Clothing</a></li>
                </ul>
                <a class="waves-effect waves-light btn-large red" data-key={index} onClick={this.deleteTransaction}>Delete</a>
              </tr>
            </tbody>
          </table>  ))
    );
  }
}
export default EditBankData;
