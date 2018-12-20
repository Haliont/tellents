import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';
import Button from '../Button';

class FindCardsList extends React.Component {
  componentDidMount() {
    const { fetchCards, clearList } = this.props;
    clearList();
    fetchCards();
  }

  onLoadMore = () => {
    const { fetchCards } = this.props;
    fetchCards();
  };

  render() {
    const {
      cards,
      isBusy,
      renderCard,
      isFirstRequest,
    } = this.props;

    const { onLoadMore } = this;

    if (isFirstRequest) {
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
            {isBusy ? <Spinner /> : 'Load more'}
          </Button>
        </div>
      </>
    );
  }
}

FindCardsList.propTypes = {
  cards: PropTypes.instanceOf(Array).isRequired,
  isBusy: PropTypes.bool.isRequired,
  clearList: PropTypes.func.isRequired,
  renderCard: PropTypes.func.isRequired,
};

export default FindCardsList;
