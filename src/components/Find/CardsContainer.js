// import React from 'react';
// import { Route, Switch, Redirect } from 'react-router-dom';

// export default function CardsContainer({ cards }) {
//   return (
//     <>
//       <Switch>
//         <Route
//           path="/dashboard/find/talent"
//           render={props => (
//             <div className="job-boxes-wrapper
// job-boxes-wrapper--talents flexbox justify-space-between flex-wrap" />
//           )}
//         />
//         <Route
//           path="/dashboard/find/job"
//           render={props => (
//             <div className="job-boxes-wrapper
// job-boxes-wrapper--jobs flexbox justify-space-between flex-wrap">
//               <div className="job-box-block">
//                 <div className="panel panel-default job-box">
//                   <div className="job-box-header flexbox justify-space-between">
//                     <div className="job-box-title">
//                       <div className="post-date">6 days ago</div>
//                       <div className="job-title">Looking for back end programmer</div>
//                     </div>
//                     <div className="panel panel-default">
//                       <div className="flexbox justify-space-between">
//                         <div className="job-box-photo-block">
//                           <div className="job-box-photo bg-cover circul-shape">
//                             <i className="notif" />
//                           </div>
//                         </div>
//                         <div className="award">
//                           <span className="icon
// icon-badge-flat"><span
// className="path1" /><span className="path2" /><span className="path3" />
// <span className="path4" /><span className="path5" /><span className="path6" />
// <span className="path7" /><span className="path8" />
// <span className="path9" /><span className="path10" /></span> */}
//                         </div>
//                         <div className="job-box-rate">
//                           <span className="icon icon-star-full" />
//                           <span className="rate-result">5.8</span>
//                         </div>
//                       </div>
//                       <div className="blue-color">Clifford Love</div>
//                     </div>
//                   </div>
//                   <div className="job-box-body">
//                     <div className="job-box-tips flexbox justify-space-between">
//                       <div className="tip">
//                         <span className="icon icon-location" />
//                         <span className="text">Aus..</span>
//                       </div>
//                       <div className="tip">
//                         <span className="icon icon-clock-1" />
//                         <span className="text">&gt; 30h</span>
//                       </div>
//                       <div className="tip">
//                         <span className="icon icon-award" />
//                         <span className="text">Jun</span>
//                       </div>
//                       <div className="tip">
//                         <span className="icon icon-timer" />
//                         <span className="text">110 h/2 J</span>
//                       </div>
//                       <div className="tip">
//                         <span className="icon icon-wallet" />
//                         <span className="text">24$/h</span>
//                       </div>
//                     </div>
//                     <div className="job-box-deskr">
//                       <div className="text">
//                                 Look, just because I
// don't be givin' no man a foot
// massage don't make it right for
// Marsellus to throw Antwone into a glass motherfuckin'
// house, fuckin' up the way the nigger talks...
//                       </div>
//                       <div className="skill-tags-block clearfix">
//                         <div className="skill-tag">HTML5</div>
//                         <div className="skill-tag">Node.js</div>
//                         <div className="skill-tag">CSS3</div>
//                         <div className="skill-tag">PHP</div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="job-box-footer flexbox justify-space-between">
//                     <div className="additional-info blue-color">Math  Home Tutoring</div>
//                     <button className="btn btn-blue btn-bold">Free</button>
//                   </div>
//                 </div>{/* job-box End */}
//                 <div className="caret-block">
//                   <span className="caret-top" />
//                 </div>
//                 <div className="panel panel-default job-box-details">
//                   <button
// className="btn btn-bg-transparent
// close-btn icon-btn"><span className="glyphicon glyphicon-remove" /></button>
//                   <div className="flexbox justify-space-between">
//                     <div className="about-block-wrapper">
//                       <div className="photo-block">
//                         <div className="flexbox justify-space-between">
//                           <div className="award">
//                             <span className="icon icon-badge-solid" />
//                           </div>
//                           <div className="job-box-photo bg-cover circul-shape" />
//                           <div className="job-box-rate">
//                             <span className="icon icon-star-full" />
//                             <span className="rate-result">5.8</span>
//                           </div>
//                         </div>
//                         <div className="job-box-title">
//                           <div className="job-box-name blue-color">Clifford Love</div>
//                         </div>
//                       </div>
//                       <div className="info-block">
//                         <div className="title">
//                                   $7,832 Total Spent
//                         </div>
//                       </div>
//                       <div className="info-block">
//                         <div className="title">
//                                   30  Samples  / 20 jobs
//                         </div>
//                       </div>
//                       <div className="info-block">
//                         <div className="title">
//                                   Languages
//                         </div>
//                         <div className="text">
//                                   English: <span>fluent</span>;
//                                   Russian: <span>native</span>
//                         </div>
//                       </div>
//                       <div className="info-block">
//                         <div className="title">
//                                   Place of Work
//                         </div>
//                         <div className="text">
//                                   Online
//                         </div>
//                       </div>
//                       <div className="info-block info-block--btns">
//                         <button className="btn btn-blue-border
// btn-bold btn-blue-hover btn-with-icon" type="button">
//                           <div className="button-content">
//                             <span className="icon icon-clipboard" />
//                             <span className="btn-text">Send a bid</span>
//                           </div>
//                         </button>
//                         <button className="btn btn-blue-border
// btn-bold btn-blue-hover btn-with-icon" type="button">
//                           <div className="button-content">
//                             <span className="icon icon-output" />
//                             <span className="btn-text">More Info</span>
//                           </div>
//                         </button>
//                         <button className="btn btn-blue-border
// btn-bold btn-blue-hover btn-with-icon" type="button">
//                           <div className="button-content">
//                             <span className="icon icon-comment" />
//                             <span className="btn-text">Message</span>
//                           </div>
//                         </button>
//                       </div>
//                     </div>
//                     <div className="job-details-right">
//                       <div className="job-details-right-header flexbox">
//                         <div className="likes flexbox">
//                           <span className="icon icon-shape" />
//                           <ul className="likes-list list-unstyled">
//                             <li className="like-item like-item--1 bg-cover circul-shape" />
//                             <li className="like-item like-item--2 bg-cover circul-shape" />
//                             <li className="like-item like-item--3 bg-cover circul-shape" />
//                             <li className="like-item like-item--1 bg-cover circul-shape" />
//                           </ul>
//                         </div>
//                         <div className="stat flexbox justify-space-center flex-wrap">
//                           <div className="stat-block">
//                             <span className="icon icon-tag" />
//                             <span className="stat-title blue-color">FIXED</span>
//                             <span className="stat-info">$200</span>
//                           </div>
//                           <div className="stat-block">
//                             <span className="icon icon-comments" />
//                             <span className="stat-title blue-color">RESPONSIVE</span>
//                             <span className="stat-info">Fair</span>
//                           </div>
//                           <div className="stat-block">
//                             <span className="icon icon-accounts" />
//                             <span className="stat-title blue-color">BUDGET</span>
//                             <span className="stat-info">$1000</span>
//                           </div>
//                           <div className="stat-block">
//                             <span className="icon icon-clock-1" />
//                             <span className="stat-title blue-color">COMPLETE</span>
//                             <span className="stat-info">5</span>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="job-details-right-body">
//                         <div className="job-details-descr">
//                           <div className="job-title">
//                                     Looking for back end programmer
//                           </div>
//                           <div className="job-descr-text">
// <p>Experience Level: Expert Description of requirements
// /features: Looking for experts at coding in Wordpress for Mobile use.</p>
// <p>Must be excellent at design/frontend/
// backend programming in the popular
// programming languages. You will combine elements from our current
// with a modified theme site on the Wordpress platform.</p>
// <p>The new site will be responsive/
// mobile.</p>
// <p>The new site should load quickly
// and be user friendly on Mac, PC, Android phone/tablet,
// Apple phone/tablet and Windows phone/tablet, Chrome, IE,
// Windows, Opera and Firefox browsers. Once these items are complete,
// if things go well we will hire your company as a site
// administrator on an hourly basis (performing changes when required).
// Your company should have excellent and excellent rating and feedback.
// You should be able to quickly complete assignments.
// Please submit your website portfolio (links of sites you have created).</p>
// <p>Make sure all links you submit are
// working links (not dead links). IMPORTANT:
// Please DO NOT submit websites you have not created.
// This will disqualify you. Please be prepared to show us
//  proof of the work you have performed on all websites you have created.</p>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="other-details">
//                         <div className="panel flexbox justify-space-between panel-blue">
//                           <div className="other-title">Math  Home Tutoring</div>
//                           <span className="btn btn-blue-border btn-bold">Free</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>{/* job-box End */}
//               </div>
//             </div>
//           )}
//         />
//         <Redirect to="/dashboard/find/talent" />
//       </Switch>
//       <div className="job-boxes-footer">
//         <button type="button" className="btn btn-bg-transparent blue-color btn-bold">
//           Load more
//         </button>
//       </div>
//     </>
//   );
// }
