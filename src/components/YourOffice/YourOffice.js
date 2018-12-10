import React, { Component } from 'react';
import {
  Switch, Route, Link,
} from 'react-router-dom';

import Skills from '../../containers/Skills';

class YourOffice extends Component {
  render() {
    return (
      <div className="panel panel-default my-main-panel">
        <div className="panel-body">
          <div className="flexbox">

            <div className="right-col">
              <ul className="nav nav-pills nav-stacked my-sidebar" role="tablist">
                <li role="presentation">
                  <Link
                    to="/dashboard/your-office/skills"
                    aria-controls="overview"
                    role="tab"
                    data-toggle="tab"
                  >
                    <span className="icon icon-skills" />
                    Skills
                  </Link>
                </li>
              </ul>
            </div>

            <div className="left-col">
              <div className="tab-content my-central-info">
                <div role="tabpanel" className="tab-pane my-tab active" id="skills">
                  <Switch>
                    <Route path="/dashboard/your-office/skills" component={Skills} />
                    <Route
                      render={() => (
                        <div>
                          <p>Выбери скилы:</p>
                          <Link to="/dashboard/your-office/skills">Скилы</Link>
                        </div>
                      )}
                    />
                  </Switch>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default YourOffice;
