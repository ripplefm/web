import styled from 'react-emotion';

export default styled.div`
  position: relative;
  width: 100%;
  height: 60vh;

  @media (max-width: 1920px) {
    height: 50vh;
  }

  @media (max-width: 1600px) {
    height: 40vh;
  }

  @media (max-width: 1000px) {
    height: 30vh;
  }

  @media (max-width: 768px) {
    height: auto;
    width: 90vw;
    margin-top: 24px;
  }
`;
