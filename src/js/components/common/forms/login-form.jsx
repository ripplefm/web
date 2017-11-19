import React, { Component } from 'react';
import styled from 'react-emotion';
import { Form, Icon, Input, Button, Alert } from 'antd';

const PaddedForm = styled(Form)`
  margin-top: 16px;
  padding: 16px 64px;
`;

class LoginForm extends Component {
  render() {
    const { onSubmit, loading, error, form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <PaddedForm
        onSubmit={e => {
          e.preventDefault();
          onSubmit(form);
        }}
      >
        <Form.Item>
          {getFieldDecorator('emailOrUsername', {
            rules: [
              { required: true, message: 'Email or Username is required.' }
            ]
          })(<Input placeholder="Username or Email" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Password is required.' }]
          })(<Input type="password" placeholder="Password" />)}
        </Form.Item>
        <Form.Item>
          {error ? (
            <Alert
              style={{
                background: '#ef5350',
                borderColor: '#222',
                marginBottom: '16px'
              }}
              type="error"
              message={error.error}
              closable
            />
          ) : null}
          <Button type="primary" htmlType="submit" loading={loading}>
            Log In {loading ? null : <Icon type="right" />}
          </Button>
        </Form.Item>
      </PaddedForm>
    );
  }
}

export default Form.create()(LoginForm);
