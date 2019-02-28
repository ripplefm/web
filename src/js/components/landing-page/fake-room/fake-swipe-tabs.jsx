import styled from 'react-emotion';

export default styled.div`
  display: none;
  width: 100%;
  height: 16px;
  background: #19191b;

  & i {
    font-size: 6px;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
