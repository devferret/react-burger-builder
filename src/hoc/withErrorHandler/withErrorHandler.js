import React, { Component } from 'react';

import Aux from '../Aux';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WarppedComponent, axios) => class extends Component {
    state = { error: null };

    componentDidMount() {
      this.reqInterceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(
        res => res,
        err => this.setState({ error: err }),
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    render() {
      return (
        <Aux>
          {
            this.state.error ?
              <Modal
                show={!!this.state.error}
                toggle={() => this.setState({ error: null })}
              >
                <h3>{ this.state.error.message }</h3>
              </Modal> :
              null
          }
          <WarppedComponent {...this.props} />
        </Aux>
      );
    }
};

export default withErrorHandler;
