import React from 'react';
import cn from 'classnames';
import makeToggleable from '../../HOC/makeToggleable';

const talentOptions = [
  { text: 'Relevance', value: 'relevance' },
  { text: 'Most saved', value: 'saved' },
  { text: 'Highest Score', value: 'rate' },
  { text: 'Most Hired', value: 'hired' },
];

const jobOptions = [
  { text: 'Newest', value: 'newest' },
  { text: 'Highest budget', value: 'budget' },
  { text: 'Relevance', value: 'Relevance' },
  { text: 'Long term', value: 'longterm' },
];

const getOptions = (searchObject) => {
  switch (searchObject) {
    case 'talent':
      return talentOptions;
    case 'job':
      return jobOptions;
    default:
      return null;
  }
};

class SortNav extends React.Component {
  constructor(props) {
    super(props);
    const active = getOptions(props.searchObject)
      .find(({ value }) => value === props.selected);

    this.state = {
      active: (active || {}).text || 'Relevance',
    };
  }

  onClick = (text, value) => () => {
    const {
      toggle, filterCards, searchObject,
    } = this.props;

    this.setState({ active: text });

    filterCards({ sort: value }, searchObject);
    toggle();
  };

  render() {
    const {
      isOpen, toggle, searchObject,
    } = this.props;

    const { active } = this.state;

    const { onClick } = this;

    return (
      <button type="button" className="btn">
        <div className={cn('my-select-box', isOpen && 'open')}>
          <span onClick={toggle} className="my-select-result">
            <span className="text">{active}</span>
            <span className="icon icon-down-arrow" />
          </span>
          <div className="my-select-options">
            <div className="caret-block">
              <span className="caret-top" />
            </div>
            <div className="radio-block">
              {getOptions(searchObject).map(({ text, value }) => (
                <div key={text} onClick={onClick(text, value)} className="radio">
                  <input type="radio" />
                  <label htmlFor="jobs-sort-option-1">
                    <span className="check-mark icon icon-check-mark" />
                    <span className="radio-text">{text}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </button>
    );
  }
}

export default makeToggleable(SortNav);
