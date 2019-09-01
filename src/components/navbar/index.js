/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Dropdown from '../dropdown';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.itemList = [{ name: 'Approach' }];
  }

  render() {
    const { className } = this.props;
    return (
      <div className={className ? `navbar ${className}` : 'navbar navbar__coloured'}>
        <div className="navbar__link">
          <Link to="/">
            <div className="navbar__logo">
              <img
                src="https://edwardconsulting.s3.eu-central-1.amazonaws.com/Edward+Consulting+Logo+white.png"
                alt="logo"
              />
              <div className="navbar__logo-name">
                <div className="navbar__logo-name-main">Edward</div>
                <div className="navbar__logo-name-sub">Consulting</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="navbar__links">
          <div />
          <Dropdown name="About" itemList={this.itemList} />
          <Dropdown name="Services" itemList={this.itemList} />
          <div className="navbar-blog navbar__link"><Link to="/blog">Blog</Link></div>
          <div className="navbar-gallery navbar__link">
            <Link to="/gallery">Gallery</Link>
          </div>
          <div className="navbar-partners navbar__link">Patners</div>
          <div className="navbar-contact navbar__link">Contact us</div>
          <span className="navbar-line" />
          <div className="navbar-advice navbar__link">Free advice</div>
          <div className="navbar-consultation">Free consultation</div>
        </div>
      </div>
    );
  }
}

NavBar.propTypes = {
  className: PropTypes.string,
}


export default NavBar;
