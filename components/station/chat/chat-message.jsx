import React from 'react';
import styled from '@emotion/styled';

const MessageContainer = styled.li`
  ${props => `border-left: 3px solid ${props.userColor || 'green'}`};
  padding: 12px;
  color: #eee;
  white-space: pre;
  &:nth-of-type(odd) {
    background: rgba(0, 0, 0, 0.25);
  }
`;

const Sender = styled.span`
  ${props => `color: ${props.userColor || 'green'}`};
  font-weight: 600;
  font-size: 16px;
`;

const TextContainer = styled.div`
  margin-top: 6px;
  font-size: 14px;
`;

const Text = styled.span`
  padding-right: 4px;
`;
const Link = styled.a`
  padding-right: 4px;
`;
const Mention = styled.span`
  padding-right: 4px;
`;

const hashCode = str => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
};

const intToRGB = i => {
  const c = (i & 0x00ffffff).toString(16).toUpperCase();
  return '00000'.substring(0, 6 - c.length) + c;
};

const getUserColor = username => `#${intToRGB(hashCode(username))}`;

const Message = ({ type, value, timestamp }) => {
  switch (type) {
    case 'link':
      return (
        <Link
          key={timestamp}
          href={value}
          target="_blank"
          rel="noopener noreferrer"
        >
          {value}
        </Link>
      );
    case 'mention':
      return <Mention key={timestamp}>{value}</Mention>;
    default:
      return <Text key={timestamp}>{value}</Text>;
  }
};

const ChatMessage = ({ message }) => (
  <MessageContainer userColor={getUserColor(message.sender.id)}>
    <Sender userColor={getUserColor(message.sender.id)}>
      {message.sender.username}
    </Sender>
    <TextContainer>
      {message.message.map(({ type, value, timestamp }) => (
        <Message
          key={timestamp}
          timestamp={timestamp}
          type={type}
          value={value}
        />
      ))}
    </TextContainer>
  </MessageContainer>
);

export default ChatMessage;
