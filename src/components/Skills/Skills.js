import React from 'react';

import Button from './Button';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import FinishStep from './FinishStep';

class Skills extends React.Component {
  state = {
    activeStep: 0,
    // skills: [],
  };

  componentDidMount() {
    // fetch data by redux action
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
    this.setState({ activeStep: 0 });
  }

  handleEditSkill = (id) => {
    console.log(`Edit ${id} skill `);
  }

  handleRemoveSkill = (id) => {
    console.log(`Remove ${id} skill `);
  }

  render() {
    const { activeStep } = this.state;

    const isFirstStep = activeStep === 0;
    const isSecondStep = activeStep === 1;
    const isFinishStep = activeStep === 2;

    return (
      <>
        <div className="steps-nav flexbox justify-space-between">
          <div className="steps-nav-title">Your Shared Skills</div>

          <div className="steps-nav-btn">
            {(isSecondStep || isFinishStep) && (
              <div className="btn-group clearfix">
                <Button onClick={this.handleBack} isWhite text="Back" />
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
            skillList={[{ id: 1, title: 'Lorem ipsum Skill' }]}
          />
        )}
        {isSecondStep && (
          <SecondStep onNext={this.handleNext} />
        )}
        {isFinishStep && <FinishStep />}

        {/* <div className="skills-footer">
          <a href="#">
            <span className="icon icon-add btn btn-blue add-btn" />
            Add Here New Teachers Skill Category
          </a>
        </div> */}
      </>
    );
  }
}

export default Skills;
