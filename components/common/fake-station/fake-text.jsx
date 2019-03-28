import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const Blink = keyframes`
  0%, 100% { color: #333; background: #333; };
  50% { color: #444; background: #444; };
`;

export default styled.div`
  display: inline-block;
  background: #333;
  margin-bottom: 8px;
  margin-top: ${props => props.marginTop || ''};
  border-radius: 0.1rem;
  animation: ${Blink} ease-in-out 2500ms infinite;
  width: ${props => props.width};
  height: ${props => props.height || '6px'};

  &:last-of-type {
    margin-bottom: 4px;
  }

  @media (max-width: 768px) {
    font-size: 3px;
  }
`;
