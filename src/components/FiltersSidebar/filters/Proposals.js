import React from 'react';
import { Field } from 'react-final-form';

export default function Proposals() {
  return (
    <div className="filter-block">
      <div className="filter-title">
        Proposals:
      </div>
      <div className="checkbox-list-block clearfix">
        <div className="checkbox-block">
          <Field component="input" name="prop" value="i0_5" type="radio" id="checkbox-9.1" />
          <label htmlFor="checkbox-9.1">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">0 - 5</span>
          </label>
        </div>
        <div className="checkbox-block">
          <Field component="input" name="prop" value="i5_10" type="radio" id="checkbox-9.2" />
          <label htmlFor="checkbox-9.2">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">5 - 10</span>
          </label>
        </div>
        <div className="checkbox-block">
          <Field component="input" name="prop" value="i10_20" type="radio" id="checkbox-9.3" />
          <label htmlFor="checkbox-9.3">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">10 - 20</span>
          </label>
        </div>
        <div className="checkbox-block">
          <Field component="input" name="prop" value="m_20" type="radio" id="checkbox-9.4" />
          <label htmlFor="checkbox-9.4">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">&gt;20</span>
          </label>
        </div>
        <div className="checkbox-block">
          <Field component="input" name="prop" value="undefined" type="radio" id="checkbox-9.5" />
          <label htmlFor="checkbox-9.5">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">None</span>
          </label>
        </div>
      </div>
    </div>
  );
}
