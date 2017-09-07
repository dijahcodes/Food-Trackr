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

export default class SignUp extends React.PureComponent {

constructor() {
  super();
  this.state = {
    username: "",
    password: "",
    email: "",
    birthDate: ""
  }
}

handleItem = (event) => {
  this.setState({
    username:event.target.value
  })
}

handleItem = (event) => {
  this.setState({
    password:event.target.value
  })
}


signUp = () => {
  let _this = this;
  fetch('http://localhost:8000/api/signUp', {
    method: 'POST'
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    if(json.success) {
      _this.signIn();
    }
  })
};

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



  render() {
    return (
      <div className="container-signup">
        <Helmet title="SignUp" meta={[ { name: 'description', content: 'Description of SignUp' }]}/>

        <div className="sign">

            <div className="inputWrapper">
              <h2 className="inputInfo"> Sign up to track your food!</h2>
              <p>name</p><input type="text" value="Name" className="name"/>
              <input type="text" value="E-mail" className="email" />
              <input type="password" value="Password" className="password" />
              <input type="text" value="Date of Birth" className="birthDate" />
              <input type="submit" value="Sign-up!" className="signUpButton" />

            </div>


        </div>
      </div>
    );
  }
}

SignUp.contextTypes = {
  router: React.PropTypes.object
};
