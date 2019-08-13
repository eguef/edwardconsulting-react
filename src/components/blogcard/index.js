import React from 'react';
import PropTypes from 'prop-types';

const blogcard = ({
  imageSrc, category, title, summary,
}) => (
  <div className="blog-card">
    <div className="blog-card-image">
      <img src={imageSrc} alt="blog-card-pic" />
    </div>
    <div className="blog-card-content">
      <div className="blog-card-category">{category}</div>
      <div className="blog-card-title">{title}</div>
      <div className="blog-card-summary">{summary}</div>
    </div>
  </div>
);


blogcard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};

export default blogcard;
