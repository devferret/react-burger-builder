import React from 'react';
import Proptypes from 'prop-types';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => [...Array(props.ingredients[igKey])]
      .map((_, i) => <BurgerIngredient key={igKey + i} type={igKey} />))
    .reduce((arr, el) => arr.concat(el), []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

Burger.propTypes = {
  ingredients: Proptypes.object,
};

Burger.defaultProps = {
  ingredients: {},
};

export default Burger;
