import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
    purchasing: false,
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

  purchasingToggle = () => {
    this.setState({ purchasing: !this.state.purchasing });
  }

  render() {
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          purchasingToggle={this.purchasingToggle}
        >
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          totalPrice={this.state.totalPrice}
          addIngredient={this.addIngredient}
          removeIngredient={this.removeIngredient}
          purchasable={this.state.purchasable}
          purchasingToggle={this.purchasingToggle}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
