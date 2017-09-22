/*
 *
 * Newlog
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

export default class Newlog extends React.PureComponent {
  constructor()
  {
    super();
    this.state = {
      food:'',
      calories:'',
      fat:'',
      carbs:'',
      sugars:'',
      log:[]
    }
  }

  handleFood = (event) =>
  {
    this.setState({
      food:event.target.value
    })
  }

  handleCalories = (event) =>
  {
    this.setState({
      calories:event.target.value
    })
  }

  handleFat = (event) =>
  {
    this.setState({
      fat:event.target.value
    })
  }

  handleCarbs = (event) =>
  {
    this.setState({
      carbs:event.target.value
    })
  }

  handleSugar = (event) =>
  {
    this.setState({
      sugars:event.target.value
    })
  }
  

  storeFood = () =>
  {
    let data = new FormData();
    data.append('calories', this.state.calories);
    data.append('food', this.state.food);
    data.append('fat', this.state.fat);
    data.append('carbs', this.state.carbs);
    data.append('sugar', this.state.sugar);

    fetch('http://localhost:8000/api/storeLog', {
      method: 'POST',
      body: data
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      this.setState({
        log:json.log
      })
    }.bind(this))
  }

  render() {
    return (
      <div className="container">
        <Helmet title="Newlog" meta={[ { name: 'description', content: 'Description of Newlog' }]}/>

        <div className="background-holder">
          <div className="input-food">
          <h1>Create a food log.</h1>
          <div className="date-input"><span>Date</span><input type="text" value="Date" className="date"/></div>

          <div className="box-input"><span>Food </span><input type="text" value={this.state.food} className="food" label="Food" onChange={this.handleFood}/></div>

          <div className="input-boxes">

            <div className="box-input"><span>Calories </span><input type="text" value={this.state.calories} className="calories" onChange={this.handleCalories}/></div>
            <div className="box-input"><span>Fat </span><input type="text" value={this.state.fat} className="fat" obChange={this.handleFat}/></div>
            <div className="box-input"><span>Carbs </span><input type="text" value={this.state.carbs} className="carbs" onChange={this.handleCarbs}/></div>
            <div className="box-input"><span>Sugars </span><input type="text" value={this.state.sugars} className="sugars" onChange={this.handleSugar}/></div>
          </div>

        <div className="allergens">
            <h4> Contains:</h4>
            <span>Milk</span><input type="checkbox" value="milk" className="check-milk"/>
            <span>Egg</span><input type="checkbox" value="Egg" className="egg" />
            <span>Nuts</span><input type="checkbox" value="Nuts" className="nuts" />
            <span>Wheat</span><input type="checkbox" value="Wheat" className="wheat"/>
            <span>Soy</span><input type="checkbox" value="Soy" className="soy" />
            <span>Shellfish</span><input type="checkbox" value="Shellfish" className="shellfish" />
            <span>Fish</span><input type="checkbox" value="Fish" className="fish"/>
        </div>
            <button type="button" value="Add" onClick={this.storeFood()} className="add-new">Add</button>
            <input type="submit" value="Cancel" className="cancel-new" />
            </div>

        </div>
      </div>
    );
  }
}

Newlog.contextTypes = {
  router: React.PropTypes.object
};
