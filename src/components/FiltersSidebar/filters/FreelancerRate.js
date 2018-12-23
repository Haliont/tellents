import React from 'react';
import { Field } from 'react-final-form';

export default function FreelancerRate() {
  return (
    <div className="filter-block">
      <div className="filter-title">
        Freelancer Rate:
      </div>
      <div className="checkbox-list-block clearfix">
        <div className="checkbox-block">
          <Field name="rate" value="i_5" component="input" type="radio" id="checkbox-11.1" />
          <label htmlFor="checkbox-11.1">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">Best (5)</span>
          </label>
        </div>
        <div className="checkbox-block">
          <Field name="rate" value="i_5_4" component="input" type="radio" id="checkbox-11.2" />
          <label htmlFor="checkbox-11.2">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">5-4.8</span>
          </label>
        </div>
        <div className="checkbox-block">
          <Field name="rate" value="i_4" component="input" type="radio" id="checkbox-11.3" />
          <label htmlFor="checkbox-11.3">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">4.8-4.5</span>
          </label>
        </div>
        <div className="checkbox-block">
          <Field name="rate" value="l_4" component="input" type="radio" id="checkbox-11.4" />
          <label htmlFor="checkbox-11.4">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">{'<4.5'}</span>
          </label>
        </div>
      </div>
    </div>
  );
}
