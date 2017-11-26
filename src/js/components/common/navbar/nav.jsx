import styled from 'react-emotion';

export default styled.nav`
  width: 100vw;
  height: 48px;
  background: ${props => (props.transparent ? 'transparent' : '#19191b')};
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
