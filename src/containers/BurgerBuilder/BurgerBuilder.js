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
    purchasable: false,
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

    const newTotalPrice = this.updateTotalPrice(type, value);
    const newPurchasable = this.updatePurchasable(newIngredients);

    this.setState({
      ingredients: newIngredients,
      totalPrice: newTotalPrice,
      purchasable: newPurchasable,
    });
  }

  updateTotalPrice = (type, value) => {
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + (value * INGREDIENTS_PRICE[type]);
    return newPrice;
  }

  updatePurchasable = (newIngredients) => {
    const totalIngredients = Object.keys(newIngredients)
      .map(key => newIngredients[key])
      .reduce((accumulator, currentValue) => accumulator + currentValue);
    const newPurchasable = totalIngredients > 0;
    return newPurchasable;
  }

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          totalPrice={this.state.totalPrice}
          addIngredient={this.addIngredient}
          removeIngredient={this.removeIngredient}
          purchasable={this.state.purchasable}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
