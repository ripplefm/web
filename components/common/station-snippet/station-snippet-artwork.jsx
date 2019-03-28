import styled from '@emotion/styled';
import { FadeOut } from '../../styles/animations/fade';

export const ArtworkGradient = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${props => (props.expanded ? 'calc(0.5625 * 40vw)' : '200px')};
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  background: linear-gradient(19deg, #faaca8 0%, #ddd6f3 100%);
  font-size: 20px;
  font-weight: 500;
`;

const Artwork = styled.img`
  position: ${props => (props.expanded ? 'absolute' : '')};
  top: 0px;
  left: 0px;
  height: ${props => (props.expanded ? 'calc(0.5625 * 40vw)' : '200px')};
  width: ${props => (props.expanded ? '100%' : '300px')};
  object-fit: ${props => (props.expanded ? 'unset' : 'cover')};
  ${props => (props.expanded ? `animation: ${FadeOut} linear 500ms` : '')};
  animation-delay: 250ms;
  animation-fill-mode: forwards;
  z-index: 3;

  @media (max-width: 768px) {
    ${props =>
      props.expanded ? 'height: calc(0.5625 * 90vw)' : 'height: 200px'};
  }
`;

export default Artwork;
