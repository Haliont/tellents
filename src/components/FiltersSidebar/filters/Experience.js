import React from 'react';
import { Field } from 'react-final-form';

export default function Experience() {
  return (
    <div className="filter-block">
      <div className="filter-title">
        Experience:
      </div>
      <div className="checkbox-list-block clearfix">
        <div className="checkbox-block">
          <Field name="exp" value="intern" component="input" type="checkbox" id="checkbox-1.1" />
          <label htmlFor="checkbox-1.1">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">Intern</span>
          </label>
        </div>
        <div className="checkbox-block">
          <Field name="exp" value="junior" component="input" type="checkbox" id="checkbox-1.2" />
          <label htmlFor="checkbox-1.2">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">Junior</span>
          </label>
        </div>
        <div className="checkbox-block">
          <Field name="exp" value="senior" component="input" type="checkbox" id="checkbox-1.3" />
          <label htmlFor="checkbox-1.3">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">Senior</span>
          </label>
        </div>
        <div className="checkbox-block">
          <Field name="exp" value="expert" component="input" type="checkbox" id="checkbox-1.4" />
          <label htmlFor="checkbox-1.4">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">Expert</span>
          </label>
        </div>
      </div>
    </div>
  );
}
