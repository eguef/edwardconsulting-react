import React, { Component } from 'react';
import Button from '../../components/button';
import Input from '../../components/input';
import NavBar from '../../components/navbar';
import BlogCard from '../../components/blogcard';
import ImpactCard from '../../components/impactcard';
import Footer from '../../components/footer';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      email: '',
      person: {
        image: 'https://edwardconsulting.s3.eu-central-1.amazonaws.com/pexels-photo-935948+(1).jpeg',
        name: 'Efe',
        school: 'new york university',
      },
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { firstName, email, person } = this.state;
    return (
      <div className="home">
        <div className="home__landing">
          <div className="home__landing-mailing">
            <div className="home__landing-mailing-title">
              Looking to study abroad with a scholarship?
            </div>
            <div className="home__landing-mailing-sub-title">
              Get free advice and information you can rely on. Join our mailing
              list today!
            </div>
            <div className="home__landing-mailing-form">
              <div className="home__landing-mailing-input">
                <Input
                  placeholder="First Name"
                  name="firstName"
                  value={firstName}
                  onChange={this.onChange}
                />
                <Input
                  placeholder="Your Email"
                  name="email"
                  value={email}
                  onChange={this.onChange}
                />
              </div>
              <Button
                name="Help Me Get Into My Dream School!"
                className="button"
              />
            </div>
          </div>
          <div className="home__landing-down-icon">
            <i className="fa fa-chevron-down" />
          </div>
        </div>
        <div className="home__page">
          <NavBar />
          <div className="home__page-approach">
            <div className="home__page-approach-image">
              <img
                src="https://edwardconsulting.s3.eu-central-1.amazonaws.com/pexels-photo-935948+(1).jpeg"
                alt="approach"
              />
            </div>
            <div className="home__page-approach-plain" />
            <div className="home__page-approach-content">
              <div />
              <div className="home__page-approach-content-quote">
                If you are going to do it,
                <span>Get it right!</span>
              </div>
              <div className="home__page-approach-content-summary">
                At Edward Consulting, we change and improve lives through
                education by connecting people to the best universities and
                scholarships in the world!
              </div>
              <Button name="our approach" className="button__light" />
              <div />
            </div>
          </div>
          <div className="home__page-choose-us">
            <div className="home__page-choose-us-content">
              <div />
              <div className="home__page-choose-us-content-quote">
                <span>Edward Consulting</span>
                is changing the way international students apply to universities
              </div>
              <Button
                name="Help Me Get Into My Dream School!"
                className="button__light"
              />
              <div />
            </div>
            <div className="home__page-choose-us-values">
              <img
                src="https://edwardconsulting.s3.eu-central-1.amazonaws.com/values.png"
                alt="values"
              />
            </div>
          </div>
          <div className="home__page-process" />
          <div className="home__page-perspective">
            <div className="home__page-perspective-title">Our Perspective</div>
            <div className="home__page-perspective-cards">
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
            <Button name="More Perspectives" className="button__light" />
          </div>
          <div className="home__page-impact">
            <div className="home__page-impact-title">
              Impact stories from our clients
            </div>
            <div className="home__page-impact-reviews">
              <ImpactCard person={person} review="Working with Bimpe (Edward consulting expert) was easy and fast. I was guided through the whole process and it was a breeze.  received offers from all the universities I applied to including University of Kent, the University of Sheffield and the University of Bristol. I'm being considered for scholarships to all." />
              <ImpactCard person={person} review="Working with Bimpe (Edward consulting expert) was easy and fast. I was guided through the whole process and it was a breeze.  received offers from all the universities I applied to including University of Kent, the University of Sheffield and the University of Bristol. I'm being considered for scholarships to all." />
              <ImpactCard person={person} review="Working with Bimpe (Edward consulting expert) was easy and fast. I was guided through the whole process and it was a breeze.  received offers from all the universities I applied to including University of Kent, the University of Sheffield and the University of Bristol. I'm being considered for scholarships to all." />
            </div>
            <Button name="Read More" className="button__light" />
          </div>
          <div className="home__page-schools">
            <div className="home__page-schools-title">
              Schools clients were admitted into
            </div>
            <div className="home__page-schools-list">
              <div className="home__page-impact-school">
                <img src="https://edwardconsulting.s3.eu-central-1.amazonaws.com/Penn.png" alt="impact-school" />
              </div>
              <div className="home__page-impact-school">
                <img src="https://edwardconsulting.s3.eu-central-1.amazonaws.com/Duke.png" alt="impact-school" />
              </div>
              <div className="home__page-impact-school">
                <img src="https://edwardconsulting.s3.eu-central-1.amazonaws.com/Bristol.jpeg" alt="impact-school" />
              </div>
              <div className="home__page-impact-school">
                <img src="https://edwardconsulting.s3.eu-central-1.amazonaws.com/NYU.jpg" alt="impact-school" />
              </div>
              <div className="home__page-impact-school">
                <img src="https://edwardconsulting.s3.eu-central-1.amazonaws.com/Illionis+.jpg" alt="impact-school" />
              </div>
              <div className="home__page-impact-school">
                <img src="https://edwardconsulting.s3.eu-central-1.amazonaws.com/Kent.jpg" alt="impact-school" />
              </div>
              <div className="home__page-impact-school">
                <img src="https://edwardconsulting.s3.eu-central-1.amazonaws.com/Sheffield.jpg" alt="impact-school" />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
