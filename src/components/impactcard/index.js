import React from 'react';
import PropTypes from 'prop-types';

const impactcard = ({ review, person }) => (
  <div className="impact-card">
    <div className="impact-card-stars">
      <i className="fa fa-star" />
      <i className="fa fa-star" />
      <i className="fa fa-star" />
      <i className="fa fa-star" />
      <i className="fa fa-star" />
    </div>
    <div className="impact-card-review">
      {review}
    </div>
    <div className="impact-card-person">
      <div className="impact-card-person-image">
        <img src={person.image} alt="impact-card-person-img" />
      </div>
      <div className="impact-card-person-details">
        <div className="impact-card-person-name">{person.name}</div>
        <div className="impact-card-person-school">{person.school}</div>
      </div>
    </div>
  </div>
);

impactcard.propTypes = {
  review: PropTypes.string.isRequired,
  person: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default impactcard;
