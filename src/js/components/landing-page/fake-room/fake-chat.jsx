import React, { Component } from 'react';
import styled from '@emotion/styled';
import FakeText from './fake-text';

const Chat = styled.div`
  width: calc(21% - 3px);
  height: calc(100% - 24px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  overflow: hidden;
  z-index: ${props => (props.highlight === 'chat' ? '1' : '0')};
  background: ${props => (props.highlight === 'chat' ? '#212121' : '')};
  border: ${props => (props.highlight === 'chat' ? '1px solid #ef5350' : '')};
  box-shadow: ${props =>
    props.highlight === 'chat' ? '2px 2px 16px #ef5350' : ''};
  transform: ${props => (props.highlight === 'chat' ? 'scale(1.1)' : '')};
  transition: all ease-in-out 250ms;

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
        width: ['60px']
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
    const { highlight } = this.props;
    return (
      <Chat highlight={highlight}>
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
