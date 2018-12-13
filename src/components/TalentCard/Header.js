import React from 'react';
// import PropTypes from 'prop-types';

const PhotoBlock = ({ url }) => (
  <div className="job-box-photo-block">
    <div
      className="job-box-photo bg-cover circul-shape"
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      <i className="notif" />
      <i className="award">
        <span className="icon icon-badge-flat"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /><span className="path6" /><span className="path7" /><span className="path8" /><span className="path9" /><span className="path10" /></span>
      </i>
    </div>
  </div>
);

function Header({
  name, rate, photoUrl, professionTitle,
}) {
  return (
    <div className="job-box-header flexbox justify-space-between">
      <PhotoBlock url={photoUrl} />
      <div className="job-box-title">
        <div className="job-box-name blue-color">{name}</div>
        <div className="job-box-prof">{professionTitle || ''}</div>
      </div>
      <div className="job-box-rate">
        <span className="icon icon-star-full" />
        <span className="rate-result">
          {rate || 'N/A'}
        </span>
      </div>
    </div>
  );
}

export default Header;
