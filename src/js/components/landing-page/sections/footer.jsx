import React from 'react';
import styled from 'react-emotion';
import { Icon } from 'antd';

const FooterContainer = styled.div`
  width: 100%;
  background: #111;
  padding: 16px 64px 16px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & img {
    width: 32px;
    height: 32px;
    margin-right: 8px;
  }

  & h1 {
    font-size: 2em;
    letter-spacing: 0.025em;
    color: white;
  }
`;

const FooterLink = styled.a`
  color: white;
  font-size: 2em;
`;

export default () => (
  <FooterContainer>
    <LogoContainer>
      <img src="/images/logo.png" alt="ripple.fm logo" />
      <h1>ripple.fm</h1>
    </LogoContainer>

    <div>
      <FooterLink href="https://github.com/ripplefm">
        <Icon type="github" />
      </FooterLink>
    </div>
  </FooterContainer>
);
