import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import ChooseControl from './ChooseControl';

class SecondStep extends Component {
  render() {
    const {
      onNext,
      skillList,
      selectedSkillId,
      onSelectSkillId,
    } = this.props;

    return (
      <div>
        <div className="skill-block skill-cat">
          <div className="skill-block-title">Choose Your Skill</div>

          <div className="skill-block-list">
            {skillList.map(({ id, name: title }) => (
              <ChooseControl
                key={id}
                title={title}
                type="radio"
                value={String(id)}
                checked={selectedSkillId === id}
                onChange={onSelectSkillId}
              />
            ))}
          </div>

          <Button
            text="Next"
            onClick={onNext}
            disabled={!selectedSkillId}
          />
        </div>
      </div>
    );
  }
}

SecondStep.defaultProps = {
  selectedSkillId: null,
};

SecondStep.propTypes = {
  selectedSkillId: PropTypes.number,
  onNext: PropTypes.func.isRequired,
  skillList: PropTypes.instanceOf(Array).isRequired,
  onSelectSkillId: PropTypes.func.isRequired,
};

export default SecondStep;
