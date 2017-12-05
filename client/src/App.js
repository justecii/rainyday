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
import {Button, SideNav, SideNavItem } from 'react-materialize';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: localStorage.mernToken,
      user: localStorage.userId
    }
    this.liftTokenToState = this.liftTokenToState.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }
  
  liftTokenToState(token, user) {
    this.setState({
      token: token,
      user: user
    })
  }
  
  handleLogout(e) {
    e.preventDefault()
    localStorage.removeItem('mernToken')
    localStorage.removeItem('userId')
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

  render() {
    let user = this.state.user

    // if the token exists display the router
    if(this.state.token !== "" && this.state.token !== undefined){ //need this active to use auth
  // if(true){
      return (
        <Router>
          <div className='row'>
            <nav className="RouterLinks  #263238 blue-grey darken-4  navbar">
            <div className="nav-wrapper">
            <a href="/" className="brand-logo right"><i className="material-icons left">beach_access </i>RainyDay </a>
              <div className='hide-on-small-and-down'>
              <Link to="/" className="btn #263238 blue-grey darken-4 ">Home</Link>
              <Link to="/savingsReactRoute" className="btn #263238 blue-grey darken-4 ">Savings</Link>
              <Link to="/bankRecordsReactRoute" className="btn #263238 blue-grey darken-4 ">Bank Records</Link>
              <Link to="/userDataReactRoute" className="btn #263238 blue-grey darken-4 ">User Data</Link>
              <a className="btn #263238 blue-grey darken-4#263238 blue-grey darken-4 " onClick={this.handleLogout}>Log Out</a>
              </div>
              <SideNav 
                trigger={<Button className="show-on-small hide-on-med-and-up" > $$$</Button>}
                options={{ closeOnClick: true }}
                >
                <SideNavItem userView
                  user={{
                    background: 'img/umbrellas.png',
                    image: 'img/liz.png',
                    name: 'John Doe',
                    email: 'jdandturk@gmail.com'
                  }}
                />
                <SideNavItem divider />
                <SideNavItem > <Link to="/" className=" #99d3df cyan darken-3  " >Home</Link></SideNavItem>
                <SideNavItem divider />
                <SideNavItem> <Link to="/savingsReactRoute" className="btn btn-large #88bbd6 cyan darken-3 col s12">Savings</Link></SideNavItem>
                <SideNavItem divider />
                <SideNavItem><Link to="/bankRecordsReactRoute" className="btn btn-large #00838f cyan darken-3 col s12">Bank Records</Link></SideNavItem>
                <SideNavItem divider />
                <SideNavItem><Link to="/userDataReactRoute" className="btn btn-large #00838f cyan darken-3 col s12">User Data</Link></SideNavItem>
                <SideNavItem divider />
                <SideNavItem><a className="btn btn-large #00838f cyan darken-3 col s12" onClick={this.handleLogout} user={this.state.user}>Log Out</a></SideNavItem>
                <SideNavItem divider />
              </SideNav>
             </div>
            </nav>
            <div>
              <Route exact path="/"
                render={() => <Home childProp={this.state.childProp} logout={this.logout} />}
              />
              <Route exact path="/login"
                render={() => <Home childProp={this.state.childProp} logout={this.logout} />}
              />
              <Route exact path="/signup"
                render={() => <Home  />}
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
            <nav className="RouterLinks  #263238 blue-grey darken-4  navbar">
               <div className="nav-wrapper">
                 <a href="/" className="brand-logo right"><i className="material-icons left">beach_access </i>RainyDay </a>
                 <div className='left'>
                    <Link to="/Signup" className="btn btn-large #263238 blue-grey darken-4 ">Sign up</Link>
                    <Link to="/Login" className="btn btn-large #263238 blue-grey darken-4 ">Login</Link>
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