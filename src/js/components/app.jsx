import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { init } from '../actions/oauth-actions';
import LandingPage from './landing-page';
import Dashboard from './dashboard';
import '../../css/common/common.css';
import '../../css/common/scrollbar.css';

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.user !== undefined
  };
};

const mapDispatchToProps = dispatch => {
  return {
    init: () => dispatch(init())
  };
};

class App extends Component {
  componentDidMount() {
    this.props.init();
  }

  render() {
    const { loggedIn } = this.props;

    return (
      <Route
        key="home"
        path="/"
        component={loggedIn ? Dashboard : LandingPage}
      />
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
