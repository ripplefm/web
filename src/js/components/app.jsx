import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { init } from '../actions/auth-actions';
import Home from './home/home';
import Rooms from './rooms/rooms';
import '../../css/common/common.css';

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
    return [
      <Route key="home" path="/" exact component={Home} />,
      <Route key="rooms" path="/rooms" component={Rooms} />
    ];
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
