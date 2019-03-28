import Link from 'next/link';
import styled from '@emotion/styled';

const InternalLink = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${props =>
    props.active ? '#ef5350' : props.disabled ? '#333 !important' : '#999'};
  width: 100%;
  padding: 16px;
  padding-left: 32px;
  font-size: 14px;
  letter-spacing: 0.05em;
  font-weight: bold;
  text-transform: capitalize;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
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

export default ({ href, children, active, disabled }) => (
  <Link href={href}>
    <InternalLink active={active} disabled={disabled}>
      {children}
    </InternalLink>
  </Link>
);
