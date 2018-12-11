import React from 'react';
import Spinner from '../Spinner';
import Button from './Button';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import FinishStep from './FinishStep';

class Skills extends React.Component {
  state = {
    activeStep: 0,
    selectedSkillId: null,
    selectedSkillCategoriesIds: [],
    isEditing: false,
  };

  componentDidMount() {
    const { fetchSkills } = this.props;
    fetchSkills();
  }

  handleSelectSkillId = ({ target }) => {
    this.setState({
      selectedSkillId: Number(target.value),
    });
  }

  handleSelectSkillCategoryId = ({ target }) => {
    this.setState(({ selectedSkillCategoriesIds }) => {
      const newSkillCategoryId = Number(target.value);
      const isSelected = selectedSkillCategoriesIds.includes(newSkillCategoryId);

      const newSelectedSkillCategories = isSelected
        ? selectedSkillCategoriesIds.filter(
          skillCategoryId => skillCategoryId !== newSkillCategoryId,
        )
        : [...selectedSkillCategoriesIds, newSkillCategoryId];

      return {
        selectedSkillCategoriesIds: newSelectedSkillCategories,
      };
    });
  }

  handleNext = () => {
    this.setState(({ activeStep }) => ({
      activeStep: activeStep + 1,
    }));
  }

  handleBack = () => {
    this.setState(({ activeStep }) => ({
      activeStep: activeStep - 1,
    }));
  }

  handleBackWhenEditing = () => {
    this.setState({
      activeStep: 0,
      isEditing: false,
    });
  }

  handleDone = () => {
    const { selectedSkillCategoriesIds, selectedSkillId } = this.state;
    const { addSkill } = this.props;

    addSkill(selectedSkillId, selectedSkillCategoriesIds);
    this.setState({
      activeStep: 0,
      isEditing: false,
      selectedSkillId: null,
      selectedSkillCategoriesIds: [],
    });
  }

  handleEditSkill = (id) => {
    const { skillsById } = this.props;
    const selectedSkillCategoriesIds = skillsById[id].skill_categories
      .filter(({ selected }) => selected).map(category => category.id);

    this.setState({
      activeStep: 2,
      isEditing: true,
      selectedSkillId: id,
      selectedSkillCategoriesIds,
    });
  }

  handleRemoveSkill = (id) => {
    const { removeSkill } = this.props;
    removeSkill(id);
  }

  renderFinishStep() {
    const {
      selectedSkillId,
      selectedSkillCategoriesIds,
    } = this.state;

    const { skillsById } = this.props;
    const selectedSkill = skillsById[selectedSkillId];

    return (
      <FinishStep
        title={selectedSkill.name}
        skillCategories={selectedSkill.skill_categories}
        selectedSkillCategoriesIds={selectedSkillCategoriesIds}
        onSelectSkillCategoryId={this.handleSelectSkillCategoryId}
      />
    );
  }

  renderBody({ isFirstStep, isSecondStep, isFinishStep }) {
    const { selectedSkillId } = this.state;
    const {
      skillsList,
      selectedSkillsWithSelectedCategories,
    } = this.props;

    return (
      <>
        {isFirstStep && (
          <FirstStep
            onEditSkill={this.handleEditSkill}
            onRemoveSkill={this.handleRemoveSkill}
            skillsList={selectedSkillsWithSelectedCategories}
          />
        )}

        {isSecondStep && (
          <SecondStep
            skillList={skillsList}
            onNext={this.handleNext}
            selectedSkillId={selectedSkillId}
            onSelectSkillId={this.handleSelectSkillId}
          />
        )}

        {isFinishStep && this.renderFinishStep()}
      </>
    );
  }

  render() {
    const { isEditing, activeStep } = this.state;
    const { isBusy } = this.props;

    const isFirstStep = activeStep === 0;
    const isSecondStep = activeStep === 1;
    const isFinishStep = activeStep === 2;

    return (
      <div className="tab-pane my-tab active" id="skills">
        <div className="steps-nav flexbox justify-space-between">
          <div className="steps-nav-title">Your Shared Skills</div>

          <div className="steps-nav-btn">
            {(isSecondStep || isFinishStep) && (
              <div className="btn-group clearfix">
                <Button
                  onClick={isEditing
                    ? this.handleBackWhenEditing
                    : this.handleBack
                  }
                  isWhite
                  text="Back"
                />
                <Button onClick={this.handleDone} disabled={!isFinishStep} text="Done" />
              </div>
            )}

            {isFirstStep && <Button onClick={this.handleNext} text="Add" />}
          </div>

        </div>

        {isBusy
          ? <Spinner />
          : this.renderBody({ isFirstStep, isSecondStep, isFinishStep })}
      </div>
    );
  }
}

export default Skills;
