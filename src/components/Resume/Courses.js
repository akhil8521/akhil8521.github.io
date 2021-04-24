import React from 'react';
import PropTypes from 'prop-types';

import Course from './Courses/Course';

const getRows = (certifications) => certifications.sort((a, b) => {
  let ret = 0;
  if (a.cloud > b.cloud) ret = -1;
  else if (a.cloud < b.cloud) ret = 1;
  else if (a.number > b.number) ret = 1;
  else if (a.number < b.number) ret = -1;
  return ret;
}).map((course, idx) => (
  <Course
    data={course}
    key={course.title}
    last={idx === certifications.length - 1}
  />
));

const Courses = ({ data }) => (
  <div className="certifications">
    <div className="link-to" id="certifications" />
    <div className="title">
      <h3>My Certifications</h3>
    </div>
    <ul className="course-list">
      {getRows(data)}
    </ul>
  </div>
);

Courses.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    number: PropTypes.string,
    link: PropTypes.string,
    cloud: PropTypes.string,
  })),
};

Courses.defaultProps = {
  data: [],
};

export default Courses;
