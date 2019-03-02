import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Tag } from 'antd';
import { logout } from '../../../actions/oauth-actions';
import Nav from './nav';
import Logo from './logo';
import Title from './title';
import Column from '../column';
import UserDropdown from './user-dropdown';
import FloatingButton from '../floating-button';
import { getLoginUrl, getRegisterUrl } from '../../../utils/oauth-utils';

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

class NavBar extends Component {
  onLoginClicked = async () => (window.location.href = await getLoginUrl());
  onSignUpClicked = async () => (window.location.href = await getRegisterUrl());

  render() {
    const { padded, transparent, user, logout, hideLogo } = this.props;
    return (
      <Nav className="navbar" padded={padded} transparent={transparent}>
        <Link to="/">
          <Column>
            {hideLogo ? null : <Logo white={transparent} />}
            <Title fontSize="1.75em">ripple.fm</Title>
            <Tag color="#ef5350">ALPHA</Tag>
          </Column>
        </Link>
        <Column>
          {user && !user.isGuest ? (
            <UserDropdown user={user} logout={logout} />
          ) : (
            <div style={{ zIndex: '1', marginTop: '16px' }}>
              <FloatingButton
                type="default"
                ghost
                onClick={this.onLoginClicked}
                style={{
                  color: 'white',
                  fontSize: '14px',
                  letterSpacing: '0.05em'
                }}
              >
                Log In
              </FloatingButton>
              <FloatingButton
                type="default"
                onClick={this.onSignUpClicked}
                style={{ fontSize: '14px', letterSpacing: '0.05em' }}
              >
                Sign Up
              </FloatingButton>
            </div>
          )}
        </Column>
      </Nav>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
