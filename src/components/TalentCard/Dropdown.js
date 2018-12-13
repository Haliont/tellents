import React from 'react';

function Dropdown({ onClose }) {
  return (
    <div className="panel panel-default job-box-details">
      <button
        type="button"
        className="btn btn-bg-transparent close-btn icon-btn"
        onClick={onClose}
      >
        <span className="glyphicon glyphicon-remove" />
      </button>

      <div className="flexbox justify-space-between">
        <div className="about-block-wrapper">
          <div className="photo-block">
            <div className="job-box-photo bg-cover circul-shape" />
            <div className="job-box-title">
              <div className="job-box-name blue-color">Clifford Love</div>
              <div className="job-box-prof">JUNIOR / UI Designer</div>
            </div>
          </div>
          <div className="progress-box">
            <div className="progress-info">
              <span className="progress-perc">90%</span> job success
            </div>
            <a href="#" className="progress-title">
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{ width: '90%' }} />
              </div>
            </a>
          </div>
          <div className="info-block">
            <div className="title">
                        Available
            </div>
            <div className="text">
                        more then 30 hours/week
            </div>
          </div>
          <div className="info-block">
            <div className="text">
                        540  hrs / 10 jobs
            </div>
          </div>
          <div className="info-block">
            <div className="title">
                        Languages
            </div>
            <div className="text">
                        English: <span>fluent</span>;
                        Russian: <span>native</span>
            </div>
          </div>
          <div className="info-block">
            <div className="title">
                        Place of Work
            </div>
            <div className="text">
                        Online
            </div>
          </div>
          <div className="info-block info-block--btns">
            <button className="btn btn-blue-border btn-bold btn-blue-hover btn-with-icon" type="button">
              <div className="button-content">
                <span className="icon icon-clipboard" />
                <span className="btn-text">Hire</span>
              </div>
            </button>
            <button className="btn btn-blue-border btn-bold btn-blue-hover btn-with-icon" type="button">
              <div className="button-content">
                <span className="icon icon-jobs" />
                <span className="btn-text">Portfolio</span>
              </div>
            </button>
            <button className="btn btn-blue-border btn-bold btn-blue-hover btn-with-icon" type="button">
              <div className="button-content">
                <span className="icon icon-output" />
                <span className="btn-text">View Page</span>
              </div>
            </button>
            <button className="btn btn-blue-border btn-bold btn-blue-hover btn-with-icon" type="button">
              <div className="button-content">
                <span className="icon icon-comment" />
                <span className="btn-text">Message</span>
              </div>
            </button>
          </div>
        </div>
        <div className="job-details-right">
          <div className="job-details-right-header flexbox">
            <div className="likes flexbox">
              <span className="icon icon-shape" />
              <ul className="likes-list list-unstyled">
                <li className="like-item like-item--1 bg-cover circul-shape" />
                <li className="like-item like-item--2 bg-cover circul-shape" />
                <li className="like-item like-item--3 bg-cover circul-shape" />
                <li className="like-item like-item--1 bg-cover circul-shape" />
              </ul>
            </div>
            <div className="stat flexbox justify-space-center flex-wrap">
              <div className="stat-block">
                <span className="icon icon-comments" />
                <span className="stat-title blue-color">RESPONSIVE</span>
                <span className="stat-info">Fair</span>
              </div>
              <div className="stat-block">
                <span className="icon icon-calendar2" />
                <span className="stat-title blue-color">LAST ACTIVE</span>
                <span className="stat-info">1 year ago</span>
              </div>
              <div className="stat-block">
                <span className="icon icon-saved" />
                <span className="stat-title blue-color">SAVED</span>
                <span className="stat-info">5</span>
              </div>
            </div>
          </div>
          <div className="job-details-right-body">
            <div className="feedback-item flexbox">
              <div className="left-col">
                <div className="item-header">
                  <div className="item-photo circul-shape bg-cover item-photo--1" />
                  <div className="item-name blue-color">Clifford Love</div>
                </div>
                <div className="item-message">
                  <span className="job-title">PSD to HTML</span>
                  <span className="feedback-text" />
                </div>
              </div>
              <div className="right-col job-box-rate">
                <span className="icon icon-star-full" />
                <span className="rate-result">5.8</span>
              </div>
            </div>
            <div className="feedback-item flexbox">
              <div className="left-col">
                <div className="item-header">
                  <div className="item-photo circul-shape bg-cover item-photo--2" />
                  <div className="item-name blue-color">Clifford Love</div>
                </div>
                <div className="item-message">
                  <span className="job-title">PSD to HTML</span>
                  <span className="feedback-text">resource  worked with... many!</span>
                </div>
              </div>
              <div className="right-col job-box-rate">
                <span className="icon icon-star-full" />
                <span className="rate-result">5.8</span>
              </div>
            </div>
            <div className="feedback-item flexbox">
              <div className="left-col">
                <div className="item-header">
                  <div className="item-photo circul-shape bg-cover item-photo--3" />
                  <div className="item-name blue-color">Clifford Love</div>
                </div>
                <div className="item-message">
                  <span className="job-title">PSD to HTML</span>
                  <span className="feedback-text"> Another bang up job! many!</span>
                </div>
              </div>
              <div className="right-col job-box-rate">
                <span className="icon icon-star-full" />
                <span className="rate-result">5.8</span>
              </div>
            </div>
            <button
              className="btn btn-bg-transparent more-feedbacks"
              type="button"
            >
              + 10 feedbacks
            </button>
          </div>
          <div className="other-details">
            <div className="panel flexbox justify-space-between panel-blue">
              <div className="other-title">Math  Home Tutoring</div>
              <span className="btn btn-blue-border btn-bold">Free</span>
            </div>
            <div className="panel flexbox justify-space-between panel-orange">
              <div className="other-title">Math  Home Tutoring</div>
              <span className="btn btn-blue-border btn-bold">Free</span>
            </div>
            <div className="panel flexbox justify-space-between panel-pink">
              <div className="other-title">Math  Home Tutoring</div>
              <span className="btn btn-blue-border btn-bold">Free</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
