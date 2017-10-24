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

  render() {
    return (
      <Router>
        <div>
          <div className="RouterLinks TheseWillBeCards">
            <Link to="/homeReactRoute">Home</Link>
            <Link to="/savingsReactRoute">Savings</Link>
            <Link to="/bankRecordsReactRoute">Bank Records</Link>
            <Link to="/userDataReactRoute">User Data</Link>
          </div>
          <div>
            <Route
            exact path="/homeReactRoute"
            render={() => <Home childProp={this.state.childProp} />}/>
            <Route exact path="/savingsReactRoute" component={Savings} />
            <Route exact path="/bankRecordsReactRoute" component={BankRecords} />
            <Route exact path="/bankRecordsReactRoute" component={EditBankData} />
            <Route exact path="/userDataReactRoute" component={UserData} />
          </div>

          <div className="App">
            <div className="SignupBox">
              <Signup lift={this.liftTokenToState} />
            </div>
            <div className="LoginBox">
              <Login lift={this.liftTokenToState} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
