import styled from '@emotion/styled';

const centeredStyle =
  'position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%)';

export default styled.span`
  ${props => (props.centered ? centeredStyle : '')};
  ${props => (props.fontSize ? `font-size: ${props.fontSize}px` : '')};
  ${props => (props.uppercase ? 'text-transform: uppercase' : '')};
  color: rgba(256, 256, 256, 0.35);
`;
