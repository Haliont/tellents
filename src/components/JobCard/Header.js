import React from 'react';
// import PropTypes from 'prop-types';

const UserBlock = ({ rate, username, photoUrl }) => (
  <div className="panel panel-default">
    <div className="flexbox justify-space-between">
      <div className="job-box-photo-block">
        <div
          style={{
            backgroundImage: `url(${photoUrl})`,
          }}
          className="job-box-photo bg-cover circul-shape"
        >
          {/* <i className="notif" /> */}
        </div>
      </div>
      <div className="award">
        <span className="icon icon-badge-flat">
          <span className="path1" />
          <span className="path2" />
          <span className="path3" />
          <span className="path4" />
          <span className="path5" />
          <span className="path6" />
          <span className="path7" />
          <span className="path8" />
          <span className="path9" />
          <span className="path10" />
        </span>
      </div>
      <div className="job-box-rate">
        <span className="icon icon-star-full" />
        <span className="rate-result">{rate || 'N/A'}</span>
      </div>
    </div>
    <div className="blue-color">{username}</div>
  </div>
);

function Header({
  title, userRate, username, userPhotoUrl, created,
}) {
  return (
    <div className="job-box-header flexbox justify-space-between">
      <div className="job-box-title">
        <div className="post-date">{created}</div>
        <div className="job-title">{title}</div>
      </div>
      <UserBlock
        rate={userRate}
        username={username}
        photoUrl={userPhotoUrl}
      />
    </div>
  );
}

export default Header;
