import styled from '@emotion/styled';

export default styled.div`
  width: 100%;
  overflow-y: scroll;
  max-height: calc(100vh - 128px);

  @media (max-width: 768px) {
    padding: 0px 8px;
    max-height: calc(100vh - 124px - 56.25vw);
  }
`;
