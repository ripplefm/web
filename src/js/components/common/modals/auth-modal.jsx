import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'react-emotion';
import { Modal, Tabs } from 'antd';
import {
  setAuthModalTab,
  login,
  registerUser,
  toggleAuthModal
} from '../../../actions/auth-actions';
import Logo from '../navbar/logo';
import LoginForm from '../forms/login-form';
import SignUpForm from '../forms/signup-form';
import '../../../../css/modals/auth-modal.css';

const Gradient = styled.div`
  width: calc(100% + 32px);
  height: 3px;
  background: linear-gradient(335deg, #e5cd5d, #ef5350);
  margin: -16px 0px 0px -16px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const mapStateToProps = state => {
  return {
    currentTab: state.auth.modalTab,
    loading: state.auth.loading,
    error: state.auth.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTabChange: tab => dispatch(setAuthModalTab(tab)),
    login: (emailOrUsername, password) =>
      dispatch(login(emailOrUsername, password)),
    register: (email, username, password) =>
      dispatch(registerUser(username, email, password)),
    toggle: () => dispatch(toggleAuthModal())
  };
};

class AuthModal extends Component {
  login = form => {
    const { emailOrUsername, password } = form.getFieldsValue();
    this.props.login(emailOrUsername, password);
  };

  register = form => {
    const { email, username, password } = form.getFieldsValue();
    this.props.register(email, username, password);
  };

  render() {
    const {
      visible,
      onCancel,
      loading,
      error,
      currentTab,
      onTabChange
    } = this.props;
    return (
      <Modal
        className="auth-modal"
        onCancel={onCancel}
        visible={visible}
        closable={false}
        footer={null}
      >
        <Gradient />
        <Logo
          large
          style={{
            position: 'absolute',
            top: '0px',
            left: '50%',
            transform: 'translate(-50%, -60%)',
            margin: '0px'
          }}
        />
        <Tabs
          activeKey={currentTab || 'login'}
          onChange={key => onTabChange(key)}
        >
          <Tabs.TabPane tab="LOG IN" key="login">
            <LoginForm onSubmit={this.login} loading={loading} error={error} />
          </Tabs.TabPane>
          <Tabs.TabPane tab="SIGN UP" key="signup">
            <SignUpForm
              onSubmit={this.register}
              loading={loading}
              error={error}
            />
          </Tabs.TabPane>
        </Tabs>
      </Modal>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthModal);
