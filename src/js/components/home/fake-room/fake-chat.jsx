import React, { Component } from 'react';
import styled from 'react-emotion';
import FakeText from './fake-text';

const Chat = styled.div`
  width: calc(21% - 3px);
  height: calc(30vh - 24px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    height: calc(30vh - 32px - 0.5625 * 30vw);
  }
`;

const FakeInput = styled.div`
  background: #111;
  width: 100%;
  height: 16px;
  font-size: 8px;
  padding: 4px;
  color: rgba(256, 256, 256, 0.5);

  @media (max-width: 768px) {
    height: 12px;
    font-size: 6px;
  }
`;

const FakeMessage = styled.div`
  border-left: 2px solid ${props => props.color};
  width: 100%;
  padding: 3px;

  &:nth-child(odd) {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export default class FakeChat extends Component {
  state = {
    messages: [
      { sender: '40px', color: '#66BB6A', width: ['92px'] },
      {
        sender: '64px',
        color: '#039BE5',
        width: ['60px', '90px']
      },
      {
        sender: '40px',
        color: '#66BB6A',
        width: ['100px']
      }
    ]
  };

  componentDidMount() {
    const newMessages = this.state.messages;
    newMessages.push({
      sender: '50px',
      color: '#CE93D8',
      width: ['64px']
    });
    this.timeout = setTimeout(() => {
      this.setState({ messages: newMessages });
    }, 5000);
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
      delete this.timeout;
    }
  }

  render() {
    const { messages } = this.state;
    return (
      <Chat>
        {messages.map((message, i) => (
          <FakeMessage key={i + message.sender} color={message.color}>
            <FakeText marginTop="8px" height="7px" width={message.sender} />
            <br />
            {message.width.map(width => (
              <FakeText key={width + i} height="7px" width={width} />
            ))}
          </FakeMessage>
        ))}
        <FakeInput>Enter your message...</FakeInput>
      </Chat>
    );
  }
}
