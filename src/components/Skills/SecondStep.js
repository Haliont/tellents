import React from 'react';
import Button from './Button';

function SecondStep({ onNext }) {
  return (
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
}

export default SecondStep;
