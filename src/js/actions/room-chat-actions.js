export const actions = {
  SEND_CHAT_MESSAGE: 'SEND_CHAT_MESSAGE',
  RECIEVE_CHAT_MESSAGE: 'RECIEVE_CHAT_MESSAGE'
};

export function recieveMessage(message) {
  return {
    type: actions.RECIEVE_CHAT_MESSAGE,
    message
  };
}

export function sendMessage(text) {
  return {
    type: actions.SEND_CHAT_MESSAGE,
    text
  };
}
