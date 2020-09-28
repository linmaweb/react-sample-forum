import React, { Component } from "react";
import ReactDOM from "react-dom";
import Message from "./Message";

export default class MessageList extends Component {
  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    var node = ReactDOM.findDOMNode(this);
    node.scrollTop = node.scrollHeight;
  }

  render() {
    const { messages } = this.props;

    return (
      <div className="message-list">
        <div className="anchor-messages-bottom">
          {messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
        </div>
      </div>
    );
  }
}
