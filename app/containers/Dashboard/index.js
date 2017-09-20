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

            <input type="submit" value="sign-out" className="sign-out"/>
            <h2 className="food-welcome">Food Trakr</h2>
        <div className="dashboard-container">
          <input type="submit" value="Add New" className="add-new-dash"/>
            <div className="logs">

            </div>
        </div>
        
      </div>
    );
  }
}

Dashboard.contextTypes = {
  router: React.PropTypes.object
};
