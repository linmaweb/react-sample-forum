import React, { Component } from "react";
import SidebarPane from "./SidebarPane";
import ChatPane from "./ChatPane";
import EmptyChatPane from "./EmptyChatPane";
import { channels, people } from "../config";
import { createFakeActivity, nextId, createMessage } from "../funcs";

export default class App extends Component {
  state = {
    channels,
    people,
    messagesByChannelId: createFakeActivity(channels, 15),
    messagesByPersonId: createFakeActivity(people, 5),
    selectedChannelId: null,
    selectedPersonId: null,
  };

  handleChannelSelected = (channelId) => {
    this.setState({
      selectedChannelId: channelId,
      selectedPersonId: null,
    });
  };

  handlePersonSelected = (personId) => {
    this.setState({
      selectedPersonId: personId,
      selectedChannelId: null,
    });
  };

  handleSentMessage = (text) => {
    const { selectedChannelId, selectedPersonId } = this.state;

    if (selectedChannelId) {
      this.setState({
        ...this.state,
        messagesByChannelId: {
          ...this.state.messagesByChannelId,
          [selectedChannelId]: [
            ...this.state.messagesByChannelId[selectedChannelId],
            createMessage(
              text,
              nextId(this.state.messagesByChannelId[selectedChannelId])
            ),
          ],
        },
      });
    }

    if (selectedPersonId) {
      this.setState({
        ...this.state,
        messagesByPersonId: {
          ...this.state.messagesByPersonId,
          [selectedPersonId]: [
            ...this.state.messagesByPersonId[selectedPersonId],
            createMessage(
              text,
              nextId(this.state.messagesByPersonId[selectedPersonId])
            ),
          ],
        },
      });
    }
  };

  addMessage(type, text, selectedId) {
    this.setState({
      ...this.state,
      [type]: {
        ...this.state[type],
        [selectedId]: [
          ...this.state[type][selectedId],
          createMessage(text, nextId(this.state[type][selectedId])),
        ],
      },
    });
  }

  render() {
    const {
      channels,
      people,
      selectedChannelId,
      selectedPersonId,
    } = this.state;

    let messages = [];
    let isSomethingSelected = false;
    if (selectedChannelId) {
      messages = this.state.messagesByChannelId[selectedChannelId];
      isSomethingSelected = true;
    }
    if (selectedPersonId) {
      messages = this.state.messagesByPersonId[selectedPersonId];
      isSomethingSelected = true;
    }

    return (
      <div className="container">
        <SidebarPane
          channels={channels}
          people={people}
          onChannelSelected={this.handleChannelSelected}
          onPersonSelected={this.handlePersonSelected}
          selectedChannelId={selectedChannelId}
          selectedPersonId={selectedPersonId}
        />
        {isSomethingSelected ? (
          <ChatPane
            messages={messages}
            onSendMessage={this.handleSentMessage}
          />
        ) : (
          <EmptyChatPane />
        )}
      </div>
    );
  }
}
