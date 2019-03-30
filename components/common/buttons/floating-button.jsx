import { Button } from 'antd';
import styled from '@emotion/styled';

export default styled(Button)`
  box-shadow: ${props =>
    props.ghost
      ? 'none'
      : '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)'};
  text-transform: uppercase;
  font-weight: bold;
  transform-style: preserve-3d;
  border: none;
  ${props => (props.type === 'default' ? 'color: #ef5350' : '')};
  transition: transform ease-in-out 250ms;

  & i {
    font-weight: normal;
  }

  &:hover {
    transform: scale(1.05) translateZ(0);
    box-shadow: 0 6px 8px rgba(50, 50, 93, 0.11), 0 3px 5px rgba(0, 0, 0, 0.08);
  }

  &:first-of-type {
    margin-bottom: 0px;
    margin-right: 12px;
  }

  @media (max-width: 768px) {
    &:first-of-type {
      margin-bottom: 12px;
      margin-right: 0px;
    }
  }
`;
