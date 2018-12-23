import React from 'react';
import { Field } from 'react-final-form';

export default function Place() {
  return (
    <div className="filter-block">
      <div className="filter-title">
        Place of Work:
      </div>
      <div className="checkbox-list-block clearfix">
        <div className="checkbox-block">
          <Field component="input" name="place" value="online" type="checkbox" id="checkbox-3.1" />
          <label htmlFor="checkbox-3.1">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">On-Line</span>
          </label>
        </div>
        <div className="checkbox-block">
          <Field component="input" name="place" value="onsite" type="checkbox" id="checkbox-3.2" />
          <label htmlFor="checkbox-3.2">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">On-Site</span>
          </label>
        </div>
      </div>
    </div>
  );
}
