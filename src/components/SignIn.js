import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from './Input';

class SignIn extends Component {
  handleSignIn = (userData) => {
    const { signIn } = this.props;
    signIn(userData);
  }

  render() {
    const { handleSubmit, signingInState } = this.props;
    const isRequestedForm = signingInState === 'requested';

    return (
      <form
        onSubmit={handleSubmit(this.handleSignIn)}
        style={{ width: '100%' }}
        className="flexbox flex-wrap justify-space-center"
      >
        <Field name="email" type="email" placeholder="Email" component={Input} />
        <Field name="password" type="password" placeholder="Password" component={Input} />
        <button
          type="submit"
          className="btn w-100"
          disabled={isRequestedForm}
        >
          <span className="button-content">
            {isRequestedForm ? 'Loading' : 'SIGN IN'}
          </span>
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'signIn',
})(SignIn);
