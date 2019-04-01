import React from 'react';
import styled from '@emotion/styled';
import Emoji from '../common/emoji';

const ReactionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #111;
  border-radius: 32px;
  padding: 8px 16px;
  float: right;
  font-size: 20px;
  filter: ${props => (props.disabled ? 'brightness(50%)' : 'unset')};

  @media (max-width: 768px) {
    width: 100%;
    margin: 12px 0px 16px 0px;
  }
`;

const Reaction = styled(Emoji)`
  margin-right: 12px;
  margin-left: 12px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  user-select: none;
  opacity: 0.5;
  transform-origin: center center;
  transition: opacity linear 100ms, transform ease-in-out 100ms;

  &:hover {
    opacity: ${props => (props.disabled ? '0.5' : '1')};
    transform: ${props => (props.disabled ? 'scale(1.0)' : 'scale(1.1)')};
  }
`;

const reactions = ['fire', 'thumbs-up', 'thumbs-down', 'rock-on', 'poop'];

export default ({ sendReaction, disabled }) => (
  <ReactionsContainer disabled={disabled}>
    {reactions.map(reaction => (
      <Reaction
        key={reaction}
        type={reaction}
        disabled={disabled}
        onClick={disabled ? undefined : () => sendReaction(reaction)}
      />
    ))}
  </ReactionsContainer>
);
