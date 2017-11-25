import React from 'react';
import PropTypes from 'prop-types';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = props => (
  <div className={classes.BuildControls}>
    <p>
      Total Price :
      <strong> ${props.totalPrice.toFixed(2)}</strong>
    </p>
    {
      controls.map(ctrl =>
        (<BuildControl
          key={ctrl.type}
          label={ctrl.label}
          addIngredient={() => props.addIngredient(ctrl.type)}
          removeIngredient={() => props.removeIngredient(ctrl.type)}
        />))
    }
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
    >
      Order Now
    </button>
  </div>
);

buildControls.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  purchasable: PropTypes.bool.isRequired,
};

export default buildControls;
