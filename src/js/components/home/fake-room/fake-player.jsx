import React from 'react';
import styled from 'react-emotion';
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

export default ({ src }) => (
  <PlayerContainer>
    <Video src={src} autoPlay muted loop />
    <InfoContainer>
      <FakeText marginTop="8px" height="7px" width="200px" />
      <FakeText height="7px" width="128px" />
      <FakeText height="7px" width="80px" />
    </InfoContainer>
  </PlayerContainer>
);
