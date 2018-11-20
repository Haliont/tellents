import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from './Input';

class SignIn extends Component {
  submit = (/* data */) => {
    // console.log(data);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.submit)} style={{ width: '100%' }} className="flexbox flex-wrap justify-space-center">
        <Field name="email" type="email" placeholder="Email" component={Input} />
        <Field name="password" type="password" placeholder="Password" component={Input} />
        <button type="submit" className="btn w-100">
          <span className="button-content">
            LOG IN
          </span>
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'signIn',
})(SignIn);
