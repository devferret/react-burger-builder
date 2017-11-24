import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENTS_PRICE = {
  salad: 0.1,
  bacon: 1.1,
  cheese: 0.6,
  meat: 1.5,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 0.2,
  }

  addIngredient = (type) => {
    this.updateIngredient(type, 1);
  }

  removeIngredient = (type) => {
    this.updateIngredient(type, -1);
  }

  updateIngredient = (type, value) => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + value;
    if (newCount < 0) return;
    const newIngredients = {
      ...this.state.ingredients,
    };
    newIngredients[type] = newCount;

    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + (value * INGREDIENTS_PRICE[type]);
    this.setState({
      ingredients: newIngredients,
      totalPrice: newPrice,
    });
  }

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredient}
          removeIngredient={this.removeIngredient}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
