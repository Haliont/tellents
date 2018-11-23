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

function SignUp({ signingUpState, signUp }) {
  return (
    <AuthForm
      fields={fields}
      submitText="START NOW"
      onSubmit={userData => signUp(userData)}
      isRequested={signingUpState === 'requested'}
    />
  );
}

export default SignUp;
