import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PhotoCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
    this.showSummary = this.showSummary.bind(this);
  }

  showSummary() {
    this.setState(state => ({ active: !state.active }));
  }

  render() {
    const { imgSrc, summary } = this.props;
    const { active } = this.state;
    return (
      <div className="photo-card" onMouseEnter={this.showSummary} onMouseLeave={this.showSummary}>
        <img src={imgSrc} alt="gallery-item" />
        {active && (
          <div className="photo-card-summary">
            {summary && summary.length > 60
              ? `${summary.slice(0, 60)}...`
              : summary || 'No Project Summary'}
          </div>
        )}
      </div>
    );
  }
}

PhotoCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};

export default PhotoCard;
