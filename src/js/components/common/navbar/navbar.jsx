import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../../actions/oauth-actions';
import Nav from './nav';
import Logo from './logo';
import Title from './title';
import Column from '../column';
import UserDropdown from './user-dropdown';
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
  state = { loginUrl: '', registerUrl: '' };

  async componentDidMount() {
    const loginUrl = await getLoginUrl();
    const registerUrl = await getRegisterUrl();
    this.setState({ loginUrl, registerUrl });
  }

  render() {
    const { loginUrl, registerUrl } = this.state;
    const { padded, transparent, user, logout, hideLogo } = this.props;
    return (
      <Nav className="navbar" padded={padded} transparent={transparent}>
        <Link to="/">
          <Column>
            {hideLogo ? null : <Logo />}
            <Title fontSize="1.25rem">ripple.fm</Title>
          </Column>
        </Link>
        <Column>
          <h2>
            {user && !user.isGuest ? (
              <UserDropdown user={user} logout={logout} />
            ) : (
              <div>
                <a href={loginUrl}>Log In</a>
                <a href={registerUrl}>Sign Up</a>
              </div>
            )}
          </h2>
        </Column>
      </Nav>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
