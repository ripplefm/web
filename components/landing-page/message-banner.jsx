import React from 'react';
import styled from '@emotion/styled';
import { Alert } from 'antd';

const BannerAlert = styled(Alert)`
  background: ${props => (props.type === 'error' ? '#ffb8b3' : 'darkgreen')};
  color: ${props => (props.type === 'error' ? '#ef5350' : 'lightgreen')};

  & .ant-alert-close-icon i {
    color: #212121;
  }
`;

const queryToMessage = query => {
  if (query && query.error && query.error === 'unauthorized') {
    return (
      <BannerAlert
        banner
        closable
        type="error"
        message="Must be logged in to view this page"
      />
    );
  } else if (query && query.activated && query.activated === 'true') {
    return (
      <BannerAlert
        banner
        closable
        type="success"
        message="Account successfully activated"
      />
    );
  } else if (query && query.activated && query.activated === 'false') {
    return (
      <BannerAlert
        banner
        closable
        type="error"
        message={
          query.activation_error === 'invalid_token'
            ? 'Invalid activation token'
            : 'Account has already been activated'
        }
      />
    );
  }
  return null;
};

export default ({ query }) => queryToMessage(query);
