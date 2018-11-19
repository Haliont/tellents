import React from 'react';

export default function Auth() {
  return (
    <form style={{ width: '100%' }} className="flexbox flex-wrap justify-space-center">
      <input required type="email" className="form-control mb-1" placeholder="Email" />
      <input required type="password" className="form-control mb-1" placeholder="Password" />
      <button type="submit" className="btn w-100">
        <span className="button-content">
          LOG IN
        </span>
      </button>
    </form>
  );
}
