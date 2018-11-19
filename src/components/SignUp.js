import React from 'react';

export default function SignUp() {
  return (
    <form style={{ width: '100%' }} className="flexbox flex-wrap justify-space-center">
      <input required type="text" className="form-control mb-1" placeholder="First Name" />
      <input required type="text" className="form-control mb-1" placeholder="Last Name" />
      <input required type="email" className="form-control mb-1" placeholder="Email" />
      <input required type="password" className="form-control mb-1" placeholder="Password" />
      <button type="submit" className="btn w-100">
        <span className="button-content">
          START NOW
        </span>
      </button>
    </form>
  );
}
