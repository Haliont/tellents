import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import moment from 'moment';
import TalentCard from '../TalentCard';
import Spinner from '../Spinner';

class TalentsList extends Component {
  componentDidMount() {
    const { fetchTalents } = this.props;
    const pageNumber = 1;
    fetchTalents(pageNumber);
  }

  render() {
    const { talentsCards, isBusy } = this.props;

    if (isBusy) {
      return <Spinner />;
    }

    return (
      <div
        className={cn(
          'flexbox',
          'flex-wrap',
          'job-boxes-wrapper',
          'justify-space-between',
          'job-boxes-wrapper--talents',
        )}
      >
        {talentsCards.map((t, inx) => (
          <TalentCard
            key={t.id}
            inx={inx}
            likes={t.offers}
            userRate={t.total_rate}
            username={t.full_name}
            country={t.country}
            skillTags={t.skill_tags}
            jobsCount={t.total_jobs}
            languages={t.languages}
            feedbacks={t.offers}
            workHours={t.total_hours}
            savedCount={t.saved_count}
            lastActive={moment(t.last_seen_at).fromNow()}
            promotions={t.promotions}
            description={(t.profession || {}).description}
            placeOfWork={t.place_to_work}
            availability={t.availability}
            userAvatarSrc={t.image.url}
            promotionTitle={(t.promotions[0] || {}).title}
            userProfession={(t.profession || {}).title}
          />
        ))}
      </div>
    );
  }
}

TalentsList.propTypes = {
  isBusy: PropTypes.bool.isRequired,
  talentsCards: PropTypes.instanceOf(Array).isRequired,
};

export default TalentsList;
