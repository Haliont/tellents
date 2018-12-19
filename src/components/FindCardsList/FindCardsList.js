import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';
import Button from '../Button';

class FindCardsList extends React.Component {
  componentDidMount() {
    const { fetchCards } = this.props;
    const pageNumber = 1;
    fetchCards(pageNumber);
  }

  render() {
    const {
      cards,
      isBusy,
      onLoadMore,
      renderCard,
    } = this.props;

    if (isBusy) {
      return <Spinner />;
    }

    return (
      <>
        <div
          className="job-boxes-wrapper flexbox justify-space-between flex-wrap"
        >
          {cards.map(renderCard)}
        </div>
        <div
          className="job-boxes-footer"
        >
          <Button
            onClick={onLoadMore}
            className="btn btn-bg-transparent blue-color"
            style={{ fontWeight: '700' }}
          >
            Load more
          </Button>
        </div>
      </>
    );
  }
}

FindCardsList.propTypes = {
  cards: PropTypes.instanceOf(Array).isRequired,
  isBusy: PropTypes.bool.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  renderCard: PropTypes.func.isRequired,
};

export default FindCardsList;
