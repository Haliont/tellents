import React from 'react';
import { Field } from 'react-final-form';

export default function Posted() {
  return (
    <div className="filter-block">
      <div className="filter-title">
        Posted:
      </div>
      <div className="checkbox-list-block clearfix">
        <div className="checkbox-block">
          <Field name="post" value="i24" component="input" type="radio" id="checkbox-2.1" />
          <label htmlFor="checkbox-2.1">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">24h</span>
          </label>
        </div>
        <div className="checkbox-block">
          <Field name="post" value="i3d" component="input" type="radio" id="checkbox-2.2" />
          <label htmlFor="checkbox-2.2">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">1w</span>
          </label>
        </div>
        <div className="checkbox-block">
          <Field name="post" value="i1w" component="input" type="radio" id="checkbox-2.3" />
          <label htmlFor="checkbox-2.3">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">3d </span>
          </label>
        </div>
        <div className="checkbox-block">
          <Field name="post" value="m_1w" component="input" type="radio" id="checkbox-2.4" />
          <label htmlFor="checkbox-2.4">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">&gt; 1 W</span>
          </label>
        </div>
      </div>
    </div>
  );
}
