import React from 'react';

const Input = ({ input, ...props }) => (
  <input
    required
    className="form-control mb-1"
    value={input.value}
    onChange={input.onChange}
    {...props}
  />
);

export default Input;
