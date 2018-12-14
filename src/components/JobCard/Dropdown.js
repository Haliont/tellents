import React from 'react';
// import moment from 'moment';
import { capitalize } from '../../utils';

// const About = ({
//   photoUrl, name, professionTitle, availability, jobsCount, workHours,
//   languages, placeOfWork,
// }) => (
//   <div className="about-block-wrapper">
//     <div className="photo-block">
//       <div
//         className="job-box-photo bg-cover circul-shape"
//         style={{
//           backgroundImage: `url(${photoUrl})`,
//         }}
//       />
//       <div className="job-box-title">
//         <div className="job-box-name blue-color">{name}</div>
//         <div className="job-box-prof">{professionTitle}</div>
//       </div>
//     </div>
//     <div className="info-block">
//       <div className="title">
//         Available
//       </div>
//       <div className="text">
//         {availability || 'N/A'}
//       </div>
//     </div>

//     <div className="info-block">
//       <div className="text">
//         {workHours} hrs / {jobsCount} jobs
//       </div>
//     </div>

//     <div className="info-block">
//       <div className="title">
//         Languages
//       </div>
//       <div className="text">
//         {languages.length > 0
//           ? languages.map(language => (
//             <React.Fragment key={name}>
//               {language.name}: <span>{language.level}</span>;
//             </React.Fragment>
//           ))
//           : 'N/A'
//         }
//       </div>
//     </div>

//     <div className="info-block">
//       <div className="title">
//         Place of Work
//       </div>
//       <div className="text">
//         {placeOfWork ? capitalize(placeOfWork) : 'N/A'}
//       </div>
//     </div>

//     <div className="info-block info-block--btns">
//       <button className="btn btn-blue-border btn-bold
// btn-blue-hover btn-with-icon" type="button">
//         <div className="button-content">
//           <span className="icon icon-clipboard" />
//           <span className="btn-text">Hire</span>
//         </div>
//       </button>
//       <button className="btn btn-blue-border btn-bold
// btn-blue-hover btn-with-icon" type="button">
//         <div className="button-content">
//           <span className="icon icon-jobs" />
//           <span className="btn-text">Portfolio</span>
//         </div>
//       </button>
//       <button className="btn btn-blue-border btn-bold
// btn-blue-hover btn-with-icon" type="button">
//         <div className="button-content">
//           <span className="icon icon-output" />
//           <span className="btn-text">View Page</span>
//         </div>
//       </button>
//       <button className="btn btn-blue-border btn-bold btn-blue-hover btn-with-icon"
// type="button">
//         <div className="button-content">
//           <span className="icon icon-comment" />
//           <span className="btn-text">Message</span>
//         </div>
//       </button>
//     </div>
//   </div>
// );

// function Dropdown({ onClose, ...rest }) {
//   const likes = rest.offers
//     .filter(({ recommendation }) => recommendation);

//   return (
//     <div className="panel panel-default job-box-details">
//       <button
//         type="button"
//         className="btn btn-bg-transparent close-btn icon-btn"
//         onClick={onClose}
//       >
//         <span className="glyphicon glyphicon-remove" />
//       </button>

//       <div className="flexbox justify-space-between">
//         <About {...rest} />
//         <div className="job-details-right job-details-talents-position">

//           <div className="job-details-right-header flexbox">

//             <div className="likes flexbox">
//               <span className="icon icon-shape" />
//               <ul className="likes-list list-unstyled">
//                 {
//                   !likes.length
//                     ? <span>No recommendation yet</span>
//                     : likes.map(() => (
//                       <li className="like-item like-item--1 bg-cover circul-shape" />
//                     ))
//                 }
//               </ul>
//             </div>

//             <div className="stat flexbox justify-space-center flex-wrap
//                vertical-align-items-center">
//               <div className="stat-block">
//                 <span className="icon icon-comments" />
//                 <span className="stat-title blue-color">RESPONSIVE</span>
//                 <span className="stat-info">Fair</span>
//               </div>
//               <div className="stat-block">
//                 <span className="icon icon-calendar2" />
//                 <span className="stat-title blue-color">LAST ACTIVE</span>
//                 <span className="stat-info">{moment(rest.lastActive).fromNow()}</span>
//               </div>
//               <div className="btn btn-blue-border stat-block stat-block-btn">
//                 <span className="icon icon-saved" />
//                 <span className="stat-title blue-color">SAVED</span>
//                 <span className="stat-info">{rest.savedCount}</span>
//               </div>
//             </div>
//           </div>

//           <div className="job-details-right-body job-details-feedback-scroll">
//             {rest.offers.length === 0
//               ? <span className="feedback-item flexbox">No feedback yet</span>
//               : rest.offers.map(() => (
//                 <div className="feedback-item flexbox">
//                   <div className="left-col">
//                     <div className="item-header">
//                       <div className="item-photo circul-shape bg-cover item-photo--1" />
//                       <div className="item-name blue-color">Clifford Love</div>
//                     </div>
//                     <div className="item-message">
//                       <span className="job-title">PSD to HTML</span>
//                       <span className="feedback-text" />
//                     </div>
//                   </div>
//                   <div className="right-col job-box-rate">
//                     <span className="icon icon-star-full" />
//                     <span className="rate-result">5.8</span>
//                   </div>
//                 </div>
//               ))
//             }
//           </div>
//           <div className="other-details">
//             {rest.promotions.length === 0
//               ? (
//                 <div className="panel flexbox justify-space-between panel-blue">
//                   <div>
//                     <div className="other-description">User has not promoted himself yet</div>
//                   </div>
//                   <span className="btn btn-blue-border btn-bold">Free</span>
//                 </div>
//               )
//               : rest.promotions.map((_, ix) => <div>promotion {ix}</div>)
//             }
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

function Dropdown({ onClose, user, ...rest }) {
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
            <div className="flexbox justify-space-between">
              <div className="award">
                <span className="icon icon-badge-solid" />
              </div>
              <div
                style={{
                  backgroundImage: `url(${user.image.url})`,
                }}
                className="job-box-photo bg-cover circul-shape"
              />
              <div className="job-box-rate">
                <span className="icon icon-star-full" />
                <span className="rate-result">{user.total_rate || 'N/A'}</span>
              </div>
            </div>
            <div className="job-box-title">
              <div className="job-box-name blue-color">{user.full_name}</div>
            </div>
          </div>
          <div className="info-block">
            <div className="title">
              $7,832 Total Spent
            </div>
          </div>
          <div className="info-block">
            <div className="title">
              {user.skill_test_send}  / {user.total_jobs} jobs
            </div>
          </div>
          <div className="info-block">
            <div className="title">
              Languages
            </div>
            <div className="text">
              {user.languages.length > 0
                ? user.languages.map(language => (
                  <React.Fragment key={language.name}>
                    {language.name}: <span>{language.level}</span>;
                  </React.Fragment>
                ))
                : 'N/A'
              }
            </div>
          </div>
          <div className="info-block">
            <div className="title">
                Place of Work
            </div>
            <div className="text">
              {user.place_to_work && capitalize(user.place_to_work)}
            </div>
          </div>
          <div className="info-block info-block--btns">
            <button
              className="btn btn-blue-border
btn-bold btn-blue-hover btn-with-icon"
              type="button"
            >
              <div className="button-content">
                <span className="icon icon-clipboard" />
                <span className="btn-text">Send a bid</span>
              </div>
            </button>
            <button
              className="btn btn-blue-border
btn-bold btn-blue-hover btn-with-icon"
              type="button"
            >
              <div className="button-content">
                <span className="icon icon-output" />
                <span className="btn-text">More Info</span>
              </div>
            </button>
            <button
              className="btn btn-blue-border
btn-bold btn-blue-hover btn-with-icon"
              type="button"
            >
              <div className="button-content">
                <span className="icon icon-comment" />
                <span className="btn-text">Message</span>
              </div>
            </button>
          </div>
        </div>
        <div className="job-details-right job-details-talents-position">
          <div className="job-details-right-header flexbox">

            <div className="likes flexbox">
              <span className="icon icon-shape" />
              <ul className="likes-list list-unstyled">
                <span>No recommendation yet</span>
                {/* {
                  !likes.length
                    ? <span>No recommendation yet</span>
                    : likes.map(() => (
                      <li className="like-item like-item--1 bg-cover circul-shape" />
                    ))
                } */}
              </ul>
            </div>

            <div className="stat flexbox justify-space-center flex-wrap vertical-align-items-center">
              <div className="stat-block">
                <span className="icon icon-comments" />
                <span className="stat-title blue-color">RESPONSIVE</span>
                <span className="stat-info">Fair</span>
              </div>
              <div className="stat-block">
                <span className="icon icon-calendar2" />
                <span className="stat-title blue-color">LAST ACTIVE</span>
                {/* <span className="stat-info">{moment(rest.lastActive).fromNow()}</span> */}
              </div>
              <div className="btn btn-blue-border stat-block stat-block-btn">
                <span className="icon icon-saved" />
                <span className="stat-title blue-color">SAVED</span>
                {/* <span className="stat-info">{rest.savedCount}</span> */}
              </div>
            </div>
          </div>

          <div className="job-details-right-body">
            <div className="job-details-descr">
              <div className="job-title">
                {rest.title}
              </div>
              <div className="job-descr-text">
                {rest.description}
              </div>
            </div>
          </div>

          <div className="other-details">
            <div className="panel flexbox justify-space-between panel-blue">
              <div>
                <div className="other-title">
                  {rest.promotionTitle}
                </div>
                <div className="other-description">
                  {rest.promotionDescription}
                </div>
              </div>
              <span className="btn btn-blue-border btn-bold">Free</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
