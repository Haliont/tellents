import React from 'react';
import JobTalentSwitcher from './JobTalentSwitcher';
import { Row, Left, Right } from './Grid';

export default function JobBoxes({ searchObject, history }) {
  return (
    <Row
      className="job-boxes-header"
    >
      <Left>
        <JobTalentSwitcher searchObject={searchObject} history={history} />
      </Left>
      <Right>
        <div className="panel panel-default panel-gray job-boxes-nav">
          <nav className="flexbox justify-flex-end">
            <div className="sort-nav">
              <span className="sort-nav-title">Sort By</span>
              <button type="button" className="btn">
                <div className="my-select-box">
                  <span className="my-select-result">
                    <span className="text">Relevance</span>
                    <span className="icon icon-down-arrow" />
                  </span>
                  <div className="my-select-options">
                    <div className="caret-block">
                      <span className="caret-top" />
                    </div>
                    <div className="radio-block">
                      <div className="radio">
                        <input type="radio" name="jobs-sort-option" id="jobs-sort-option-1" defaultValue="jobs-sort-option-1" defaultChecked />
                        <label htmlFor="jobs-sort-option-1">
                          <span className="check-mark icon icon-check-mark" />
                          <span className="radio-text">Relevance</span>
                        </label>
                      </div>
                      <div className="radio">
                        <input type="radio" name="jobs-sort-option" id="jobs-sort-option-2" defaultValue="jobs-sort-option-2" />
                        <label htmlFor="jobs-sort-option-2">
                          <span className="check-mark icon icon-check-mark" />
                          <span className="radio-text">Date</span>
                        </label>
                      </div>
                      <div className="radio">
                        <input type="radio" name="jobs-sort-option" id="jobs-sort-option-3" defaultValue="jobs-sort-option-3" />
                        <label htmlFor="jobs-sort-option-3">
                          <span className="check-mark icon icon-check-mark" />
                          <span className="radio-text">Rate</span>
                        </label>
                      </div>
                      <div className="radio">
                        <input type="radio" name="jobs-sort-option" id="jobs-sort-option-4" defaultValue="jobs-sort-option-4" />
                        <label htmlFor="jobs-sort-option-4">
                          <span className="check-mark icon icon-check-mark" />
                          <span className="radio-text">Alfabet</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
              <span className="sort-result">
                Result:
                <span className="sort-result-numb">25</span>
              </span>
            </div>
          </nav>
        </div>
      </Right>
    </Row>
  );
}
