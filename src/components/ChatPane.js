import React, { useEffect, useRef } from "react";
import Header from "./Header";
import MessageList from "./MessageList";
import EmptyMessageList from "./EmptyMessageList";
import ChatInput from "./ChatInput";

const ChatPane = ({ messages, onSendMessage }) => {
  const chatPane = useRef(null);

  useEffect(() => {
    chatPane.current.scrollTop = chatPane.current.scrollHeight;
  }, [messages]);

  return (
    <div className="chat-pane" ref={chatPane}>
      <Header />
      {messages.length > 0 ? (
        <MessageList messages={messages} />
      ) : (
        <EmptyMessageList />
      )}
      <ChatInput onSendMessage={onSendMessage} />
    </div>
  );
};

export default ChatPane;
