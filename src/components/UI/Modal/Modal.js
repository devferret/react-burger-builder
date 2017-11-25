import React from 'react';
import PropTypes from 'prop-types';

import classes from './Modal.css';

const modal = props => (
  <div className={classes.Modal}>
    {props.children}
  </div>
);

modal.propTypes = {
  children: PropTypes.element.isRequired,
};

export default modal;
