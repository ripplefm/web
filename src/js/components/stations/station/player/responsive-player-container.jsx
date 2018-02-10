import styled from 'react-emotion';

const ResponsivePlayerContainer = styled.div`
  position: relative;
  display: block;
  width: 100%;
  padding: 0px;
  overflow: hidden;
  background: black;

  &::before {
    display: block;
    content: '';
    padding-top: 56.25%;
  }

  iframe {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    border: 0px;
  }
`;

export default ResponsivePlayerContainer;
