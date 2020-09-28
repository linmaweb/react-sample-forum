import React from "react";
import ChannelList from "./ChannelList";
import PeopleList from "./PeopleList";

const SidebarPane = ({
  channels,
  people,
  selectedChannelId,
  selectedPersonId,
  onChannelSelected,
  onPersonSelected,
}) => (
  <div className="sidebar-pane">
    <ChannelList
      channels={channels}
      selectedId={selectedChannelId}
      onChannelSelected={onChannelSelected}
    />
    <PeopleList
      people={people}
      selectedId={selectedPersonId}
      onPersonSelected={onPersonSelected}
    />
  </div>
);

export default SidebarPane;
