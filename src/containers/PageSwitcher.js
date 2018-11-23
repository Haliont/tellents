import { connect } from 'react-redux';
import { signOut } from '../reducers/user';
import Component from '../components/PageSwitcher';

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  { signOut },
)(Component);
