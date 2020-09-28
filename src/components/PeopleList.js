import React from "react";
import PersonName from "./PersonName";

const PeopleList = ({ people, selectedId, onPersonSelected }) => (
  <div className="people-list">
    <h5 className="people-header">People</h5>
    {people.map((person) => (
      <PersonName
        key={person.id}
        person={person}
        isSelected={person.id === selectedId}
        onClick={() => onPersonSelected(person.id)}
      />
    ))}
  </div>
);

export default PeopleList;
