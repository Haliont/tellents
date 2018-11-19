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

export default function Reg() {
  return (
    <div style={rootStyle}>
      <form style={formStyle} className="flexbox flex-wrap justify-space-center sign-up-form">
        <input required className="form-control mb-1" placeholder="First Name" />
        <input required className="form-control mb-1" placeholder="Last Name" />
        <input required className="form-control mb-1" placeholder="Email" />
        <input required className="form-control mb-1" placeholder="Password" />
        <button type="submit" className="btn w-100">
          <span className="button-content">
            START NOW
          </span>
        </button>
      </form>
    </div>
  );
}
