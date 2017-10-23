import React, { Component } from 'react';
import './App.css';


class EditBankData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childProp:""
    }
  }



  render() {

    return (
      <div className="EditBankDataWrapper">
        <p>Edit Bank Data Page</p>
      </div>
    );
  }
}
export default EditBankData;
