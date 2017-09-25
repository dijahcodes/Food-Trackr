/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

import SignUp from 'containers/SignUp';
import router from 'react-router';
import {Link} from 'react-router';


export default class Home extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>
        <div className="welcomed">
          <h1 className="welcome">Welcome to Food Trakr!</h1>
          <p>A website to track what exactly youre eating.</p>
          <Link to={'/SignUp'} className="button" value="sign-up">Sign-Up</Link>
        </div>
      </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object
};
