/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import NavBar from '../../components/navbar';
import NavExtension from '../../components/navbar/NavExtension';
import Footer from '../../components/footer';


class Approach extends Component {
  render() {
    return (
      <div className="blog">
        <div className="blog-nav-section">
          <NavBar />
          <NavExtension
            title="Our Approach"
          />
        </div>
        <div className="coming-soon"> Approach Page In Progress</div>
        <Footer />
      </div>
    );
  }
}

export default Approach;
