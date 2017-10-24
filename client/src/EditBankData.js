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

    /* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
    myFunction(e) {
        document.getElementById("myDropdown").classNamek.toggle("show");
    }

    // Close the dropdown menu if the user clicks outside of it
    onClick(e) {
      if (!e.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }

  render() {

    return (
      <div className="EditBankDataWrapper">
        <p>Edit Bank Data Page</p>
        <div className="bankContainer">
          <ul>
              {this.state.records.map((records, index) => (<li className="card" key={index}>
                  {records.Description} {records.Type}<br/> {records.Amount} <br/>{records.PostDate} {records.TransDate}
                  

          </li>))}
          </ul>

        </div>
      </div>
    );
  }
}
export default EditBankData;
