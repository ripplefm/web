import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { init } from '../actions/oauth-actions';
import LandingPage from './landing-page';
import Dashboard from './dashboard';
import Stations from './stations/stations';
import '../../css/common/common.css';

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
    return [
      <Route
        key="home"
        path="/"
        exact
        component={loggedIn ? Dashboard : LandingPage}
      />,
      <Route key="stations" path="/stations" component={Stations} />
    ];
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
