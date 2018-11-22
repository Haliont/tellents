import { connect } from 'react-redux';
import { signUp } from '../reducers/user';
import Component from '../components/SignUp';

const mapStateToProps = ({ signingUpState }) => ({ signingUpState });

export default connect(
  mapStateToProps,
  { signUp },
)(Component);
