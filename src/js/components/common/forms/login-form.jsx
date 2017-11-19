import React, { Component } from 'react';
import { Form, Input, Alert } from 'antd';
import PaddedForm from './padded-form';
import IconButton from '../icon-button';

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
          <IconButton text="Log In" icon="right" loading={loading} />
        </Form.Item>
      </PaddedForm>
    );
  }
}

export default Form.create()(LoginForm);
