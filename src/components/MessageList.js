import React, { useEffect, useRef } from "react";
import Message from "./Message";

const MessageList = ({ messages }) => {
  const messageList = useRef(null);

  useEffect(() => {
    messageList.current.scrollTop = messageList.current.scrollHeight;
  }, [messages]);

  return (
    <div className="message-list" ref={messageList}>
      <div className="anchor-messages-bottom">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
    </div>
  );
};

export default MessageList;
