import React, { Component } from 'react';
import { connect } from 'react-redux';
import { init } from '../actions/auth-actions';
import Home from './home/home';

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
    return <Home />;
  }
}

export default connect(null, mapDispatchToProps)(App);
