import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleAuthModal } from '../../../actions/auth-actions';
import Nav from './nav';
import Logo from './logo';
import Title from './title';
import ClickableText from './clickable-text';
import Column from '../column';
import AuthModal from '../modals/auth-modal';

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    visible: state.auth.modalOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: tab => dispatch(toggleAuthModal(tab))
  };
};

class NavBar extends Component {
  render() {
    const { transparent, user, toggleModal, visible } = this.props;
    console.log('props', this.props);
    return (
      <Nav transparent={transparent}>
        <Column>
          <Logo />
          <Title>ripple.fm</Title>
        </Column>
        <Column>
          <h2>
            {user && !user.isGuest ? (
              user.username
            ) : (
              <div>
                <ClickableText onClick={() => toggleModal()}>
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
