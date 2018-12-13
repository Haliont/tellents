import { connect } from 'react-redux';
import Component from '../components/TalentsList';

import * as findSelectors from '../store/find/selectors';
import * as findActions from '../store/find/actions';

const mapStateToProps = state => ({
  talentsCards: findSelectors.getTalents(state),
  isBusy: findSelectors.isTalentsRequested(state),
});

export default connect(
  mapStateToProps,
  findActions,
)(Component);
