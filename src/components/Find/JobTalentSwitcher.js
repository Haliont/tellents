import React from 'react';

function RadioBtn({
  onChange, title, value, checked,
}) {
  return (
    <div className="radio">
      <input
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
        id={`jobs-filter-${value}`}
      />
      <label htmlFor={`jobs-filter-${value}`}>
        <span className="radio-text">{title}</span>
      </label>
    </div>
  );
}

export default class JobTalentSwitcher extends React.Component {
  handleClick = () => {
    const { history, searchObject } = this.props;
    history.push(`/dashboard/find/${searchObject === 'talent' ? 'job' : 'talent'}`);
  }

  handleChange = ({ target }) => {
    const { history } = this.props;
    history.push(`/dashboard/find/${target.value}`);
  }

  render() {
    const { searchObject } = this.props;

    const activeClassName = searchObject === 'job' ? 'left' : 'right';

    return (
      <div className="panel panel-default panel-gray job-boxes-filter">
        <div className="search-filter radio-block flexbox justify-space-center">
          <RadioBtn
            value="job"
            title="Jobs"
            checked={searchObject === 'job'}
            onChange={this.handleChange}
          />
          <button
            type="button"
            onClick={this.handleClick}
            className={`btn radio-switcher clearfix ${activeClassName}`}
          >
            <div className="circul-shape">
              <span className="icon icon-check-mark" />
            </div>
          </button>
          <RadioBtn
            value="talent"
            title="Talents"
            checked={searchObject === 'talent'}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}
