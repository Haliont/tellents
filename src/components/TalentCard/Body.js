import React from 'react';

const TipsList = ({ tips }) => (
  <div className="job-box-tips">
    {tips.map(([iconName, content]) => (
      <div key={iconName} className="tip">
        <span className={`icon icon-${iconName}`} />
        <span className="text">{content}</span>
      </div>
    ))}
  </div>
);

const DescriptionBlock = ({ desc, tags }) => (
  <div className="job-box-deskr">
    <div className="text word-wrap">
      {desc || 'No Introduction set yet'}
    </div>
    <div className="skill-tags-block clearfix">
      {tags.map(tag => (
        <div className="skill-tag">{tag}</div>
      ))}
    </div>
  </div>
);


function Body({
  tags,
  price,
  country,
  jobsCount,
  workHours,
  availability,
  professionDesc,
}) {
  const tips = [
    ['award', '0%'],
    ['jobs', `${workHours} h/${jobsCount} j`],
    ['location', country || 'N/A'],
    ['clock-1', availability || 'N/A'],
    ['wallet', price ? `$${price}` : 'N/A'],
  ];

  return (
    <div className="job-box-body flexbox justify-space-between">
      <TipsList tips={tips} />
      <DescriptionBlock
        tags={tags}
        desc={professionDesc}
      />
    </div>
  );
}

export default Body;
