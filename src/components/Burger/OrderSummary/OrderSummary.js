import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(key => (
      <li key={key}>
        <span style={{ textTransform: 'capitalize' }}>{key}</span>: {props.ingredients[key]}
      </li>
    ));

  return (
    <Aux>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients.</p>
      <ul>
        {ingredientSummary}
      </ul>
      <h4>Total price: ${props.totalPrice.toFixed(2)}</h4>
      <p>Continue to checkout ?</p>
      <Button
        btnType="Danger"
        clicked={props.purchasingToggle}
      >
        Cancel
      </Button>
      <Button btnType="Success">Continue</Button>
    </Aux>
  );
};

orderSummary.propTypes = {
  ingredients: PropTypes.object,
  purchasingToggle: PropTypes.func.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

orderSummary.defaultProps = {
  ingredients: {},
};

export default orderSummary;
