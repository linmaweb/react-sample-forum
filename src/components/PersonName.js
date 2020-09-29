import React from "react";
import cx from "classnames";

const PersonName = ({ person, isSelected, onClick }) => {
  const classes = cx({
    "person-name": true,
    "person-name--unread": person.hasUnreads,
    "person-name--selected": isSelected,
  });

  return (
    <div key={person.id} className={classes} onClick={onClick}>
      {person.name}
    </div>
  );
};

export default PersonName;
