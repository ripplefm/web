import styled from '@emotion/styled';

export default styled.div`
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-50%, -50%);
  z-index: 1;

  & h1 {
    font-size: 7em;
    font-weight: bolder;
    color: white;
    text-transform: uppercase;
    margin: 0px;
  }

  & h2 {
    color: rgba(255, 255, 255, 0.3);
    width: 450px;
    margin-bottom: 28px;
  }

  @media (max-width: 1600px) {
    left: 25%;

    & h1 {
      font-size: 6em;
    }

    & h2 {
      font-size: 1.5em;
    }
  }

  @media (max-width: 1000px) {
    left: 30%;

    & h1 {
      font-size: 5em;
    }

    & h2 {
      font-size: 1.25em;
    }
  }

  @media (max-width: 768px) {
    top: unset;
    transform: unset;
    bottom: 16px;
    left: calc(5% + 8px);

    & h1 {
      text-shadow: 1px 1px black;
      font-size: 3em;
    }

    & h2 {
      display: none;
    }
  }
`;
