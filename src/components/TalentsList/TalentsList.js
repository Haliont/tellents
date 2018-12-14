import React, { Component } from 'react';
import TalentCard from '../TalentCard';
import Spinner from '../Spinner';
// import PropTypes from 'prop-types';

// function TalentsList() {
//   return (
//     <p>TalentsList</p>
//   );
// }
// TalentsList.propTypes = {
//   someProp: PropTypes.string.isRequired,
// }

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
        className="job-boxes-wrapper job-boxes-wrapper--talents flexbox justify-space-between flex-wrap"
      >
        {talentsCards.map((talent, ix) => (
          <TalentCard
            isEven={(ix + 1) % 2 === 0}
            key={talent.id}
            name={talent.full_name}
            photoUrl={talent.image.url}
            professionTitle={(talent.profession || {}).title}
            professionDesc={(talent.profession || {}).description}
            workHours={talent.total_hours}
            jobsCount={talent.total_jobs}
            country={talent.country}
            tags={talent.skill_tags}
            price={talent.price}
            additionalInfo={(talent.promotions[0] || {}).title}
            availability={talent.availability}
            languages={talent.languages}
            lastActive={talent.last_seen_at}
            placeOfWork={talent.place_to_work}
            offers={talent.offers}
            savedCount={talent.saved_count}
            promotions={talent.promotions}
          />
        ))}
      </div>
    );
  }
}

export default TalentsList;
