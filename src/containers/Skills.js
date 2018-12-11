import { connect } from 'react-redux';
import Component from '../components/Skills';

import * as skillsActions from '../store/skills/actions';
import * as skillsSelectors from '../store/skills/selectors';

const mapStateToProps = state => ({
  isBusy: skillsSelectors.isFetchingSkills(state)
    || skillsSelectors.isUpdatingSkills(state),

  skillsById: skillsSelectors.getSkills(state),
  skillsList: skillsSelectors.getSkillsList(state),
  selectedSkillsWithSelectedCategories: skillsSelectors
    .getSelectedSkillsWithSelectedCategories(state),
});

export default connect(
  mapStateToProps,
  skillsActions,
)(Component);
