import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { init } from '../actions/auth-actions';
import Home from './home/home';
import Rooms from './rooms/rooms';

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

export default connect(null, mapDispatchToProps)(App);
