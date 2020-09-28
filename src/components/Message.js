import React from "react";

const Message = ({ message }) => (
  <div className="message">
    <span className="message--avatar" key={message.id + "_avatar"}>
      <i class="fa fa-user" aria-hidden="true"></i>
    </span>
    <span className="message--name" key={message.id + "_name"}>
      {message.userName}
    </span>
    <span className="message--time" key={message.id + "_time"}>
      {message.timestamp.toString()}
    </span>
    <p className="message--text" key={message.id + "_text"}>
      {message.text}
    </p>
  </div>
);

export default Message;
