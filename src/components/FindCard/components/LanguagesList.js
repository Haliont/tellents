import React from 'react';

export default function LanguagesList({ items }) {
  return (
    <div className="text">
      {items.map(({ name, level }) => (
        <React.Fragment key={name}>
          {name}: <span>{level}</span>;
        </React.Fragment>
      ))}
    </div>
  );
}
