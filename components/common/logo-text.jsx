import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #333;
  margin-bottom: 12px;

  & img {
    width: 40px;
    height: 40px;
    margin-right: 12px;
  }

  & h1 {
    font-weight: normal;
    font-size: 2.25em;
    color: white;
    margin-top: 16px;
  }
`;

export default () => (
  <Container>
    <img src="/static/images/logo.png" alt="ripple.fm logo" />
    <h1>ripple.fm</h1>
  </Container>
);
