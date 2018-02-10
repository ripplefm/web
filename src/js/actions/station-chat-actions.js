export const actions = {
  SEND_CHAT_MESSAGE: 'SEND_CHAT_MESSAGE',
  RECEIVE_CHAT_MESSAGE: 'RECEIVE_CHAT_MESSAGE'
};

export function sendMessage(text) {
  return {
    type: actions.SEND_CHAT_MESSAGE,
    text
  };
}

export function receiveMessage(message) {
  return {
    type: actions.RECEIVE_CHAT_MESSAGE,
    message
  };
}
