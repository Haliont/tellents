import React from 'react';
import { Field } from 'react-final-form';

export default function JobDoneSuccess() {
  return (
    <div className="filter-block">
      <div className="filter-title">
        Job Done Success:
      </div>
      <div className="checkbox-list-block clearfix">
        <div className="checkbox-block">
          <Field name="ds" value="i_100" component="input" type="radio" id="checkbox-8.1" />
          <label htmlFor="checkbox-8.1">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">100%</span>
          </label>
        </div>
        <div className="checkbox-block">
          <Field name="ds" value="m_95" component="input" type="radio" id="checkbox-8.2" />
          <label htmlFor="checkbox-8.2">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">{'> 95%'}</span>
          </label>
        </div>
        <div className="checkbox-block">
          <Field name="ds" value="i_85-95" component="input" type="radio" id="checkbox-8.3" />
          <label htmlFor="checkbox-8.3">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">95-85%</span>
          </label>
        </div>
        <div className="checkbox-block">
          <Field name="ds" value="l_85" component="input" type="radio" id="checkbox-8.4" />
          <label htmlFor="checkbox-8.4">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">{'< 85%'}</span>
          </label>
        </div>
      </div>
    </div>
  );
}
