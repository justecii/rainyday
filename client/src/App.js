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
import EditBankData from './EditBankData';
//////////////////////////////////////////////////
import UserData from './UserData.js';
import Logout from './Logout';
import {Button, Icon, Parallax, Carousel, Modal} from 'react-materialize';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: '',
      user: {}
    }
    this.liftTokenToState = this.liftTokenToState.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }
  liftTokenToState(token, user) {
    console.log("token: ", token)
    console.log("user: ", user)
    this.setState({
      token: token,
      user: user
  })
  }
  handleLogout(e) {
    e.preventDefault()
    localStorage.removeItem('mernToken')
    this.setState({token: '', user: {}})
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
  componentDidMount() {
    let user = this.props.user
    this.setState({
      user: user
    })
    // console.log("user props: ", this.props.user)
    // console.log("user state: ", this.state.user)
    }
  render() {
<<<<<<< HEAD
    console.log("XXXXXXXXXX: ", this.state)
    let user = this.state.user
=======
    // console.log("XXXXXXXXXX: ", this.state)
    let user = this.props.user
>>>>>>> 20f95289062eb4659571de61300566538066c1eb
    console.log("user in client/App.js: ", user);
    console.log("APP.JS STATE", this.state)
    // if the token exists display the router
    if(this.state.token!==""){ //need this active to use auth
  // if(true){
      return (
        <Router>
          <div className='row'>
            <nav className="RouterLinks  #00838f cyan darken-3  navbar">
            <div className="nav-wrapper">
            <a href="/" className="brand-logo right"><i className="material-icons left">beach_access </i>RainyDay </a>
            <a href="/" className="button-collapse "><i className="material-icons">menu</i></a>
              <div className='hide-on-sm-and-down'>
              <Link to="/" className="btn btn-large #99d3df cyan darken-3 ">Home</Link>
              <Link to="/savingsReactRoute" className="btn btn-large #88bbd6 cyan darken-3 ">Savings</Link>
              <Link to="/bankRecordsReactRoute" className="btn btn-large #00838f cyan darken-3 ">Bank Records</Link>
              <Link to="/userDataReactRoute" className="btn btn-large #00838f cyan darken-3 ">User Data</Link>
              <a className="btn btn-large #00838f cyan darken-3 " onClick={this.handleLogout}>Log Out</a>
              </div>
              <div className="side-nav row " id="mobile-demo">
              <Link to="/" className="btn btn-large #99d3df cyan darken-3 col s12 ">Home</Link>
              <Link to="/savingsReactRoute" className="btn btn-large #88bbd6 cyan darken-3 col s12">Savings</Link>
              <Link to="/bankRecordsReactRoute" className="btn btn-large #00838f cyan darken-3 col s12">Bank Records</Link>
              <Link to="/userDataReactRoute" className="btn btn-large #00838f cyan darken-3 col s12">User Data</Link>
              <a className="btn btn-large #00838f cyan darken-3 col s12" onClick={this.handleLogout} user={this.state.user}>Log Out</a>
              </div>
             </div>
            </nav>
            <div>
              <Route exact path="/"
                render={() => <Home childProp={this.state.childProp} logout={this.logout} />}
              />
              <Route exact path="/login"
                render={() => <Home childProp={this.state.childProp} logout={this.logout} />}
              />
              <Route exact path="/savingsReactRoute"
                render={() => <Savings user={this.state.user} />}
              />
              <Route exact path="/bankRecordsReactRoute"
                render={() => <BankRecords user={this.state.user} />}
              />
              <Route exact path="/userDataReactRoute" 
                render={() => <UserData user={this.state.user} />}
              />
             
              
            </div>
          </div>
        </Router>
      );
    } else{ //if it doesn't exist go to the login page
      return(
        <Router>
        <div className="App">
                      
              <nav className="RouterLinks  #00838f cyan darken-3  navbar">
                 <div className="nav-wrapper">
                   <a href="/" className="brand-logo right"><i className="material-icons left">beach_access </i>RainyDay </a>
                   <div className='left'>
                      <Link to="/Signup" className="btn btn-large #00838f cyan darken-3 ">Sign up</Link>
                      <Link to="/Login" className="btn btn-large #00838f cyan darken-3 ">Login</Link>
                  </div>
                </div>
              </nav>
             <div>
             <Route exact path="/"
                render={() => <Home childProp={this.state.childProp} />}
              />
                <Route exact path="/Signup"
                render={() => <Signup lift={this.liftTokenToState} />}
              />
              <Route exact path="/Login"
                render={() => <Login lift={this.liftTokenToState} />}
              />
              
            </div>
          
        </div>
        </Router>
      )
    }
  }
}
export default App;