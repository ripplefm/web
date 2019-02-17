import styled from 'react-emotion';
import { FadeIn, FadeOut } from '../animations/fade';

const Sidebar = styled.div`
  height: calc(100vh - 48px);
  width: 20%;
  background: #212121;
  position: absolute;
  top: 48px;
  left: 0px;
  transform: translateX(${props => (props.open ? '0px' : 'calc(55px - 20vw)')});
  ${props =>
    props.open
      ? 'box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
      : ''};
  z-index: 2;
  color: #fff;
  transition: transform ease-in-out 250ms, box-shadow ease-in-out 250ms;

  @media (max-width: 1650px) {
    width: 30%;
    transform: translateX(
      ${props => (props.open ? '0px' : 'calc(55px - 30vw)')}
    );
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

export const SidebarCover = styled.div`
  display: ${props => (props.openedOnce ? 'block' : 'none')};
  position: fixed;
  top: ${props => (props.open ? '-48px' : '-100vh')};
  left: 20vw;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
  animation: ${props => (props.open ? FadeIn : FadeOut)} 250ms ease-in-out;
  animation-fill-mode: ${props => (props.open ? 'backwards' : 'forwards')};

  @media (max-width: 1650px) {
    left: 30vw;
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

export default Sidebar;
