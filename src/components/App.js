import React, { useState } from "react";
import SidebarPane from "./SidebarPane";
import ChatPane from "./ChatPane";
import EmptyChatPane from "./EmptyChatPane";
import { channels, people } from "../config";
import { generateData, nextId, createMessage } from "../funcs";

const App = () => {
  const [byChannel, setByChannel] = useState(generateData(channels, 15));
  const [byPerson, setByPerson] = useState(generateData(people, 5));
  const [selectedChannelId, setSelectedChannelId] = useState(null);
  const [selectedPersonId, setSelectedPersonId] = useState(null);

  const handleChannelSelected = (channelId) => {
    setSelectedChannelId(channelId);
    setSelectedPersonId(null);
  };

  const handlePersonSelected = (personId) => {
    setSelectedPersonId(personId);
    setSelectedChannelId(null);
  };

  const handleSentMessage = (text) => {
    if (selectedChannelId) {
      setByChannel({
        ...byChannel,
        [selectedChannelId]: [
          ...byChannel[selectedChannelId],
          createMessage(text, nextId(byChannel[selectedChannelId])),
        ],
      });
    }

    if (selectedPersonId) {
      setByPerson({
        ...byPerson,
        [selectedPersonId]: [
          ...byPerson[selectedPersonId],
          createMessage(text, nextId(byPerson[selectedPersonId])),
        ],
      });
    }
  };

  let messages = [];
  let isSelected = false;

  if (selectedChannelId) {
    messages = byChannel[selectedChannelId];
    isSelected = true;
  }
  if (selectedPersonId) {
    messages = byPerson[selectedPersonId];
    isSelected = true;
  }

  return (
    <div className="container">
      <SidebarPane
        channels={channels}
        people={people}
        onChannelSelected={handleChannelSelected}
        onPersonSelected={handlePersonSelected}
        selectedChannelId={selectedChannelId}
        selectedPersonId={selectedPersonId}
      />
      {isSelected ? (
        <ChatPane messages={messages} onSendMessage={handleSentMessage} />
      ) : (
        <EmptyChatPane />
      )}
    </div>
  );
};

export default App;
