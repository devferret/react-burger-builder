import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios.config';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

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
    loading: false,
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

  purchasingCheckout = async () => {
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'testName testSurname',
        address: 'testAddress',
        email: 'test@test.com',
      },
    };
    await axios.post('/orders.json', order);
    this.setState({
      purchasing: false,
      loading: false,
    });
  }

  render() {
    const orderSummary = this.state.loading ? <Spinner /> :
      (<OrderSummary
        ingredients={this.state.ingredients}
        purchasingToggle={this.purchasingToggle}
        purchasingCheckout={this.purchasingCheckout}
        totalPrice={this.state.totalPrice}
      />);

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          toggle={this.purchasingToggle}
        >
          { orderSummary }
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

export default withErrorHandler(BurgerBuilder, axios);
