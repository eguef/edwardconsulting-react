/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Dropdown from '../dropdown';

class NavBar extends Component {
  constructor() {
    super();
    this.itemList = [
      { name: 'Approach' },
    ];
  }

  render() {
    return (
      <div className="navbar">
        <div className="navbar__logo">
          <img src="https://edwardconsulting.s3.eu-central-1.amazonaws.com/Edward+Consulting+Logo+white.png" alt="logo" />
          <div className="navbar__logo-name">
            <div className="navbar__logo-name-main">Edward</div>
            <div className="navbar__logo-name-sub">Consulting</div>
          </div>
        </div>
        <div className="navbar__links">
          <div />
          <Dropdown name="About" itemList={this.itemList} />
          <Dropdown name="Services" itemList={this.itemList} />
          <div className="navbar-blog">Blog</div>
          <div className="navbar-gallery">Gallery</div>
          <div className="navbar-partners">Patners</div>
          <div className="navbar-contact">Contact us</div>
          <span className="navbar-line" />
          <div className="navbar-advice">Free advice</div>
          <div className="navbar-consultation">Free consultation</div>
        </div>
      </div>
    );
  }
}

export default NavBar;
