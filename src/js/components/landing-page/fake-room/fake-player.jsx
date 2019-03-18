import React from 'react';
import styled from '@emotion/styled';
import FakeText from './fake-text';

const Video = styled.video`
  width: 100%;
  height: 56.25%;

  @media (max-width: 768px) {
    height: calc(30vw * 0.5625);
  }
`;

const PlayerContainer = styled.div`
  width: calc(24vw - 32px);
  display: flex;
  flex-direction: column;
  flex: 1;
  z-index: ${props => (props.highlight === 'video' ? '1' : '0')};
  background: ${props => (props.highlight === 'video' ? '#212121' : '')};
  border: ${props => (props.highlight === 'video' ? '1px solid #ef5350' : '')};
  box-shadow: ${props =>
    props.highlight === 'video' ? '2px 2px 16px #ef5350' : ''};
  transform: ${props => (props.highlight === 'video' ? 'scale(1.05)' : '')};
  transition: all ease-in-out 250ms;

  @media (max-width: 768px) {
    width: 30vw;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default ({ src, highlight }) => (
  <PlayerContainer highlight={highlight}>
    <Video src={src} autoPlay muted loop />
    <InfoContainer>
      <FakeText marginTop="8px" height="7px" width="200px" />
      <FakeText height="7px" width="128px" />
      <FakeText height="7px" width="80px" />
    </InfoContainer>
  </PlayerContainer>
);
