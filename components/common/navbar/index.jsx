import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { Tag } from 'antd';
import Nav from './nav';
import Logo from './logo';
import Title from './title';
import FloatingButton from '../buttons/floating-button';
import { getLoginUrl, getRegisterUrl } from '../../../lib/utils/oauth-utils';

const ButtonContainer = styled.div`
  z-index: 1;
  margin-top: 16px;
  margin-right: 16px;

  @media (max-width: 768px) {
    margin-top: 16px;
    margin-right: 8px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`;

const AlphaTag = styled(Tag)`
  @media (max-width: 768px) {
    display: none;
  }
`;

const onLoginClicked = async () => (window.location = await getLoginUrl());

const onSignupClicked = async () => (window.location = await getRegisterUrl());

const NavBar = ({ padded, transparent, user, hideLogo }) => (
  <Nav className="navbar" padded={padded} transparent={transparent}>
    <Link href="/">
      <LogoContainer>
        {hideLogo ? null : <Logo white={transparent} />}
        <Title fontSize="1.75em">ripple.fm</Title>
        <AlphaTag color="#ef5350">ALPHA</AlphaTag>
      </LogoContainer>
    </Link>
    {user ? (
      <h3>{user.username}</h3>
    ) : (
      <ButtonContainer>
        <FloatingButton
          type="default"
          ghost
          onClick={onLoginClicked}
          style={{ color: 'white', fontSize: '14px', letterSpacing: '0.05em' }}
        >
          Log In
        </FloatingButton>
        <FloatingButton
          type="default"
          onClick={onSignupClicked}
          style={{ fontSize: '14px', letterSpacing: '0.05em' }}
        >
          Sign Up
        </FloatingButton>
      </ButtonContainer>
    )}
  </Nav>
);

export default NavBar;
