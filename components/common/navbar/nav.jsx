import styled from '@emotion/styled';

export default styled.nav`
  width: 100vw;
  height: 48px;
  background: ${props => (props.transparent ? 'transparent' : '#19191b')};
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px ${props => (props.padded ? '15%' : '0px')};

  @media (max-width: 768px) {
    padding: 0px 8px;
  }
`;
