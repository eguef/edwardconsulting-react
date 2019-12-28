/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Dropdown from '../dropdown';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.aboutList = [{ name: 'Our Story', path: '/our-story' }];
    this.serviceList = [{ name: 'Our Approach', path: '/our-approach' }, { name: 'Our Services', path: '/our-services' }];
  }

  render() {
    const { className, black } = this.props;
    return (
      <div className={className ? `navbar ${className}` : 'navbar navbar__coloured'}>
        <div className="navbar__link">
          <Link to="/">
            <div className="navbar__logo">
              { black ? (
                <img
                  src="https://edwardconsulting.s3.eu-central-1.amazonaws.com/Edward+Consulting+Logo+black.png"
                  alt="logo"
                />
              ) : (
                <img
                  src="https://edwardconsulting.s3.eu-central-1.amazonaws.com/Edward+Consulting+Logo+white.png"
                  alt="logo"
                />
              )}
              <div className="navbar__logo-name">
                <div className={black ? 'black navbar__logo-name-main' : 'navbar__logo-name-main'}>Edward</div>
                <div className={black ? 'black navbar__logo-name-sub' : 'navbar__logo-name-sub'}>Consulting</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="navbar__links">
          <div />
          <Dropdown name="About" itemList={this.aboutList} black={black} />
          <Dropdown name="Services" itemList={this.serviceList} black={black} />
          <div className={black ? 'black navbar-blog navbar__link' : 'navbar-blog navbar__link'}><Link to="/blog">Blog</Link></div>
          <div className={black ? 'black navbar-gallery navbar__link' : 'navbar-gallery navbar__link'}>
            <Link to="/gallery">Gallery</Link>
          </div>
          <div className="navbar-partners navbar__link">Patners</div>
          <div className="navbar-contact navbar__link">Contact us</div>
          <span className="navbar-line" />
          <div className="navbar-advice navbar__link">Free advice</div>
          <div className="navbar-consultation navbar__link"><Link to="/consultation">Free consultation</Link></div>
        </div>
      </div>
    );
  }
}

NavBar.propTypes = {
  // eslint-disable-next-line react/require-default-props
  className: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  black: PropTypes.bool,
};


export default NavBar;
