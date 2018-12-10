import React from 'react';
import PropTypes from 'prop-types';
import SkillView from './SkillView';

function FirstStep({ skillsList, onRemoveSkill, onEditSkill }) {
  return (
    <div>
      {skillsList.map(({ id, skill_categories: categories, name }) => (
        <SkillView
          key={id}
          name={name}
          categories={categories}
          onRemove={() => onRemoveSkill(id)}
          onEdit={() => onEditSkill(id)}
        />
      ))}
    </div>
  );
}

FirstStep.propTypes = {
  skillsList: PropTypes.instanceOf(Array).isRequired,
  onRemoveSkill: PropTypes.func.isRequired,
  onEditSkill: PropTypes.func.isRequired,
};

export default FirstStep;
