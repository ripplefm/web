import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout, toggleAuthModal } from '../../../actions/auth-actions';
import Nav from './nav';
import Logo from './logo';
import Title from './title';
import ClickableText from './clickable-text';
import Column from '../column';
import UserDropdown from './user-dropdown';
import AuthModal from '../modals/auth-modal';

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    visible: state.auth.modalOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: tab => dispatch(toggleAuthModal(tab)),
    logout: () => dispatch(logout())
  };
};

class NavBar extends Component {
  render() {
    const {
      padded,
      transparent,
      user,
      toggleModal,
      visible,
      logout,
      hideLogo
    } = this.props;
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
                <ClickableText onClick={() => toggleModal('login')}>
                  login
                </ClickableText>
                <ClickableText onClick={() => toggleModal('signup')}>
                  sign up
                </ClickableText>
              </div>
            )}
          </h2>
        </Column>
        <AuthModal visible={visible} onCancel={toggleModal} />
      </Nav>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
