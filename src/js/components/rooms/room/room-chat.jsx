import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input } from 'antd';
import { sendMessage } from '../../../actions/room-chat-actions';
import ChatMessage from './chat-message';

const mapStateToProps = state => {
  return {
    messages: state.roomChat.messages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendMessage: text => dispatch(sendMessage(text))
  };
};

class RoomChat extends Component {
  sendMessage = e => {
    const { target } = e;
    e.preventDefault();
    this.props.sendMessage(target.msg.value);
    target.msg.value = '';
  };

  render() {
    const { messages } = this.props;
    return (
      <div className="room-chat">
        <ul style={{ width: '100%' }}>
          {messages.map(msg => (
            <ChatMessage message={msg} key={msg.sender + msg.text} />
          ))}
        </ul>
        <form onSubmit={this.sendMessage}>
          <Input id="msg" placeholder="Enter your message..." />
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomChat);
