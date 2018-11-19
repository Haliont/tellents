import React from 'react';

const rootStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100%',
};

const formStyle = {
  width: '100%',
  maxWidth: '320px',
  flexDirection: 'column',
};

export default function Auth() {
  return (
    <div style={rootStyle}>
      <form style={formStyle} className="flexbox flex-wrap justify-space-center">
        <input required type="email" className="form-control mb-1" placeholder="Email" />
        <input required type="password" className="form-control mb-1" placeholder="Password" />
        <button type="submit" className="btn w-100">
          <span className="button-content">
            LOG IN
          </span>
        </button>
      </form>
    </div>
  );
}
