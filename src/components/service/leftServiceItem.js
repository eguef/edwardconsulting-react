import React from 'react';

const leftServiceItem = ({
  summary, title, firstImage, secondImage,
}) => (
  <div className="left-service-item">
    <div className="service-item-content content-right">
      <div className="service-item-content-title">{title}</div>
      <div className="service-item-content-summary">{summary}</div>
    </div>
    <div className="service-item-image">
      <div className="service-image service-image-right">
        <img
          src={firstImage}
          alt="service-img"
        />
      </div>
      <div className="service-image">
        <img
          src={secondImage}
          alt="service-img"
        />
      </div>
    </div>
  </div>
);

export default leftServiceItem;
