import React from 'react';
import { Field } from 'react-final-form';

export default function Availability() {
  return (
    <div className="filter-block">
      <div className="filter-title">
        Availability:
      </div>
      <div className="checkbox-list-block clearfix">
        <div className="checkbox-block">
          <Field component="input" name="avl" value="per_week_10" type="checkbox" id="checkbox-6.1" />
          <label htmlFor="checkbox-6.1">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">&lt; 20 h</span>
          </label>
        </div>
        <div className="checkbox-block">
          <Field component="input" name="avl" value="per_week_up_to_30" type="checkbox" id="checkbox-6.2" />
          <label htmlFor="checkbox-6.2">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">&gt;  30 h</span>
          </label>
        </div>
        <div className="checkbox-block">
          <Field component="input" name="avl" value="per_week_more_than_30" type="checkbox" id="checkbox-6.3" />
          <label htmlFor="checkbox-6.3">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">30 h</span>
          </label>
        </div>
        <div className="checkbox-block">
          <Field component="input" name="avl" value="decide_later" type="checkbox" id="checkbox-6.4" />
          <label htmlFor="checkbox-6.4">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">Full-time</span>
          </label>
        </div>
      </div>
    </div>
  );
}
