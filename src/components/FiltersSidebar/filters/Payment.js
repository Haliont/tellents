import React from 'react';
// import { Field } from 'react-final-form';

export default function Posted() {
  return (
    <div className="filter-block">
      <div className="filter-title">
        Payment:
      </div>
      <div className="checkbox-list-block clearfix">
        <div className="checkbox-block">
          <input type="checkbox" id="checkbox-7.1" />
          <label htmlFor="checkbox-7.1">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">Fixed</span>
          </label>
        </div>
        <div className="checkbox-block">
          <input type="checkbox" id="checkbox-7.2" />
          <label htmlFor="checkbox-7.2">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">Hourly</span>
          </label>
        </div>
      </div>
      <div className="filter-inputs flexbox justify-space-between">
        <input type="text" defaultValue={0} className="form-control" />
        <span>to</span>
        <input type="text" defaultValue="$20" className="form-control" />
      </div>
    </div>
  );
}
