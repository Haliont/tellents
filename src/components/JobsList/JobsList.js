import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import JobCard from '../JobCard';
import FindCardsList from '../FindCardsList';

const getPeriodNameByType = (type) => {
  const map = {
    day: 'D',
    month: 'M',
  };

  return map[type];
};

const renderCard = (item, inx) => (
  <JobCard
    promotionDescription={item.promotion_description}
    promotionTitle={item.promotion_title}
    jobDescription={item.description}
    skillTestSend={item.user.skill_test_send}
    userAvatarSrc={item.user.image.url}
    jobCreatedAt={moment(item.created_at).fromNow()}
    description={item.description}
    placeOfWork={item.user.placeOfWork}
    commitment={item.commitment}
    skillTags={item.skill_tags}
    languages={item.user.languages}
    jobsCount={item.user.total_jobs}
    jobTitle={item.title}
    username={item.user.full_name}
    userRate={item.user.total_rate}
    country={item.user.country}
    period={`${item.period} ${getPeriodNameByType(item.period_type)}`}
    budget={item.price}
    likes={item.offers}
    level={item.level}
    key={item.id}
    inx={inx}
  />
);

function JobsList({ jobsCards, isBusy, fetchJobs }) {
  return (
    <FindCardsList
      isBusy={isBusy}
      cards={jobsCards}
      renderCard={renderCard}
      fetchCards={fetchJobs}
    />
  );
}

JobsList.propTypes = {
  isBusy: PropTypes.bool.isRequired,
  jobsCards: PropTypes.instanceOf(Array).isRequired,
};

export default JobsList;
