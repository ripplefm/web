import React from 'react';
import styled from 'react-emotion';

const Logo = styled.img`
  ${props => (props.large ? 'width: 64px' : 'width: 40px')};
  height: auto;
  margin: 4px 8px 0px 8px;
`;

export default props => <Logo src="/test.png" {...props} />;
