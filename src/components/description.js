import React from 'react';

export const Description = ({ section }) => {
  return (
    <div className="description-bloc">
      <ListDescription list={section.Missions} title={"Missions"}></ListDescription>
      <ListDescription list={section.Achievements} title={"Achievements"}></ListDescription>
    </div>
  );
};

export default function ListDescription({ list, title }) {
  return (
    (list && (
      <div className="description-bloc">
        <h3>{title}</h3>
        <ul className="list-desc">
          {list.map((c, index) => (
            <li key={index}>{c}</li>
          ))}
        </ul>
      </div>
    )) ||
    null
  );
}
