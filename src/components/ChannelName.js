import React from "react";
import cx from "classnames";

const ChannelName = ({ channel, isSelected, onClick }) => {
  const classes = cx({
    "channel-name": true,
    "channel-name--unread": channel.hasUnreads,
    "channel-name--selected": isSelected,
  });

  return (
    <div key={channel.id} className={classes} onClick={onClick}>
      <span className="hash">#</span>
      {channel.name}
    </div>
  );
};

export default ChannelName;
