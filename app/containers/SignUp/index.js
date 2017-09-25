/*
 *
 * SignUp
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

import router from 'react-router';
import {Link} from 'react-router';

export default class SignUp extends React.PureComponent {

constructor() {
  super();
  this.state = {
    username: "",
    password: "",
    email: "",
    dateOfBirth: ""
  }
}

handleName = (event) => {
  this.setState({
    username:event.target.value
  })
}

handleEmail = (event) => {
  this.setState({
    email:event.target.value
  })
}

handlePassword = (event) => {
  this.setState({
    password:event.target.value
  })
}

handleBirthDate = (event) => {
  this.setState({
    dateOfBirth:event.target.value
  })
}

signIn = () => {
  let _this = this;
  fetch('http://localhost:8000/api/signIn', {
    method: 'POST'
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    sessionStorage.setItem('token', json.token);
    _this.context.route.push('/Dashboard');
  })
};


  signUp = () => {
    let _this = this;
    let data = new FormData();
    data.append('username', this.state.username);
    console.log(this.state.username);
    data.append('password', this.state.password);
    console.log(this.state.password);
    data.append('dateOfBirth', this.state.dateOfBirth);
    console.log(this.state.dateOfBirth);
    data.append('email', this.state.email);
    console.log(this.state.email);

    fetch('http://localhost:8000/api/signUp', {
      method: 'POST',
      body:data
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      if(json.error) {
        alert(json.error);
      }
      else if(json.success) {
        alert(json.success);
        _this.context.router.push("/Dashboard");
      }
    }.bind(this))
  };




  render() {
    return (
      <div className="container-signup">
        <Helmet title="SignUp" meta={[ { name: 'description', content: 'Description of SignUp' }]}/>

        <div className="sign">

            <div className="inputWrapper">
              <h2 className="inputInfo"> Sign up to track your food!</h2>
              <span>Username</span><input type="text" placeholder="Username" onChange={this.handleName} value={this.state.username} className="username" />
              <input type="text" placeholder="Email" onChange={this.handleEmail} value={this.state.email} className="email" />
              <input type="password" placeholder="password" onChange={this.handlePassword} value={this.state.password} className="password" />
              <input type="date" placeholder="Date of Birth" onChange={this.handleBirthDate} value={this.state.dateOfBirth} className="birthDate" />
              <input type="submit" onClick={this.signUp} className="signUpButton" value="Sign-up!"/>

            </div>


        </div>
      </div>
    );
  }
}

SignUp.contextTypes = {
  router: React.PropTypes.object
};
