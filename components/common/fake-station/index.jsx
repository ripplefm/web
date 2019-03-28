import React from 'react';
import styled from '@emotion/styled';
import FakeNav from './fake-nav';
import FakeSidebar, { IconTab } from './fake-sidebar';
import FakePlayer from './fake-player';
import FakeChat from './fake-chat';
import FakeSwipeTabs from './fake-swipe-tabs';

const Station = styled.div`
  position: relative;
  background: #212121;
  overflow: ${props => (props.highlight === undefined ? 'hidden' : 'visible')};
  width: 100%;
  height: 100%;
  border-radius: 0.3rem;
  box-shadow: 16px 8px 28px rgba(0, 0, 0, 0.25),
    8px 4px 10px rgba(0, 0, 0, 0.22);
  transform-style: preserve-3d;
  transform-origin: center center;
  ${props =>
    props.skewDisabled ? '' : 'transform: skew(0deg) rotateY(-35deg)'};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  border-right: 4px solid #101;

  @media (max-width: 768px) {
    ${props =>
      props.skewDisabled ? '' : 'transform: skew(-2deg) rotateY(-35deg)'};
    flex-direction: column;
    flex-wrap: none;
  }
`;

export default ({ skewDisabled, highlight }) => (
  <Station skewDisabled={skewDisabled} highlight={highlight}>
    <FakeNav highlight={highlight}>
      <img src="/static/images/logo.png" alt="ripple.fm logo" />
      <h5>ripple.fm</h5>
    </FakeNav>
    <FakeSidebar highlight={highlight}>
      <IconTab highlight={highlight} icon="search" />
      <IconTab highlight={highlight} icon="solution" />
      <IconTab highlight={highlight} icon="clock-circle-o" />
    </FakeSidebar>
    <FakePlayer src="/static/hero.webm" highlight={highlight} />
    <FakeChat highlight={highlight} />
    <FakeSwipeTabs highlight={highlight}>
      <IconTab highlight={highlight} icon="search" />
      <IconTab highlight={highlight} icon="solution" />
      <IconTab highlight={highlight} icon="clock-circle-o" />
      <IconTab highlight={highlight} icon="message" active />
    </FakeSwipeTabs>
  </Station>
);
