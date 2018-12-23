import React from 'react';
// import { Field } from 'react-final-form';

export default function Posted() {
  return (
    <div className="filter-block">
      <div className="filter-title">
        Budget:
      </div>
      <div className="checkbox-list-block clearfix">
        <div className="checkbox-block">
          <input type="checkbox" id="checkbox-8.1" />
          <label htmlFor="checkbox-8.1">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">Not defined</span>
          </label>
        </div>
        <div className="checkbox-block">
          <input type="checkbox" id="checkbox-8.2" />
          <label htmlFor="checkbox-8.2">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">&lt;$100</span>
          </label>
        </div>
        <div className="checkbox-block">
          <input type="checkbox" id="checkbox-8.3" />
          <label htmlFor="checkbox-8.3">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">&lt;$1000</span>
          </label>
        </div>
        <div className="checkbox-block">
          <input type="checkbox" id="checkbox-8.4" />
          <label htmlFor="checkbox-8.4">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">&lt;$300</span>
          </label>
        </div>
        <div className="checkbox-block">
          <input type="checkbox" id="checkbox-8.5" />
          <label htmlFor="checkbox-8.5">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">&gt;$1000</span>
          </label>
        </div>
      </div>
    </div>
  );
}
