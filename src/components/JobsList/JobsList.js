import React, { Component } from 'react';
import JobCard from '../JobCard';
import Spinner from '../Spinner';
// import PropTypes from 'prop-types';

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
        {jobsCards.map((job, ix) => (
          <JobCard
            isEven={(ix + 1) % 2 === 0}
            key={job.id}
            title={job.title}
            user={job.user}
            promotionTitle={job.promotion_title}
            promotionDescription={job.promotion_description}
            payment={job.payment}
            hourlyPrice={job.hourly_price}
            price={job.price}
            period={job.period}
            periodType={job.period_type}
            commitment={job.commitment}
            level={job.level}
            timeType={job.time_type}
            status={job.status}
            description={job.description}
            contractGeneralNotes={job.contract_general_notes}
            createdAt={job.created_at}
            categories={job.categories}
            owner={job.owner}
            haveBid={job.have_bid}
            privacy={job.privacy}
            publicJob={job.public_job}
            offers={job.offers}
            skillTags={job.skill_tags}
          />
        ))}
      </div>
    );
  }
}

export default JobsList;
