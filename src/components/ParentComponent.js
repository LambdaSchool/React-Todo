import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ClassComponentIteratingState extends Component {
  constructor() {
    super();
    this.state = {
      ingredients: ['flour', 'eggs', 'milk', 'sugar', 'vanilla', 'butter'],
      newIngredient: ''
    };
  }

  handleIngredientInput = (event) => {
    this.setState({ newIngredient: event.target.value });
  }

  addIngredient = (event) => {
    event.preventDefault();
    const ingredientsList = this.state.ingredients;
    ingredientsList.push(this.state.newIngredient);
    this.setState({
      newIngredient: '',
      ingredients: ingredientsList
    });
  }

  render() {
    return (
      <div>
        {this.state.ingredients.map(ingredient => <ChildComponent thing={ingredient} />)}
        <form onSubmit={this.addIngredient}>
          <input onChange={this.handleIngredientInput} placeholder="Add a new ingredient" value={this.state.newIngredient} />
        </form>
      </div>
    );
  }
}

export default ClassComponentIteratingState;