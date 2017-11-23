import React from 'react';
import styled from 'react-emotion';

const SideBar = styled.div`
  height: calc(100vh - 48px);
  width: 20%;
  background: pink;
  position: absolute;
  top: 48px;
  left: 0px;
  transform: translateX(calc(55px - 20vw));
  z-index: 2;

  @media (max-width: 992px) {
    display: none;
  }
`;

export default SideBar;
