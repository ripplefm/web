import React from 'react';
import styled from '@emotion/styled';
import { Icon } from 'antd';
import GradientBar from '../../../common/gradient-bar';
import FloatingButton from '../../../common/floating-button';

const Container = styled.div`
  flex: 1;
  margin-top: 32px;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h1 {
    color: white;
    font-weight: bolder;
    font-size: 2.75em;
    letter-spacing: 0.01em;
  }

  & p {
    margin-top: 16px;
    margin-left: 4px;
    font-size: 16px;
    max-width: 400px;
  }

  @media (max-width: 768px) {
    margin: 16px 64px;
  }
`;

export default () => (
  <Container>
    <h1>What is ripple.fm?</h1>
    <GradientBar margin="8px 4px" />
    <p>
      You can think of ripple.fm as a platform for collaborative radio stations.
      Take turns playing, listening, and reacting to tracks together in
      stations.
    </p>
    <FloatingButton type="primary" size="large" style={{ marginTop: '48px' }}>
      Discover Stations <Icon type="arrow-right" />
    </FloatingButton>
  </Container>
);
