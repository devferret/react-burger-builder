import React from 'react';
import PropTypes from 'prop-types';

import classes from './Backdrop.css';

const backdrop = props => (
  <div
    className={classes.Backdrop}
    onClick={props.purchasingToggle}
    onKeyUp={() => {}}
    role="presentation"
  />
);

backdrop.propTypes = {
  purchasingToggle: PropTypes.func.isRequired,
};

export default backdrop;
