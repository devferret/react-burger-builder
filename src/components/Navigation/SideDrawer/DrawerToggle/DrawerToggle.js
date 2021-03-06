import React from 'react';
import PropTypes from 'prop-types';

import classes from './DrawerToggle.css';

const drawerToggle = props => (
  <div
    className={classes.DrawerToggle}
    onClick={props.toggle}
  >
    <div />
    <div />
    <div />
  </div>
);

drawerToggle.propTypes = {
  toggle: PropTypes.func.isRequired,
};

export default drawerToggle;
