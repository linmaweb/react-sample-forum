import React, { Component } from "react";
import Header from "./Header";
import { headerTitle } from "../config";
import MessageList from "./MessageList";
import EmptyMessageList from "./EmptyMessageList";
import ChatInput from "./ChatInput";

export default class ChatPane extends Component {
  componentDidMount() {
    if (this.messageList) {
      this.messageList.scrollToBottom();
    }
  }

  render() {
    const { messages, onSendMessage } = this.props;

    return (
      <div className="chat-pane">
        <Header title={headerTitle} />
        {messages.length > 0 ? (
          <MessageList
            messages={messages}
            ref={(cmp) => {
              this.messageList = cmp;
            }}
          />
        ) : (
          <EmptyMessageList />
        )}
        <ChatInput onSendMessage={onSendMessage} />
      </div>
    );
  }
}
