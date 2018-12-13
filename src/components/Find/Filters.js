import React from 'react';

export default function Filters() {
  return (
    <div className="panel panel-default">
      <button type="button" className="btn btn-bg-transparent close-btn icon-btn">
        <span className="glyphicon glyphicon-remove" />
      </button>
      <div className="filter-block">
        <div className="filter-title">
          Experience:
        </div>
        <div className="checkbox-list-block clearfix">
          <div className="checkbox-block">
            <input type="checkbox" id="checkbox-1.1" />
            <label htmlFor="checkbox-1.1">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">Intern</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input type="checkbox" id="checkbox-1.2" />
            <label htmlFor="checkbox-1.2">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">Junior</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input type="checkbox" id="checkbox-1.3" />
            <label htmlFor="checkbox-1.3">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">Senior</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input type="checkbox" id="checkbox-1.4" />
            <label htmlFor="checkbox-1.4">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">Expert</span>
            </label>
          </div>
        </div>
      </div>
      <div className="filter-block">
        <div className="filter-title">
          Posted:
        </div>
        <div className="checkbox-list-block clearfix">
          <div className="checkbox-block">
            <input type="checkbox" id="checkbox-2.1" />
            <label htmlFor="checkbox-2.1">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">24h</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input type="checkbox" id="checkbox-2.2" />
            <label htmlFor="checkbox-2.2">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">1w</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input type="checkbox" id="checkbox-2.3" />
            <label htmlFor="checkbox-2.3">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">3d </span>
            </label>
          </div>
          <div className="checkbox-block">
            <input type="checkbox" id="checkbox-2.4" />
            <label htmlFor="checkbox-2.4">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">&gt; 1 W</span>
            </label>
          </div>
        </div>
      </div>
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
      <div className="filter-block">
        <div className="filter-title">
          Loocation:
        </div>
        <div className="filter-dropdown-block clearfix">
          <button type="button" className="btn btn-default dropdown-toggle">
            <div className="flexbox justify-space-between">
              <span className="text">Country</span>
              <span className="icon icon-down-arrow" />
            </div>
          </button>
          <div className="dropdown-list">
            <div className="caret-block">
              <span className="caret-top" />
            </div>
            <div className="dropdown-list-wrapper">
              <div className="checkbox-list-block">
                <div className="checkbox-block">
                  <input type="checkbox" id="checkbox-4.1" />
                  <label htmlFor="checkbox-4.1">
                    <span className="filter-checkbox">
                      <span className="icon icon-check-mark" />
                    </span>
                    <span className="checkbox-text">USA</span>
                  </label>
                </div>
                <div className="checkbox-block">
                  <input type="checkbox" id="checkbox-4.2" />
                  <label htmlFor="checkbox-4.2">
                    <span className="filter-checkbox">
                      <span className="icon icon-check-mark" />
                    </span>
                    <span className="checkbox-text">Canada</span>
                  </label>
                </div>
                <div className="checkbox-block">
                  <input type="checkbox" id="checkbox-4.3" />
                  <label htmlFor="checkbox-4.3">
                    <span className="filter-checkbox">
                      <span className="icon icon-check-mark" />
                    </span>
                    <span className="checkbox-text">Poland</span>
                  </label>
                </div>
                <div className="checkbox-block">
                  <input type="checkbox" id="checkbox-4.4" />
                  <label htmlFor="checkbox-4.4">
                    <span className="filter-checkbox">
                      <span className="icon icon-check-mark" />
                    </span>
                    <span className="checkbox-text">Italia</span>
                  </label>
                </div>
                <div className="checkbox-block">
                  <input type="checkbox" id="checkbox-4.5" />
                  <label htmlFor="checkbox-4.5">
                    <span className="filter-checkbox">
                      <span className="icon icon-check-mark" />
                    </span>
                    <span className="checkbox-text">France</span>
                  </label>
                </div>
                <div className="checkbox-block">
                  <input type="checkbox" id="checkbox-4.6" />
                  <label htmlFor="checkbox-4.6">
                    <span className="filter-checkbox">
                      <span className="icon icon-check-mark" />
                    </span>
                    <span className="checkbox-text">Ukraine</span>
                  </label>
                </div>
                <div className="checkbox-block">
                  <input type="checkbox" id="checkbox-4.7" />
                  <label htmlFor="checkbox-4.7">
                    <span className="filter-checkbox">
                      <span className="icon icon-check-mark" />
                    </span>
                    <span className="checkbox-text">Turkey</span>
                  </label>
                </div>
                <div className="checkbox-block">
                  <input type="checkbox" id="checkbox-4.8" />
                  <label htmlFor="checkbox-4.8">
                    <span className="filter-checkbox">
                      <span className="icon icon-check-mark" />
                    </span>
                    <span className="checkbox-text">Italia</span>
                  </label>
                </div>
                <div className="checkbox-block">
                  <input type="checkbox" id="checkbox-4.9" />
                  <label htmlFor="checkbox-4.9">
                    <span className="filter-checkbox">
                      <span className="icon icon-check-mark" />
                    </span>
                    <span className="checkbox-text">France</span>
                  </label>
                </div>
                <div className="checkbox-block">
                  <input type="checkbox" id="checkbox-4.10" />
                  <label htmlFor="checkbox-4.10">
                    <span className="filter-checkbox">
                      <span className="icon icon-check-mark" />
                    </span>
                    <span className="checkbox-text">Ukraine</span>
                  </label>
                </div>
                <div className="checkbox-block">
                  <input type="checkbox" id="checkbox-4.11" />
                  <label htmlFor="checkbox-4.11">
                    <span className="filter-checkbox">
                      <span className="icon icon-check-mark" />
                    </span>
                    <span className="checkbox-text">Turkey</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="filter-block">
        <div className="filter-title">
          Languages:
        </div>
        <div className="filter-dropdown-block clearfix">
          <button type="button" className="btn btn-default dropdown-toggle">
            <div className="flexbox justify-space-between">
              <span className="text">Languages</span>
              <span className="icon icon-down-arrow" />
            </div>
          </button>
          <div className="dropdown-list">
            <div className="caret-block">
              <span className="caret-top" />
            </div>
            <div className="dropdown-list-wrapper">
              <div className="checkbox-list-block">
                <div className="checkbox-block">
                  <input type="checkbox" id="checkbox-5.1" />
                  <label htmlFor="checkbox-5.1">
                    <span className="filter-checkbox">
                      <span className="icon icon-check-mark" />
                    </span>
                    <span className="checkbox-text">English</span>
                  </label>
                </div>
                <div className="checkbox-block">
                  <input type="checkbox" id="checkbox-5.2" />
                  <label htmlFor="checkbox-5.2">
                    <span className="filter-checkbox">
                      <span className="icon icon-check-mark" />
                    </span>
                    <span className="checkbox-text">Russian</span>
                  </label>
                </div>
                <div className="checkbox-block">
                  <input type="checkbox" id="checkbox-5.3" />
                  <label htmlFor="checkbox-5.3">
                    <span className="filter-checkbox">
                      <span className="icon icon-check-mark" />
                    </span>
                    <span className="checkbox-text">Poland</span>
                  </label>
                </div>
                <div className="checkbox-block">
                  <input type="checkbox" id="checkbox-5.4" />
                  <label htmlFor="checkbox-5.4">
                    <span className="filter-checkbox">
                      <span className="icon icon-check-mark" />
                    </span>
                    <span className="checkbox-text">Italia</span>
                  </label>
                </div>
                <div className="checkbox-block">
                  <input type="checkbox" id="checkbox-5.5" />
                  <label htmlFor="checkbox-5.5">
                    <span className="filter-checkbox">
                      <span className="icon icon-check-mark" />
                    </span>
                    <span className="checkbox-text">Franch</span>
                  </label>
                </div>
                <div className="checkbox-block">
                  <input type="checkbox" id="checkbox-5.6" />
                  <label htmlFor="checkbox-5.6">
                    <span className="filter-checkbox">
                      <span className="icon icon-check-mark" />
                    </span>
                    <span className="checkbox-text">Ukrainien</span>
                  </label>
                </div>
                <div className="checkbox-block">
                  <input type="checkbox" id="checkbox-5.7" />
                  <label htmlFor="checkbox-5.7">
                    <span className="filter-checkbox">
                      <span className="icon icon-check-mark" />
                    </span>
                    <span className="checkbox-text">Turkey</span>
                  </label>
                </div>
                <div className="checkbox-block">
                  <input type="checkbox" id="checkbox-5.8" />
                  <label htmlFor="checkbox-5.8">
                    <span className="filter-checkbox">
                      <span className="icon icon-check-mark" />
                    </span>
                    <span className="checkbox-text">Italien</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="filter-block">
        <div className="filter-title">
          Availability:
        </div>
        <div className="checkbox-list-block clearfix">
          <div className="checkbox-block">
            <input type="checkbox" id="checkbox-6.1" />
            <label htmlFor="checkbox-6.1">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">&lt; 20 h</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input type="checkbox" id="checkbox-6.2" />
            <label htmlFor="checkbox-6.2">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">&gt;  30 h</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input type="checkbox" id="checkbox-6.3" />
            <label htmlFor="checkbox-6.3">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">30 h</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input type="checkbox" id="checkbox-6.4" />
            <label htmlFor="checkbox-6.4">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">Full-time</span>
            </label>
          </div>
        </div>
      </div>
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
      <div className="filter-block">
        <div className="filter-title">
          Proposals:
        </div>
        <div className="checkbox-list-block clearfix">
          <div className="checkbox-block">
            <input type="checkbox" id="checkbox-9.1" />
            <label htmlFor="checkbox-9.1">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">none</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input type="checkbox" id="checkbox-9.2" />
            <label htmlFor="checkbox-9.2">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">&lt;20</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input type="checkbox" id="checkbox-9.3" />
            <label htmlFor="checkbox-9.3">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">&lt;5</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input type="checkbox" id="checkbox-9.4" />
            <label htmlFor="checkbox-9.4">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">&gt;20</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input type="checkbox" id="checkbox-9.5" />
            <label htmlFor="checkbox-9.5">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">&lt;10</span>
            </label>
          </div>
        </div>
      </div>
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
    </div>
  );
}
