import React, { Component } from 'react';
import { Form, Input, Alert } from 'antd';
import PaddedForm from './padded-form';
import IconButton from '../icon-button';

class SignUpForm extends Component {
  checkConfirm = (rule, value, cb) => {
    const currentPassword = this.props.form.getFieldValue('password');
    if (value && value !== currentPassword) {
      cb('Passwords do not match.');
    } else {
      cb();
    }
  };

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
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Email is required.' }]
          })(<Input type="email" placeholder="Email" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Username is required.' }]
          })(<Input placeholder="Username" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [
              { required: true, message: 'Password is required.' },
              { len: 8, message: 'Password must be at least 8 characters.' }
            ]
          })(<Input type="password" placeholder="Password" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('confirmPassword', {
            rules: [
              { required: true, message: 'Confirm Password is required.' },
              { validator: this.checkConfirm }
            ]
          })(<Input type="password" placeholder="Confirm password" />)}
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
          <IconButton text="Sign Up" icon="right" loading={loading} />
        </Form.Item>
      </PaddedForm>
    );
  }
}

export default Form.create()(SignUpForm);
