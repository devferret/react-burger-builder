import React from 'react';
import PropTypes from 'prop-types';

import classes from './SideDrawer.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const sideDrawer = (props) => {
  const sideDrawerClasses = props.display ?
    [classes.SideDrawer, classes.Open] :
    [classes.SideDrawer, classes.Close];

  return (
    <Aux>
      <Backdrop
        show={props.display}
        toggle={props.sideDrawerToggle}
      />
      <div className={sideDrawerClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

sideDrawer.propTypes = {
  display: PropTypes.bool.isRequired,
  sideDrawerToggle: PropTypes.func.isRequired,
};

export default sideDrawer;
