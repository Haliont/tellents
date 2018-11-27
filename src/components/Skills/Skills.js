import React from 'react';

const Button = ({ text, isWhite, ...rest }) => (
  <button
    type="button"
    className={`btn btn-bold ${isWhite ? 'btn-blue-border' : 'btn-blue'}`}
    {...rest}
  >
    {text}
  </button>
);

const FirstStep = () => (
  <div>
    <div className="skill-subcat skill-subcat--item">
      <div className="flexbox justify-space-between">
        <div className="skill-block">
          <div className="skill-block-title">Math &amp; Science</div>
          <div className="skill-block-list">
            <form>
              <div className="checkbox-block">
                <input type="checkbox" id="math-1" defaultChecked />
                <label htmlFor="math-1">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark" />
                  </span>
                  <span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                </label>
              </div>
              <div className="checkbox-block">
                <input type="checkbox" id="math-2" defaultChecked />
                <label htmlFor="math-2">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark" />
                  </span>
                  <span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                </label>
              </div>
              <div className="checkbox-block">
                <input type="checkbox" id="math-3" defaultChecked />
                <label htmlFor="math-3">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark" />
                  </span>
                  <span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                </label>
              </div>
              <div className="checkbox-block">
                <input type="checkbox" id="math-4" defaultChecked />
                <label htmlFor="math-4">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark" />
                  </span>
                  <span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                </label>
              </div>
              <div className="checkbox-block">
                <input type="checkbox" id="math-5" defaultChecked />
                <label htmlFor="math-5">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark" />
                  </span>
                  <span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                </label>
              </div>
            </form>
          </div>
        </div>
        <div className="skill-sub-block">
          <div className="skill-block-title">Skills</div>
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
      <div className="skill-block-footer">
        <a href="#">View More</a>
        <a href="#">Edit</a>
      </div>
    </div>
  </div>
);

const SecondStep = ({ onNext }) => (
  <div>
    <div className="skill-block skill-cat">
      <div className="skill-block-title">Choose  Your Skill Category</div>
      <div className="skill-block-list">
        <form>
          <div className="checkbox-block">
            <input type="checkbox" id="cat-1" />
            <label htmlFor="cat-1">
              <span className="checkbox-circle">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
            </label>
          </div>
        </form>
      </div>
      <Button onClick={onNext} text="Next" />
    </div>
  </div>
);

const FinishStep = () => (
  <div>
    <div className="skill-subcat">
      <div className="flexbox justify-space-between">
        <div className="skill-block">
          <div className="skill-block-title">Math &amp; Science</div>
          <div className="skill-block-list">
            <form>
              <div className="checkbox-block">
                <input type="checkbox" id="math-1" />
                <label htmlFor="math-1">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark" />
                  </span>
                  <span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                </label>
              </div>
              <div className="checkbox-block">
                <input type="checkbox" id="math-2" />
                <label htmlFor="math-2">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark" />
                  </span>
                  <span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                </label>
              </div>
              <div className="checkbox-block">
                <input type="checkbox" id="math-3" />
                <label htmlFor="math-3">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark" />
                  </span>
                  <span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                </label>
              </div>
              <div className="checkbox-block">
                <input type="checkbox" id="math-4" />
                <label htmlFor="math-4">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark" />
                  </span>
                  <span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                </label>
              </div>
              <div className="checkbox-block">
                <input type="checkbox" id="math-5" />
                <label htmlFor="math-5">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark" />
                  </span>
                  <span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                </label>
              </div>
              <div className="checkbox-block">
                <input type="checkbox" id="math-6" />
                <label htmlFor="math-6">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark" />
                  </span>
                  <span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                </label>
              </div>
              <div className="checkbox-block">
                <input type="checkbox" id="math-7" />
                <label htmlFor="math-7">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark" />
                  </span>
                  <span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                </label>
              </div>
              <div className="checkbox-block">
                <input type="checkbox" id="math-8" />
                <label htmlFor="math-8">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark" />
                  </span>
                  <span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                </label>
              </div>
              <div className="checkbox-block">
                <input type="checkbox" id="math-9" />
                <label htmlFor="math-9">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark" />
                  </span>
                  <span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                </label>
              </div>
              <div className="checkbox-block">
                <input type="checkbox" id="math-10" />
                <label htmlFor="math-10">
                  <span className="checkbox-circle">
                    <span className="icon icon-check-mark" />
                  </span>
                  <span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                </label>
              </div>
            </form>
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

        {isFirstStep && <FirstStep />}
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
