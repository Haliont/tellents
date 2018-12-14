import React from 'react';

const TipsList = ({ user, ...rest }) => (
  <div className="job-box-tips flexbox justify-space-between">
    <div className="tip">
      <span className="icon icon-location" />
      <span className="text">{user.country || 'N/A'}</span>
    </div>
    <div className="tip">
      <span className="icon icon-clock-1" />
      <span className="text">{rest.commitment}</span>
    </div>
    <div className="tip">
      <span className="icon icon-award" />
      <span className="text">{rest.level}</span>
    </div>
    <div className="tip">
      <span className="icon icon-timer" />
      <span className="text">110 h/2 J</span>
    </div>
    <div className="tip">
      <span className="icon icon-wallet" />
      <span className="text">24$/h</span>
    </div>
    {/* {tips.map(([iconName, content]) => (
      <div key={iconName} className="tip">
        <span className={`icon icon-${iconName}`} />
        <span className="text">{content}</span>
      </div>
    ))} */}
  </div>
);

const DescriptionBlock = ({ description, skillTags }) => (
  <div className="job-box-deskr">
    <div className="text word-wrap">
      {description || 'No Introduction set yet'}
    </div>
    <div className="skill-tags-block clearfix">
      {skillTags.map(tag => (
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
  user,
  ...rest
}) {
  // const tips = [
  // ['award', '0%'],
  // ['jobs', `${workHours} h/${jobsCount} j`],
  // ['location', country || 'N/A'],
  // ['clock-1', availability || 'N/A'],
  // ['wallet', price ? `$${price}` : 'N/A'],
  // ];

  return (
    <div className="job-box-body">
      <TipsList user={user} {...rest} />
      <DescriptionBlock
        {...rest}
      />
    </div>
  );
}

export default Body;
