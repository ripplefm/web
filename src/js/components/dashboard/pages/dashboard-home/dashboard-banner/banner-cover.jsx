import styled from 'react-emotion';

export default styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    to right,
    #212121 ${props => props.gradientAmount}%,
    rgba(0, 0, 0, 0) 90%
  );

  @media (max-width: 768px) {
    display: none;
  }
`;
