/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Button from '../../components/button';
import Input from '../../components/input';
import NavBar from '../../components/navbar';
import BlogCard from '../../components/blogcard';
import ImpactCard from '../../components/impactcard';
import Footer from '../../components/footer';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      email: '',
      person: [{
        image: 'https://edwardconsulting.s3.eu-central-1.amazonaws.com/blank+image.png',
        name: 'Odinaka Chukwu',
        school: 'University of Pennsylvania',
      },
      {
        image: 'https://edwardconsulting.s3.eu-central-1.amazonaws.com/blank+image.png',
        name: 'Yewande Olusanya',
        school: 'University of Illinois',
      },
      {
        image: 'https://edwardconsulting.s3.eu-central-1.amazonaws.com/blank+image.png',
        name: 'Peter Adeyeye',
        school: 'Duke University',
      }],
    };

    this.onChange = this.onChange.bind(this);
    this.onClickConsultation = this.onClickConsultation.bind(this);
    this.onClickApproach = this.onClickApproach.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  onClickConsultation(e) {
    e.preventDefault();
    // eslint-disable-next-line react/prop-types
    this.props.history.push('/consultation');
  }

  onClickApproach(e) {
    e.preventDefault();
    // eslint-disable-next-line react/prop-types
    this.props.history.push('/our-approach');
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
              <Button name="our approach" className="button__light" onClick={this.onClickApproach} />
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
                onClick={this.onClickConsultation}
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
              <ImpactCard person={person[0]} review="With a fully-funded scholarship from Penn UNESCO and a fellowship award from P.E.O Peace International, I am well on my way to begin my graduate studies at an Ivy League University; the University of Pennsylvania. Thanks to Edward Consulting for making my education dream come true!" />
              <ImpactCard person={person[1]} review="When I finally began my MBA program at the University of Illinois at Urbana-Champaign, Bimpe from Edward consulting was a constant resource when I needed advice about certain situations. I graduated with a job offer at Microsoft and I would love to say that my success story will not be complete without mentioning Bimpe and her influence." />
              <ImpactCard person={person[2]} review="I am so thankful to Edward consulting and cannot stop recommending them to anyone who wants to travel abroad for their studies. I got accepted to Duke University and a fully-funded scholarship that provides funding for tuition, room, and board, travel to and from Home Country, internship, experiences, conferences, and research" />
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
