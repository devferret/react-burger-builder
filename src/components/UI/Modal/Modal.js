import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.show !== this.props.show;
  }

  render() {
    return (
      <Aux>
        <Backdrop
          show={this.props.show}
          toggle={this.props.purchasingToggle}
        />
        <div
          className={classes.Modal}
          style={{
        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: this.props.show ? '1' : '0',
      }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  show: PropTypes.bool.isRequired,
  purchasingToggle: PropTypes.func.isRequired,
};

export default Modal;
