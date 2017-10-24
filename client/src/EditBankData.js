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
          <table className="highlight centered responsive-table row" key={index}>
            <tbody>
              <tr>
                <td className='col s3'>{records.TransDate}</td>
                <td className='col s3'>{records.Description}</td>
                <td className='col s3'>{records.Amount}</td>
                <td className='col s2'> <a className='dropdown-button btn '  data-activates='dropdown1'>Catigorize!</a></td>
                <ul id='dropdown1' className='dropdown-content'>
                  <li ><a>Entertainment</a></li>
                  <li><a >Transportation</a></li>
                  <li><a href="#!"> Dinning out</a></li>
                  <li><a href="#!">Clothing</a></li>   
                </ul>
                <td className="waves-effect waves-light btn red col s1 " data-key={index} onClick={this.deleteTransaction}>Delete</td>
              </tr>
            </tbody>
          </table>  ))
    );
  }
}
export default EditBankData;
