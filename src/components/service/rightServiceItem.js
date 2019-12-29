import React from 'react';

const rightServiceItem = ({
  summary, title, firstImage, secondImage,
}) => (
  <div className="right-service-item">
    <div className="service-item-image">
      <div className="service-image service-image-left">
        <img src={firstImage} alt="service-img" />
      </div>
      <div className="service-image">
        <img src={secondImage} alt="service-img" />
      </div>
    </div>
    <div className="service-item-content content-left">
      <div className="service-item-content-title">{title}</div>
      <div className="service-item-content-summary">{summary}</div>
    </div>
  </div>
);

export default rightServiceItem;
