import React from 'react';
import Button from './Button';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import FinishStep from './FinishStep';

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      selectedSkillId: null,
      selectedSkillCategoriesIds: [],
      isEditing: false,
    };
  }

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

      const updatedNewSelectedSkillCategories = isSelected
        ? selectedSkillCategoriesIds.filter(
          skillCategoryId => skillCategoryId !== newSkillCategoryId,
        )
        : [...selectedSkillCategoriesIds, newSkillCategoryId];

      return {
        selectedSkillCategoriesIds: updatedNewSelectedSkillCategories,
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

  handleDone = () => {
    const { selectedSkillCategoriesIds, selectedSkillId } = this.state;
    const { addSkill } = this.props;

    addSkill(selectedSkillId, selectedSkillCategoriesIds);
    this.setState({
      activeStep: 0,
      isEditing: false,
    });
  }

  handleEditSkill = (id) => {
    const { selectedSkillsWithSelectedCategories } = this.props;
    const selectedSkillCategoriesIds = selectedSkillsWithSelectedCategories
      .find(skill => skill.id === id).skill_categories.map(sc => sc.id);

    this.setState({
      activeStep: 2,
      selectedSkillId: id,
      selectedSkillCategoriesIds,
      isEditing: true,
    });
  }

  handleRemoveSkill = (id) => {
    const { removeSkill } = this.props;
    removeSkill(id);
  }

  renderFinishStep = () => {
    const {
      selectedSkillId,
      selectedSkillCategoriesIds,
    } = this.state;

    const { skills } = this.props;

    const {
      name: selectedSkillTitle,
      skill_categories: selectedSkillCategories,
    } = skills.find(({ id }) => id === selectedSkillId);

    return (
      <FinishStep
        title={selectedSkillTitle}
        skillCategories={selectedSkillCategories}
        selectedSkillCategoriesIds={selectedSkillCategoriesIds}
        onSelectSkillCategoryId={this.handleSelectSkillCategoryId}
      />
    );
  }

  render() {
    const {
      activeStep,
      selectedSkillId,
      isEditing,
    } = this.state;

    const isFirstStep = activeStep === 0;
    const isSecondStep = activeStep === 1;
    const isFinishStep = activeStep === 2;

    const { selectedSkillsWithSelectedCategories, skills } = this.props;

    return (
      <>
        <div className="steps-nav flexbox justify-space-between">
          <div className="steps-nav-title">Your Shared Skills</div>

          <div className="steps-nav-btn">
            {(isSecondStep || isFinishStep) && (
              <div className="btn-group clearfix">
                <Button
                  onClick={!isEditing
                    ? this.handleBack
                    : () => this.setState({
                      activeStep: 0,
                      isEditing: false,
                    })
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

        {isFirstStep && (
          <FirstStep
            onEditSkill={this.handleEditSkill}
            onRemoveSkill={this.handleRemoveSkill}
            skillsList={selectedSkillsWithSelectedCategories}
          />
        )}

        {isSecondStep && (
          <SecondStep
            skillList={skills}
            selectedSkillId={selectedSkillId}
            onNext={this.handleNext}
            onSelectSkillId={this.handleSelectSkillId}
          />
        )}

        {isFinishStep && this.renderFinishStep()}
      </>
    );
  }
}

export default Skills;
