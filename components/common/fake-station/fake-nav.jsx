import styled from '@emotion/styled';

export default styled.div`
  width: 100%;
  height: 24px;
  background: #19191b;
  color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 4px;

  & img {
    width: 16px;
    height: auto;
    margin-right: 4px;
  }

  & h5 {
    margin-top: 4px;
  }

  @media (max-width: 768px) {
    height: 16px;

    & img {
      width: 12px;
      height: auto;
    }

    & h5 {
      font-size: 0.5rem;
    }
  }
`;
