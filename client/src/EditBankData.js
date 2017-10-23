import React, { Component } from 'react';
import './App.css';


class EditBankData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records: []
    }
  }

  componentDidMount() {
    // fetch('/animals') //this will proxy the request to our backend
    //   .then(response => response.text())
    //   .then(response => this.setState({foo: response})) //set foo equal to our response
                                                        //form '/animals' in mern-backend/routes/animals.j
    fetch('/bankRecords')
      .then(response => response.json())
      .then(response => this.setState({records: response}))
    }


  render() {

    return (
      <div className="EditBankDataWrapper">
        <p>Edit Bank Data Page</p>
        <ul>
            {this.state.records.map((records, index) => (<li className="card" key={index}>
                {records.Description} {records.Type} {records.Amount} {records.PostDate} {records.TransDate}
             </li>))}
        </ul>
      </div>
    );
  }
}
export default EditBankData;
