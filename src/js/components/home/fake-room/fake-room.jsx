import React from 'react';
import styled from 'react-emotion';
import FakeNav from './fake-nav';
import FakeSidebar, { IconTab } from './fake-sidebar';
import FakePlayer from './fake-player';
import FakeChat from './fake-chat';
import FakeSwipeTabs from './fake-swipe-tabs';

const Room = styled.div`
  position: relative;
  background: #212121;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 0.3rem;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  transform-style: preserve-3d;
  transform-origin: center center;
  transform: skew(0deg) rotateY(-35deg);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  border-right: 4px solid #101;

  @media (max-width: 768px) {
    transform: skew(-2deg) rotateY(-35deg);
    flex-direction: column;
    flex-wrap: none;
  }
`;

export default () => (
  <Room>
    <FakeNav>
      <img src="/test.png" alt="ripple.fm logo" />
      <h5>ripple.fm</h5>
    </FakeNav>
    <FakeSidebar>
      <IconTab icon="search" />
      <IconTab icon="solution" />
      <IconTab icon="clock-circle-o" />
    </FakeSidebar>
    <FakePlayer src="/hero.webm" />
    <FakeChat />
    <FakeSwipeTabs>
      <IconTab icon="search" />
      <IconTab icon="solution" />
      <IconTab icon="clock-circle-o" />
      <IconTab icon="message" active />
    </FakeSwipeTabs>
  </Room>
);
