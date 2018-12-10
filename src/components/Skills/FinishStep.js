import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChooseControl from './ChooseControl';

class FinishStep extends Component {
  render() {
    const {
      title,
      skillCategories,
      onSelectSkillCategoryId,
      selectedSkillCategoriesIds,
    } = this.props;

    return (
      <div>
        <div className="skill-subcat">
          <div className="flexbox justify-space-between">
            <div className="skill-block">
              <div className="skill-block-title">{title}</div>

              <div className="skill-block-list">
                {skillCategories.map(({ id, name: skillCategoryTitle }) => {
                  const isSelected = selectedSkillCategoriesIds.includes(id);
                  return (
                    <ChooseControl
                      key={id}
                      type="checkbox"
                      value={String(id)}
                      checked={isSelected}
                      title={skillCategoryTitle}
                      onChange={onSelectSkillCategoryId}
                    />
                  );
                })}
              </div>

            </div>
            <div className="skill-sub-block">
              <form className="form-group">
                <input type="text" className="form-control" placeholder="Write new skill" />
                <button type="button" className="add-btn btn btn-blue">
                  <span className="icon icon-add" />
                </button>
              </form>
              <div className="skill-tags-block clearfix">
                <div className="skill-tag">Math</div>
                <div className="skill-tag">Trigonometry</div>
                <div className="skill-tag">Calculus</div>
                <div className="skill-tag">Trigonometry</div>
                <div className="skill-tag">Calculus</div>
                <div className="skill-tag">Trigonometry</div>
                <div className="skill-tag">Calculus</div>
                <div className="skill-tag">Math</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FinishStep.propTypes = {
  title: PropTypes.string.isRequired,
  skillCategories: PropTypes.instanceOf(Array).isRequired,
  onSelectSkillCategoryId: PropTypes.func.isRequired,
  selectedSkillCategoriesIds: PropTypes.instanceOf(Array).isRequired,
};

export default FinishStep;
