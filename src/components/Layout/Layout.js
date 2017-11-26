import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: true,
  };

  sideDrawerToggle = () => {
    this.setState({ showSideDrawer: !this.state.showSideDrawer });
  }

  render() {
    return (
      <Aux>
        <Toolbar />
        <SideDrawer
          display={this.state.showSideDrawer}
          sideDrawerToggle={this.sideDrawerToggle}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
