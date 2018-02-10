import styled from 'react-emotion';
import formatDuration from '../../../../utils/format-duration';

export default styled.div`
  position: relative;
  border-radius: 0.3rem;
  height: 80px;
  width: calc(80px / 0.5625);
  ${props => `background: url(${props.src})`};
  background-size: calc(80px / 0.5625) 80px;

  &:before {
    display: block;
    ${props => `content: '${formatDuration(props.duration)}'`};
    color: #fff;
    text-shadow: -1px 1px #000000;
    font-size: 14px;
    position: absolute;
    right: 6px;
    bottom: 0px;
  }
`;
