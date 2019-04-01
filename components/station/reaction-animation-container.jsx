import styled from '@emotion/styled';
import { jsx, keyframes } from '@emotion/core';
import Emoji from '../common/emoji';

const anim = keyframes`
0% { transform: scale(0); }
10% { transform: scale(1.25) translate(25%, -25%); }
25% { transform: scale(1.0) translate(-25%, -55%); }
50% { transform: scale(1.0) translate(25%, -250%); opacity: 0.75; }
100% { transform: scale(1.0) translate(-25%, -500%); opacity: 0; }
`;

const Container = styled.div`
  position: absolute;
  right: 48px;
  bottom: 16px;
  width: 16px;
  height: 16px;

  & div {
    position: absolute;
    top: 0%;
    left: -100%;
    font-size: 32px;
    user-select: none;
    transform-origin: center center;
    opacity: 1;
    animation: ${anim} linear 1s;
    animation-fill-mode: forwards;
  }

  @media (max-width: 768px) {
    & div {
      font-size: 24px;
    }
  }
`;

export default ({ reactions }) => (
  <Container className="reaction-container">
    {reactions.map(r => (
      <Emoji
        key={r.reaction + r.timestamp + r.sender.username}
        type={r.reaction}
      />
    ))}
  </Container>
);
