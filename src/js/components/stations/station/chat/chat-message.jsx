// import React from 'react';
// import styled from 'react-emotion';

// const Message = styled.li`
//   ${props => `border-left: 3px solid ${props.userColor || 'green'}`};
//   padding: 12px;
//   color: #eee;
//   white-space: pre;

//   &:nth-child(odd) {
//     background: rgba(0, 0, 0, 0.25);
//   }
// `;

// const Sender = styled.span`
//   ${props => `color: ${props.userColor || 'green'}`};
//   font-weight: 600;
//   font-size: 16px;
// `;

// const Text = styled.div`
//   margin-top: 6px;
//   font-size: 14px;
// `;

// const hashCode = str => {
//   let hash = 0;
//   for (let i = 0; i < str.length; i++) {
//     hash = str.charCodeAt(i) + ((hash << 5) - hash);
//   }
//   return hash;
// };

// const intToRGB = i => {
//   const c = (i & 0x00ffffff).toString(16).toUpperCase();
//   return '00000'.substring(0, 6 - c.length) + c;
// };

// const getUserColor = username => `#${intToRGB(hashCode(username))}`;

// const ChatMessage = ({ message }) => (
//   <Message userColor={getUserColor(message.sender)}>
//     {console.log('m', message)}
//     <Sender userColor={getUserColor(message.sender)}>{message.sender}</Sender>
//     {/* <Text>{message.text}</Text> */}
//     <Text>
//       {message.text.map(m => {
//         if (m.type === 'Text') {
//           return <span key={m.content}>{m.content}</span>;
//         } else if (m.type === 'Link') {
//           return (
//             <a key={m.content} href={m.content} target="_blank" rel="noopen">
//               {m.content}
//             </a>
//           );
//         } else if (m.type === 'Mention') {
//           return (
//             <b
//               key={m.content}
//               style={{
//                 color:
//                   m.content.substring(1) === 'guest_8000259640'
//                     ? 'black'
//                     : '#fff',
//                 background:
//                   m.content.substring(1) === 'guest_8000259640' ? 'hotpink' : ''
//               }}
//             >
//               {m.content}
//             </b>
//           );
//         }
//       })}
//     </Text>
//   </Message>
// );

// export default ChatMessage;

import React from 'react';
import styled from 'react-emotion';

const Message = styled.li`
  ${props => `border-left: 3px solid ${props.userColor || 'green'}`};
  padding: 12px;
  color: #eee;
  white-space: pre;
  &:nth-child(odd) {
    background: rgba(0, 0, 0, 0.25);
  }
`;

const Sender = styled.span`
  ${props => `color: ${props.userColor || 'green'}`};
  font-weight: 600;
  font-size: 16px;
`;

const Text = styled.div`
  margin-top: 6px;
  font-size: 14px;
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

const ChatMessage = ({ message }) => (
  <Message userColor={getUserColor(message.sender.id)}>
    <Sender userColor={getUserColor(message.sender.id)}>
      {message.sender.username}
    </Sender>
    <Text>{message.text}</Text>
  </Message>
);

export default ChatMessage;
