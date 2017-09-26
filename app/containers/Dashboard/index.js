/*
 *
 * Dashboard
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';

import './style.css';
import './styleM.css';

export default class Dashboard extends React.PureComponent {
  constructor()
  {
    super();
    this.state = {
      food:'',
      calories:'',
      carbs: '',
      sugars: '',
      fat:'',
      allergens:'',
      logs:[]
    }
  }

showLogs = () => {
  fetch('http://localhost:8000/api/getLogss',{
    method: 'GET'
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    this.setState({
      logs:json.logs
    })
  }.bind(this))
}

componentWillMount() {
  this.showLogs();
}


  render() {
    return (
      <div className="container">
        <Helmet title="Dashboard" meta={[ { name: 'description', content: 'Description of Dashboard' }]}/>

            <div className="out-div"><input type="submit" value="sign-out" className="sign-out"/></div>
              <h2 className="food-welcome">Food Trakr</h2>
              <div className="dash-div"><Link to={'/Newlog'} className="add-new-dash">Add new</Link></div>
        <div className="dashboard-container">

            <div className="logs">
            {this.state.logs.map((log, index) => (
              <div className='log'><p>food: {log.food} calories: {log.calories}  fat: {log.fat} Sugar:.. {log.sugars} carbs:.. {log.carbs} Allergens:.. {log.allergens} </p></div>
            ))}
            </div>


        </div>

      </div>
    );
  }
}

Dashboard.contextTypes = {
  router: React.PropTypes.object
};
