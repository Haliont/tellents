import React from 'react';

export default function Button({ isWhite, text, ...rest }) {
  return (
    <button
      type="button"
      className={`btn btn-bold ${isWhite ? 'btn-blue-border' : 'btn-blue'}`}
      {...rest}
    >
      {text}
    </button>
  );
}
