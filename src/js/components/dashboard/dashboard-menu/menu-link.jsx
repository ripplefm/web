import { Link } from 'react-router-dom';
import styled from 'react-emotion';

export default styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${props =>
    props.active ? '#ef5350' : props.disabled ? '#666 !important' : '#999'};
  width: 100%;
  padding: 16px;
  padding-left: 32px;
  font-size: 14px;
  letter-spacing: 0.05em;
  font-weight: bold;
  text-transform: capitalize;
  background: ${props => (props.active ? 'hsla(240, 4%, 9%, 0.5)' : '')};
  border-left: ${props => (props.active ? '2px solid #ef5350' : '')};
  transition: all ease-in-out 250ms;

  &:hover,
  &:focus {
    text-decoration: none;
  }

  & i {
    margin-top: -2px;
    margin-right: 16px;
  }
`;
