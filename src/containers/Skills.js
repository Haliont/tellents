import { connect } from 'react-redux';
import Component from '../components/Skills';

import {
  getSkills, getSelectedSkillsWithSelectedCategories, fetchSkills, addSkill,
  removeSkill,
} from '../reducers/skills';

const mapStateToProps = state => ({
  skills: getSkills(state),
  selectedSkillsWithSelectedCategories: getSelectedSkillsWithSelectedCategories(state),
});

export default connect(
  mapStateToProps,
  {
    fetchSkills, addSkill, removeSkill,
  },
)(Component);
