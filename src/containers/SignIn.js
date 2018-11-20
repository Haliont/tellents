import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { signIn } from '../reducers/signingInState';
import Component from '../components/SignIn';

const mapStateToProps = ({ signingInState }) => ({ signingInState });

const Container = connect(
  mapStateToProps,
  { signIn },
)(Component);

export default reduxForm({
  form: 'signIn',
})(Container);
