import React, { Component } from 'react';
import NavBar from '../../components/navbar';
import NavExtension from '../../components/navbar/NavExtension';
import Footer from '../../components/footer';
import BlogCard from '../../components/blogcard';

class Blog extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
    };
    this.links = [
      { name: 'All' },
      { name: 'Graduates' },
      { name: 'Undergraduates' },
      { name: 'Visa Preparations' },
      { name: 'Scholarships' },
      { name: 'Standardized Tests' },
    ];
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  onClick(e) {
    e.preventDefault();
    console.log(e.target);
  }

  render() {
    const { email } = this.state;
    return (
      <div className="blog">
        <div className="blog-nav-section">
          <NavBar />
          <NavExtension
            placeholder="Your Email Address"
            name="email"
            value={email}
            onChange={this.onChange}
            onClick={this.onClick}
            links={this.links}
          />
        </div>
        <div className="blog-list">
          <BlogCard
            imageSrc="https://edwardconsulting.s3.eu-central-1.amazonaws.com/pexels-photo-935948+(1).jpeg"
            category="scholarships"
            title="How to find the best scholarships for your graduate program"
            summary="Finding the right scholarship for"
          />
          <BlogCard
            imageSrc="https://edwardconsulting.s3.eu-central-1.amazonaws.com/pexels-photo-935948+(1).jpeg"
            category="scholarships"
            title="How to find the best scholarships for your graduate program"
            summary="Finding the right scholarship for"
          />
          <BlogCard
            imageSrc="https://edwardconsulting.s3.eu-central-1.amazonaws.com/pexels-photo-935948+(1).jpeg"
            category="scholarships"
            title="How to find the best scholarships for your graduate program"
            summary="Finding the right scholarship for"
          />
          <BlogCard
            imageSrc="https://edwardconsulting.s3.eu-central-1.amazonaws.com/pexels-photo-935948+(1).jpeg"
            category="scholarships"
            title="How to find the best scholarships for your graduate program"
            summary="Finding the right scholarship for"
          />
          <BlogCard
            imageSrc="https://edwardconsulting.s3.eu-central-1.amazonaws.com/pexels-photo-935948+(1).jpeg"
            category="scholarships"
            title="How to find the best scholarships for your graduate program"
            summary="Finding the right scholarship for"
          />
          <BlogCard
            imageSrc="https://edwardconsulting.s3.eu-central-1.amazonaws.com/pexels-photo-935948+(1).jpeg"
            category="scholarships"
            title="How to find the best scholarships for your graduate program"
            summary="Finding the right scholarship for"
          />
          <BlogCard
            imageSrc="https://edwardconsulting.s3.eu-central-1.amazonaws.com/pexels-photo-935948+(1).jpeg"
            category="scholarships"
            title="How to find the best scholarships for your graduate program"
            summary="Finding the right scholarship for"
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Blog;
