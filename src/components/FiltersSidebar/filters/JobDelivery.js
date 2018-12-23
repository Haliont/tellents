import React from 'react';

export default function Posted() {
  return (
    <div className="filter-block">
      <div className="filter-title">
        Job Delivery:
      </div>
      <div className="checkbox-list-block clearfix">
        <div className="checkbox-block">
          <input type="checkbox" id="checkbox-10.1" />
          <label htmlFor="checkbox-10.1">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">Not defined</span>
          </label>
        </div>
        <div className="checkbox-block">
          <input type="checkbox" id="checkbox-10.2" />
          <label htmlFor="checkbox-10.2">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">Less 1W</span>
          </label>
        </div>
      </div>
    </div>
  );
}
