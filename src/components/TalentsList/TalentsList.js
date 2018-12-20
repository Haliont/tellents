import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import TalentCard from '../TalentCard';
import FindCardsList from '../FindCardsList';

const renderCard = (item, inx) => (
  <TalentCard
    key={item.id}
    inx={inx}
    likes={item.offers}
    country={item.country}
    userRate={item.total_rate}
    username={item.full_name}
    skillTags={item.skill_tags}
    jobsCount={item.total_jobs}
    languages={item.languages}
    feedbacks={item.offers}
    workHours={item.total_hours}
    savedCount={item.saved_count}
    lastActive={moment(item.last_seen_at).fromNow()}
    promotions={item.promotions}
    description={(item.profession || {}).description}
    placeOfWork={item.place_to_work}
    availability={item.availability}
    userAvatarSrc={item.image.url}
    promotionTitle={(item.promotions[0] || {}).title}
    userProfession={(item.profession || {}).title}
  />
);

function TalentsList({
  talentsCards, isBusy, fetchTalents, clearList, isFirstRequest,
}) {
  return (
    <FindCardsList
      isBusy={isBusy}
      cards={talentsCards}
      clearList={clearList}
      renderCard={renderCard}
      fetchCards={fetchTalents}
      isFirstRequest={isFirstRequest}
    />
  );
}

TalentsList.propTypes = {
  isBusy: PropTypes.bool.isRequired,
  talentsCards: PropTypes.instanceOf(Array).isRequired,
};

export default TalentsList;
