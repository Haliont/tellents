import { connect } from 'react-redux';
import Component from '../components/Find';

// import * as someActions from '../store';
import * as userSelectors from '../store/user/selectors';

const mapStateToProps = state => ({
  username: userSelectors.getUsername(state),
});

export default connect(
  mapStateToProps,
)(Component);
