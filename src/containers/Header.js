import { connect } from 'react-redux';
import Component from '../components/Header';

import { signOut } from '../reducers/user';

const mapStateToProps = ({
  user,
}) => ({
  username: user.full_name,
  userAvatar: (user.image || { url: '' }).url,
});

export default connect(
  mapStateToProps,
  { signOut },
)(Component);
