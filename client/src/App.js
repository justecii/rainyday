import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Signup from './Signup';
import Login from './Login';
// import AuthenticatedRoute from './AuthenticatedRoute';
import Home from './Home.js';
import Savings from './Savings.js';
import BankRecords from './BankRecords.js';
import EditBankData from './EditBankData';
import UserData from './UserData.js';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: {},
      childProp:""
    }
    this.liftTokenToState = this.liftTokenToState.bind(this)
  }

  liftTokenToState(token) {
    this.setState({token: token})
  }

  isEmpty(obj) {
    for(var prop in obj) {
      if(obj.hasOwnProperty(prop)){
        return false;
      } else {
        return true;
      }
    }
  }

  render() {
    console.log("APP.JS STATE", this.state)
    //if the token exists display the router
    if(!this.isEmpty(this.state.token)){
      return (
        <Router>
          <div>
            <nav className="RouterLinks nav-wrapper #00838f cyan darken-3">
              <a href="/homeReactRoute" className="brand-logo right"><i className="material-icons left">beach_access</i></a>
              <Link to="/homeReactRoute" className="btn btn-large #00838f cyan darken-3 ">Home</Link>
              <Link to="/savingsReactRoute" className="btn btn-large #00838f cyan darken-3 ">Savings</Link>
              <Link to="/bankRecordsReactRoute" className="btn btn-large #00838f cyan darken-3 ">Bank Records</Link>
              <Link to="/userDataReactRoute" className="btn btn-large #00838f cyan darken-3 ">User Data</Link>
            </nav>
            <div>
              <Route
              exact path="/homeReactRoute"
              render={() => <Home childProp={this.state.childProp} />}/>
              <Route exact path="/savingsReactRoute" component={Savings} />
              <Route exact path="/bankRecordsReactRoute" component={BankRecords} />
              <Route exact path="/bankRecordsReactRoute" component={EditBankData} />
              <Route exact path="/userDataReactRoute" component={UserData} />
            </div>
          </div>
        </Router> 
      );
    } else{ //if it doesn't exist go to the login page
      return(
        <div className="App">
          <div className="SignupBox">
            <Signup lift={this.liftTokenToState} />
          </div>
          <div className="LoginBox">
            <Login lift={this.liftTokenToState} />
          </div>
        </div>
      )
    }
  }
}

export default App;
