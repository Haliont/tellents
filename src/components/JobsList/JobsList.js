import React, { Component } from 'react';
import moment from 'moment';
import JobCard from '../JobCard';
import Spinner from '../Spinner';

const getPeriodNameByType = (type) => {
  const map = {
    day: 'D',
    month: 'M',
  };

  return map[type];
};

class JobsList extends Component {
  componentDidMount() {
    const { fetchJobs } = this.props;
    const pageNumber = 1;
    fetchJobs(pageNumber);
  }

  render() {
    const { jobsCards, isBusy } = this.props;

    if (isBusy) {
      return <Spinner />;
    }

    return (
      <div
        className="job-boxes-wrapper flexbox justify-space-between flex-wrap"
      >
        {jobsCards.map((j, inx) => (
          <JobCard
            promotionDescription={j.promotion_description}
            promotionTitle={j.promotion_title}
            jobDescription={j.description}
            skillTestSend={j.user.skill_test_send}
            userAvatarSrc={j.user.image.url}
            jobCreatedAt={moment(j.created_at).fromNow()}
            description={j.description}
            placeOfWork={j.user.placeOfWork}
            commitment={j.commitment}
            skillTags={j.skill_tags}
            languages={j.user.languages}
            jobsCount={j.user.total_jobs}
            jobTitle={j.title}
            username={j.user.full_name}
            userRate={j.user.total_rate}
            country={j.user.country}
            period={`${j.period} ${getPeriodNameByType(j.period_type)}`}
            budget={j.price}
            likes={j.offers}
            level={j.level}
            key={j.id}
            inx={inx}
          />
        ))}
      </div>
    );
  }
}

export default JobsList;
