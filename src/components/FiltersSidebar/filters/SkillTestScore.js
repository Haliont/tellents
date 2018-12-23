import React from 'react';
import { Field } from 'react-final-form';

export default function SkillTestScore() {
  return (
    <div className="filter-block">
      <div className="filter-title">
        Skill Test Score:
      </div>
      <div className="checkbox-list-block clearfix">
        <div className="checkbox-block">
          <Field name="skill" value="i_5" component="input" type="radio" id="checkbox-9.1" />
          <label htmlFor="checkbox-9.1">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">Best (5)</span>
          </label>
        </div>
        <div className="checkbox-block">
          <Field name="skill" value="i_5_4" component="input" type="radio" id="checkbox-9.2" />
          <label htmlFor="checkbox-9.2">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">5-4.6</span>
          </label>
        </div>
        <div className="checkbox-block">
          <Field name="skill" value="i_4" component="input" type="radio" id="checkbox-9.3" />
          <label htmlFor="checkbox-9.3">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">4.6-4</span>
          </label>
        </div>
        <div className="checkbox-block">
          <Field name="skill" value="l_4" component="input" type="radio" id="checkbox-9.4" />
          <label htmlFor="checkbox-9.4">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">{'<4'}</span>
          </label>
        </div>
      </div>
    </div>
  );
}
