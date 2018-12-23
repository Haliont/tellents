import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import makeToggleable from '../../HOC/makeToggleable';

class PureList extends React.PureComponent {
  render() {
    const { renderItem, items } = this.props;
    return items.map(renderItem);
  }
}

function FilterSelect({
  isOpen, toggle, title, items, renderItem,
}) {
  return (
    <div
      className={cn(
        'filter-dropdown-block',
        'clearfix',
        isOpen && 'open',
      )}
    >
      <button
        type="button"
        onClick={toggle}
        className="btn btn-default dropdown-toggle"
      >
        <div className="flexbox justify-space-between">
          <span className="text">{title}</span>
          <span className="icon icon-down-arrow" />
        </div>
      </button>
      <div className="dropdown-list">
        <div className="caret-block">
          <span className="caret-top" />
        </div>
        <div className="dropdown-list-wrapper">
          <div className="checkbox-list-block">
            {/* {items.map(renderItem)} */}
            <PureList items={items} renderItem={renderItem} />
          </div>
        </div>
      </div>
    </div>
  );
}

FilterSelect.defaultProps = {
  title: 'Choose an item',
};

FilterSelect.propTypes = {
  title: PropTypes.string,
  items: PropTypes.instanceOf(Array).isRequired,
  renderItem: PropTypes.func.isRequired,
};

export default makeToggleable(FilterSelect);
