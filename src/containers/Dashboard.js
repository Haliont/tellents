import { connect } from 'react-redux';
import Component from '../components/Dashboard';

import * as userSelectors from '../store/user/selectors';

const mapStateToProps = state => ({
  isBusy: userSelectors.isValidationToken(state),
});

export default connect(
  mapStateToProps,
)(Component);
