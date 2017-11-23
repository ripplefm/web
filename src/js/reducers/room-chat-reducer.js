import { actions } from '../actions/room-chat-actions';

export default function(state = { messages: [] }, action) {
  switch (action.type) {
    case actions.RECIEVE_CHAT_MESSAGE:
      const messages = [...state.messages];
      const last = messages.pop();
      if (last && last.sender === action.message.sender) {
        return {
          ...state,
          messages: [
            ...messages,
            {
              sender: last.sender,
              text: `${last.text}\n${action.message.text}`
            }
          ]
        };
      }
      return { ...state, messages: [...state.messages, action.message] };
    default:
      return state;
  }
}
