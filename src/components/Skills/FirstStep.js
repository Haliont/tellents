import React from 'react';
import PropTypes from 'prop-types';
import SkillView from './SkillView';

function FirstStep({ skillsList, onRemoveSkill, onEditSkill }) {
  return (
    <div>
      {skillsList.length === 0
        ? (
          <div
            style={{ padding: '10px 30px' }}
          >
            <div className="skill-block-title">
              Click `Add` button to add your skills
            </div>
          </div>
        )
        : skillsList.map(({ id, skill_categories: categories, name }) => (
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
