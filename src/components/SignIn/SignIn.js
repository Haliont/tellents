import React from 'react';
import AuthForm from '../AuthForm';

const fields = [
  {
    name: 'email',
    type: 'email',
    placeholder: 'Email',
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Password',
  },
];

function SignIn({ signingInState, signIn }) {
  return (
    <AuthForm
      fields={fields}
      submitText="SIGN IN"
      onSubmit={userData => signIn(userData)}
      isRequested={signingInState === 'requested'}
    />
  );
}

export default SignIn;
