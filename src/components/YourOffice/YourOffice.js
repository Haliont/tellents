import React, { Component } from 'react';
import {
  Switch, Route, Link,
} from 'react-router-dom';

import Skills from '../../containers/Skills';
import ListItemLink from '../ListItemLink';

const navLinks = [
  ['overview', 'Overview'],
  ['message', 'Messages'],
  ['jobs', 'My Jobs'],
  ['promo', 'My Promo'],
  ['skills', 'My Skills'],
  ['saved', 'Saved'],
  ['media', 'My Media'],
  ['accounts', 'Accounts'],
  ['profile', 'Profile'],
];

class YourOffice extends Component {
  render() {
    return (
      <div className="panel panel-default my-main-panel">
        <div className="panel-body">
          <div className="flexbox">

            <div className="right-col">
              <ul className="nav nav-pills nav-stacked my-sidebar" role="tablist">
                {navLinks.map(([name, text]) => (
                  <ListItemLink
                    key={name}
                    to={`/dashboard/your-office/${name}`}
                    liProps={{ role: 'presentation' }}
                    label={text}
                  >
                    <span className={`icon icon-${name}`} />
                    {text}
                  </ListItemLink>
                ))}
              </ul>
            </div>

            <div className="left-col">
              <div className="tab-content my-central-info">
                <Switch>
                  <Route path="/dashboard/your-office/skills" component={Skills} />
                  <Route
                    render={() => (
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          height: '100%',
                        }}
                      >
                        <h3>This page is in active development</h3>
                        <p>
                          Go to{' '}
                          <Link to="/dashboard/your-office/skills">Your skills</Link>
                        </p>
                      </div>
                    )}
                  />
                </Switch>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default YourOffice;
