import React from "react";
import Header from "./Header";
import { headerTitle } from "../config";

const EmptyChatPane = () => (
  <div className="chat-pane chat-pane--empty">
    <Header title={headerTitle} />
    <div className="empty-state-help">
      Select a channel or a person from the left.
    </div>
  </div>
);

export default EmptyChatPane;
