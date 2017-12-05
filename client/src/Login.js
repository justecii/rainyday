import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value})
  }
  handlePasswordChange(e) {
    this.setState({password: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post('/auth/login', {
      email: this.state.email,
      password: this.state.password
    }).then(result => {
      localStorage.setItem('mernToken', result.data.token)
      localStorage.setItem('userId', result.data.user.id)
      this.props.lift(result.data.token, result.data.user.id)
    })
  }

  render() {
    return (
      <div className='row '>
        <div className='movedown'></div>
        <h3>Please Log In</h3>
        <div className='movedownalittle'></div>
        <form  onSubmit={this.handleSubmit} className='col s4 offset-s4 z-depth-5 padding movedownalittle'>
          <div className='movedownalittle'></div>
          <h5 className='left'> Email: </h5><input type='text' value={this.state.email} onChange={this.handleEmailChange} /><br />
          <div className='movedownalittle'></div>
          <h5 className='left'> Password:  </h5><input type='password' value={this.state.password} onChange={this.handlePasswordChange} /><br />
          <div className='movedownalittle'></div>
          <input 
            type='submit' 
            value='Login'  
            className='col s12 waves-effect waves-light btn movedownalittle movedownmore #263238 blue-grey darken-4' 
          />
          <div className='movedown'></div>
          <div className='movedown'></div>
          <div className='movedownmore'></div>
        </form>
      </div>
    );
  }
}

export default Login;
