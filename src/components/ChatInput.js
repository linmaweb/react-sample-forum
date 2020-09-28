import React, { useState } from "react";

const ChatInput = ({ onSendMessage }) => {
  const [text, setText] = useState("");

  const handleKeyPress = (e) => {
    if (!text) {
      return;
    }

    if (e.key === "Enter") {
      onSendMessage(text);
      setText("");
    }
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        placeholder="Type your message here. Press Enter to send."
        onChange={(e) => {
          setText(e.target.value);
        }}
        onKeyPress={handleKeyPress}
        value={text}
      />
    </div>
  );
};

export default ChatInput;
