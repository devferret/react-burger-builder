import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../hoc/Aux';
import classes from './Layout.css';

class Layout extends PureComponent {
  render() {
    return (
      <Aux>
        <div>Toolbar , SideDrawer, Backdrop</div>
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
