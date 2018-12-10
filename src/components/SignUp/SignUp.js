import React from 'react';
import AuthForm from '../AuthForm';

const fields = [
  {
    name: 'first_name',
    type: 'text',
    placeholder: 'First Name',
  },
  {
    name: 'last_name',
    type: 'text',
    placeholder: 'Last Name',
  },
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

function SignUp({ isSigningUp, signUp }) {
  return (
    <AuthForm
      fields={fields}
      submitText="START NOW"
      onSubmit={userData => signUp(userData)}
      isRequested={isSigningUp}
    />
  );
}

export default SignUp;
