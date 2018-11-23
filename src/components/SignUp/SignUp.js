import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from '../Input';

class SignUp extends Component {
  handleSignUp = (userData) => {
    const { signUp } = this.props;
    signUp(userData);
  }

  render() {
    const { handleSubmit, signingUpState } = this.props;
    const isRequestedForm = signingUpState === 'requested';

    return (
      <form
        onSubmit={handleSubmit(this.handleSignUp)}
        style={{ width: '100%' }}
        className="flexbox flex-wrap justify-space-center"
      >
        <Field name="first_name" type="text" placeholder="First Name" component={Input} />
        <Field name="last_name" type="text" placeholder="Last Name" component={Input} />
        <Field name="email" type="email" placeholder="Email" component={Input} />
        <Field name="password" type="password" placeholder="Password" component={Input} />

        <button
          type="submit"
          className="btn w-100"
          disabled={isRequestedForm}
        >
          <span className="button-content">
            {isRequestedForm ? 'Loading...' : 'START NOW'}
          </span>
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'signUp',
})(SignUp);
