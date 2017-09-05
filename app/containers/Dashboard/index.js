/*
 *
 * Dashboard
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

export default class Dashboard extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Dashboard" meta={[ { name: 'description', content: 'Description of Dashboard' }]}/>

        //Remove this line and you can start writing your code here.
      </div>
    );
  }
}

Dashboard.contextTypes = {
  router: React.PropTypes.object
};
