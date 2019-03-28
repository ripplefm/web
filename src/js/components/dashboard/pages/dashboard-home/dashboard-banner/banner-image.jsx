import styled from 'react-emotion';

export default styled.img`
  position: absolute;
  top: 0px;
  right: 0px;
  width: auto;
  height: 100%;

  @media (max-width: 768px) {
    filter: sepia(50%) saturate(50%);
    width: 90vw;
    min-width: 90vw;
    height: auto;
    left: unset;
    top: unset;
    position: unset;
    margin-top: 16px;
    margin-left: 5%;
    bottom: 0px;
    border-radius: 8px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  }
`;
