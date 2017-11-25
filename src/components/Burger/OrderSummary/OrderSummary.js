import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';

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
    </Aux>
  );
};

orderSummary.propTypes = {
  ingredients: PropTypes.object,
};

orderSummary.defaultProps = {
  ingredients: {},
};

export default orderSummary;
