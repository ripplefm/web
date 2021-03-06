import React from 'react';
import styled from '@emotion/styled';

const CircleImage = styled.img`
  width: 100vh;
  height: auto;
  position: absolute;
  ${props => (props.transform ? `transform: ${props.transform};` : '')}
  ${props => (props.right ? 'right: 0px' : 'left: 0px')};

  @media (max-width: 1600px) {
    ${props => (props.hiddenXs ? 'display: none' : '')};
    ${props => (props.xsTransform ? `transform: ${props.xsTransform};` : '')}
  }
`;

const Circle = ({
  right,
  transform,
  opacity,
  hiddenXs,
  xsTransform,
  style
}) => (
  <CircleImage
    src="/static/images/circle.svg"
    right={right}
    transform={transform}
    hiddenXs={hiddenXs}
    xsTransform={xsTransform}
    style={style || { opacity }}
  />
);

export default Circle;
