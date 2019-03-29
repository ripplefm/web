import React, { Component } from 'react';
import styled from '@emotion/styled';
import { Input } from 'antd';
import ChatMessage from './chat-message';

const MessageContainer = styled.ul`
  width: 100%;
  list-style: none;
  padding-left: 0px;
  margin-bottom: 0px;
  display: flex;
  flex-direction: column;

  overflow-y: scroll;

  @media (max-width: 992px) {
    max-height: calc(100vh - 130px - 100vw * 9 / 16);
    height: calc(100vh - 130px - 100vw * 9 / 16);
  }
`;

export default class Stationchat extends Component {
  state = { text: '' };

  sendMessage = e => {
    e.preventDefault();
    this.props.sendMessage(this.state.text);
    this.setState({ text: '' });
  };

  render() {
    const { user, messages } = this.props;
    if (typeof window !== 'undefined') {
      setTimeout(
        () =>
          (document.querySelector(
            '.station-chat ul'
          ).scrollTop = document.querySelector(
            '.station-chat ul'
          ).scrollHeight),
        0
      );
    }
    return (
      <div className="station-chat">
        <MessageContainer>
          {messages.map((msg, i) => (
            <ChatMessage message={msg} key={msg.sender.id + i} />
          ))}
        </MessageContainer>
        <form
          onSubmit={this.sendMessage}
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            position: 'relative'
          }}
        >
          <Input
            id="msg"
            value={this.state.text}
            disabled={user === undefined}
            onChange={e => this.setState({ text: e.target.value })}
            placeholder="Enter your message..."
            autoComplete="off"
          />
        </form>
      </div>
    );
  }
}
