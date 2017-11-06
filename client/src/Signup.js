import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({name: e.target.value})
  }
  handleEmailChange(e) {
    this.setState({email: e.target.value})
  }
  handlePasswordChange(e) {
    this.setState({password: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    let a = this;
    axios.post('/auth/signup', {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }).then(result => {
      console.log(result.data)
      localStorage.setItem('mernToken', result.data.token)
      a.props.lift(result.data.token, result.data.user.id)
      console.log("handlesubmit() sign up results.data: ", result.data.user.id)
      
    })
  }

  render() {
    return (
  
      <div className="row">
        <div className='movedown'></div>
        <h1>Sign Up</h1>
        <div className='movedownalittle'></div>
          
          <form onSubmit={this.handleSubmit} className='col s6 offset-s3 z-depth-5 padding movedownalittle'>
            <div className='movedown'></div>
            <h5 className='left'> Name: </h5><input type='text' value={this.state.name} onChange={this.handleNameChange} /><br />
            <div className='movedown'></div>
            <h5 className='left'> Email: </h5><input type='text' value={this.state.email} onChange={this.handleEmailChange} /><br />
            <div className='movedown'></div>
            <h5 className='left'> Password:  </h5><input type='password' value={this.state.password} onChange={this.handlePasswordChange} /><br />
            <div className='movedownalittle'></div>
            <input  
              type='submit' 
              value='Sign up' 
              className='col s12 waves-effect waves-light btn movedownalittle movedownmore #263238 blue-grey darken-4'  />
            <div className='movedown'></div>
            <div className='movedownmore'></div>
          </form>
      </div>
    );
  }
}

export default Signup;
