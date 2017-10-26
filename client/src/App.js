import React, { Component } from 'react';
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
//////////////////////////////////////////////////
// may not need EditBankData here
// import EditBankData from './EditBankData';
//////////////////////////////////////////////////
import UserData from './UserData.js';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: {},
      user: 1
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
    // if(this.state.token!==""){ //need this active to use auth
  if(true){
      return (
        <Router>
          <div className='row'>
            <nav className="RouterLinks  #00838f cyan darken-3  navbar">
            <div className="nav-wrapper">
            <a href="/homeReactRoute" className="brand-logo right"><i className="material-icons left">beach_access RainyDay </i></a>
            <a href="/homeReactRoute" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>

              <div className='hide-on-med-and-down'>
              <Link to="/homeReactRoute" className="btn btn-large #99d3df cyan darken-3 ">Home</Link>
              <Link to="/savingsReactRoute" className="btn btn-large #88bbd6 cyan darken-3 ">Savings</Link>
              <Link to="/bankRecordsReactRoute" className="btn btn-large #00838f cyan darken-3 ">Bank Records</Link>
              <Link to="/userDataReactRoute" className="btn btn-large #00838f cyan darken-3 ">User Data</Link>
              </div>
              <div className="side-nav row" id="mobile-demo">
              <Link to="/homeReactRoute" className="btn btn-large #99d3df cyan darken-3 col s12 ">Home</Link>
              <Link to="/savingsReactRoute" className="btn btn-large #88bbd6 cyan darken-3 col s12">Savings</Link>
              <Link to="/bankRecordsReactRoute" className="btn btn-large #00838f cyan darken-3 col s12">Bank Records</Link>
              <Link to="/userDataReactRoute" className="btn btn-large #00838f cyan darken-3 col s12">User Data</Link>
              </div>
             </div>
            </nav>
            <div>
              <Route
              exact path="/homeReactRoute"
              render={() => <Home childProp={this.state.childProp} />}/>
              <Route exact path="/savingsReactRoute"
                  render={() => <Savings user={this.state.user} />}
              />
              <Route exact path="/bankRecordsReactRoute"
                  render={() => <BankRecords user={this.state.user} />}
                />
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
