import React, { Component } from 'react';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';

class SingleBlog extends Component {
  render() {
    return (
      <div className="single-blog">
        <NavBar className="navbar__transparent-white" />
        <div className="single-blog-image">
          <img
            src="https://edwardconsulting.s3.eu-central-1.amazonaws.com/pexels-photo-901962+(1).jpeg"
            alt="blog-img"
          />
          <div className="single-blog-title">
            How to find the best scholarships for your graduate program
          </div>
        </div>
        <div className="single-blog-content">
          <div className="single-blog-content-text">
            <div>
              How we reinvented charity transparency by running a Design Sprint
              across four time zones. (Note: The following article presupposes
              that you know the Design Sprint process. If you don’t, please look
              them up first.)
            </div>
            <div>
              Recently, we got approached by Daniel from SaveTheChildren to work
              together with the CEO of BitGive Connie on the transformation of
              their charity platform onto a blockchain. The idea was to increase
              transparency and overall trust for charity projects.
            </div>
            <div>
              Recently, we got approached by Daniel from SaveTheChildren to work
              together with the CEO of BitGive Connie on the transformation of
              their charity platform onto a blockchain. The idea was to increase
              transparency and overall trust for charity projects.
            </div>
            <div>
              Recently, we got approached by Daniel from SaveTheChildren to work
              together with the CEO of BitGive Connie on the transformation of
              their charity platform onto a blockchain. The idea was to increase
              transparency and overall trust for charity projects.
            </div>
            <div>
              Recently, we got approached by Daniel from SaveTheChildren to work
              together with the CEO of BitGive Connie on the transformation of
              their charity platform onto a blockchain. The idea was to increase
              transparency and overall trust for charity projects.
            </div>
            <div>
              The problem was that Daniel lives in New Zealand and Connie in the
              US, while I was in Berlin, Germany.
            </div>
            Obviously, with my Design Sprint skills I suggested to run a Remote
            Sprint.
          </div>
          <div className="single-blog-social">
            <div className="author">
              <div className="author-image">
                <img src="https://edwardconsulting.s3.eu-central-1.amazonaws.com/pexels-photo-901962+(1).jpeg" />
              </div>
              <div className="author-name">
                <div className="author-by">By Bimpe</div>
                <div className="blog-category">scholarships</div>
              </div>
              <div className="date-published">May 18, 2019</div>
            </div>
            <div className="single-blog-social-section">
              <div className="social-name">Share:</div>
              <i className="fab fa-facebook-square" />
              <i className="fab fa-twitter" />
              <i className="fab fa-linkedin" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SingleBlog;
