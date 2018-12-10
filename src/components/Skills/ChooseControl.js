import React from 'react';

export default function ChooseControl({ title, ...rest }) {
  return (
    <div className="checkbox-block">
      <label>
        <input type="checkbox" {...rest} />
        <span className="checkbox-circle">
          <span className="icon icon-check-mark" />
        </span>
        <span className="checkbox-text">{title}</span>
      </label>
    </div>
  );
}
