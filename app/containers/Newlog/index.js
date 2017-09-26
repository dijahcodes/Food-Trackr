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
      allergens:{
        milk:0, egg:0, nuts:0, wheat:0, soy:0, shellfish:0, fish:0
      }
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

  handleAllergens = (allergen) =>
  {
    let badFood = this.state.allergens;
    if (allergen === "Milk")
    {
      badFood.milk = 1;
    }
    else if (allergen === "Egg")
    {
      badFood.egg = 1;
    }
    else if (allergen === "Nuts")
    {
      badFood.nuts = 1;
    }
    else if (allergen === "Wheat")
    {
      badFood.wheat = 1;
    }
    else if (allergen === "Soy")
    {
      badFood.soy = 1;
    }
    else if (allergen === "Shellfish")
    {
      badFood.shellfish = 1;
    }
    else if (allergen === "Fish")
    {
      badFood.fish = 1;
    }

    this.setState({
      allergens:badFood
    });
  }


  storeFood = () =>
  {
    let _this = this;
    let data = new FormData();

    data.append('calories', this.state.calories);
    data.append('food', this.state.food);
    data.append('fat', this.state.fat);
    data.append('carbs', this.state.carbs);
    data.append('sugars', this.state.sugars);
    data.append('allergens', JSON.stringify(this.state.allergens));



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
    _this.context.router.push("/Dashboard");
    }.bind(this))


  }

  render() {
    return (
      <div className="container">
        <Helmet title="Newlog" meta={[ { name: 'description', content: 'Description of Newlog' }]}/>

        <div className="background-holder">
          <div className="input-food">
          <h1>Create a food log.</h1>
          <div className="date-input"><span>Date</span><input type="text" className="date"/></div>

          <div className="box-input"><span>Food </span><input type="text" value={this.state.food} className="food" label="Food" onChange={this.handleFood}/></div>

          <div className="input-boxes">

            <div className="box-input"><span>Calories </span><input type="text" value={this.state.calories} className="calories" onChange={this.handleCalories}/></div>
            <div className="box-input"><span>Fat </span><input type="text" value={this.state.fat} className="fat" onChange={this.handleFat}/></div>
            <div className="box-input"><span>Carbs </span><input type="text" value={this.state.carbs} className="carbs" onChange={this.handleCarbs}/></div>
            <div className="box-input"><span>Sugars </span><input type="text" value={this.state.sugars} className="sugars" onChange={this.handleSugar}/></div>
          </div>

        <div className="allergens">
            <h4> Contains:</h4>
            <span>Milk</span><input type="checkbox" className="check-milk" onChange={()=> this.handleAllergens("Milk")}/>
            <span>Egg</span><input type="checkbox" className="egg" onChange={() => this.handleAllergens("Egg")}/>
            <span>Nuts</span><input type="checkbox" className="nuts" onChange={()=> this.handleAllergens("Nuts")}/>
            <span>Wheat</span><input type="checkbox" className="wheat" onChange={()=> this.handleAllergens("Wheat")}/>
            <span>Soy</span><input type="checkbox"  className="soy" onChange={()=> this.handleAllergens("Soy")} />
            <span>Shellfish</span><input type="checkbox"  className="shellfish" onChange={()=> this.handleAllergens("Shellfish")}/>
            <span>Fish</span><input type="checkbox" className="fish" onChange={()=> this.handleAllergens("Fish")}/>
        </div>
            <input type="submit" value="Add" onClick={this.storeFood} className="add-new"/>
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
