import React from 'react';
import styled from 'react-emotion';

const Logo = styled.img`
  width: ${props => (props.large ? '64px' : '32px')};
  height: auto;
  margin: 4px 8px 0px 8px;
  filter: ${props =>
    props.white ? 'brightness(350%) grayscale(250%)' : 'unset'};
`;

export default props => <Logo src="/images/logo.png" {...props} />;
