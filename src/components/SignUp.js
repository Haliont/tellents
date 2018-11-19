import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from './Input';

class SignUp extends Component {
  submit = (/* formData */) => {
    // console.log(formData);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form
        onSubmit={handleSubmit(this.submit)}
        style={{ width: '100%' }}
        className="flexbox flex-wrap justify-space-center"
      >
        <Field name="first_name" type="text" placeholder="First Name" component={Input} />
        <Field name="last_name" type="text" placeholder="Last Name" component={Input} />
        <Field name="email" type="email" placeholder="Email" component={Input} />
        <Field name="password" type="password" placeholder="Password" component={Input} />

        <button type="submit" className="btn w-100">
          <span className="button-content">
            START NOW
          </span>
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'signUp',
})(SignUp);
