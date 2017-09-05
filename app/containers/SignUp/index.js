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
  render() {
    return (
      <div className="container-signup">
        <Helmet title="SignUp" meta={[ { name: 'description', content: 'Description of SignUp' }]}/>

        <div className="sign">
          
            <div className="inputWrapper">
              <h2 className="inputInfo"> Sign up to track your food!</h2>
              <input type="text" value="Name" className="name"/>
              <input type="text" value="E-mail" className="email" />
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
