import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { signUp } from '../reducers/signingUpState';
import Component from '../components/SignUp';

const mapStateToProps = ({ signingUpState }) => ({ signingUpState });

const Container = connect(
  mapStateToProps,
  { signUp },
)(Component);

export default reduxForm({
  form: 'signUp',
})(Container);
