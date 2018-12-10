import { connect } from 'react-redux';
import Component from '../components/Header';

import * as userSelectors from '../store/user/selectors';
import { signOut } from '../store/user/actions';

const mapStateToProps = state => ({
  username: userSelectors.getUsername(state),
  userAvatar: userSelectors.getUserAvatar(state),
});

export default connect(
  mapStateToProps,
  { signOut },
)(Component);
