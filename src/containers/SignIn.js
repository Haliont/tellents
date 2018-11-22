import { connect } from 'react-redux';
import { signIn } from '../reducers/user';
import Component from '../components/SignIn';

const mapStateToProps = ({ signingInState }) => ({ signingInState });

export default connect(
  mapStateToProps,
  { signIn },
)(Component);
