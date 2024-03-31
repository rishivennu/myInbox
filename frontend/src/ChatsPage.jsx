import React from 'react';

import {
  ChatEngine,
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from 'react-chat-engine-advanced';

const ChatPage = (props) => {
  const chatProps = useMultiChatLogic(
    '05b81276-6c86-455d-b081-bc4c4ede190d',
    props.user.username,
    props.user.secret
  );
  return (
    <div style ={{ geight: '100vh'}}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style ={{ height: '100%'}} />
    </div>
  );
}

export default ChatPage