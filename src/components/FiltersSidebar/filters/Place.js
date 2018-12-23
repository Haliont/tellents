import React from 'react';

export default function Place() {
  return (
    <div className="filter-block">
      <div className="filter-title">
        Place:
      </div>
      <div className="checkbox-list-block clearfix">
        <div className="checkbox-block">
          <input type="checkbox" id="checkbox-3.1" />
          <label htmlFor="checkbox-3.1">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">On-line</span>
          </label>
        </div>
        <div className="checkbox-block">
          <input type="checkbox" id="checkbox-3.2" />
          <label htmlFor="checkbox-3.2">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">On-site</span>
          </label>
        </div>
      </div>
    </div>
  );
}
