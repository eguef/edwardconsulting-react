/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import NavBar from '../../components/navbar';
import NavExtension from '../../components/navbar/NavExtension';
import Footer from '../../components/footer';
import LeftServiceItem from '../../components/service/leftServiceItem';
import RightServiceItem from '../../components/service/rightServiceItem';

class Service extends Component {
  render() {
    return (
      <div className="blog">
        <div className="blog-nav-section">
          <NavBar />
          <NavExtension title="Our Services" />
        </div>
        <div className="service">
          <LeftServiceItem
            summary="We understand that each individual is unique so we take time to assess you, get to know you and understand your needs and your ultimate goal. Selecting the right school is essential and we can only do so by knowing your strengths, weaknesses, and interests. Knowing all this information will allow us to find you the universities that fit your needs and allow you to become your best self."
            title="Personalized Consultation and Assessment"
            firstImage="https://edwardconsulting.s3.eu-central-1.amazonaws.com/attractive-beautiful-beauty-1820919+(1).jpg"
            secondImage="https://edwardconsulting.s3.eu-central-1.amazonaws.com/pexels-photo-935948+(1).jpeg"
          />
          <RightServiceItem
            summary="We will work with you to find and complete the application process of 5 schools that are the best fit for you. We will assist with all aspects of admission processing such as proofreading and providing templates for personal statement essays, resumes, recommendation letters and so on."
            title="Admission Processing and Student Placement"
            firstImage="https://edwardconsulting.s3.eu-central-1.amazonaws.com/attractive-beautiful-beauty-1820919+(1).jpg"
            secondImage="https://edwardconsulting.s3.eu-central-1.amazonaws.com/pexels-photo-935948+(1).jpeg"
          />
          <LeftServiceItem
            summary="We understand that the school you attend matters and can help create more opportunities for you. As a result, we will work with you to get you into Ivy league schools and top schools in the world. Together, we will develop a strategy to make the process stress-free and easy for you to submit strong personalized applications."
            title="Competitive Application to Ivy League Schools"
            firstImage="https://edwardconsulting.s3.eu-central-1.amazonaws.com/attractive-beautiful-beauty-1820919+(1).jpg"
            secondImage="https://edwardconsulting.s3.eu-central-1.amazonaws.com/pexels-photo-935948+(1).jpeg"
          />
          <RightServiceItem
            summary="Finding funding and scholarships to school is paramount to study abroad. This is why we make this one of our top priorities. Schools selected will not only be chosen based on your interest but on the internal and external scholarships available to international students. There are so many scholarships and fellowship opportunities available to international students that demonstrate academic excellence and our clients continue to be one of those students that receive such scholarships. This is because we focus on making higher education affordable by working hard with our clients to build strong personalized applications."
            title="International Scholarships & Fellowships Search"
            firstImage="https://edwardconsulting.s3.eu-central-1.amazonaws.com/attractive-beautiful-beauty-1820919+(1).jpg"
            secondImage="https://edwardconsulting.s3.eu-central-1.amazonaws.com/pexels-photo-935948+(1).jpeg"
          />
          <LeftServiceItem
            summary="Navigating the visa process can be difficult and confusing but as an international student, even with admission and scholarship without a visa, you will not be able to begin your studies in your dream school. We will help ensure you have all the relevant documents for the visa process, assist in the elimination of errors and that you have been prepped to be confident during the visa interview."
            title="Visa Coaching & Processing"
            firstImage="https://edwardconsulting.s3.eu-central-1.amazonaws.com/attractive-beautiful-beauty-1820919+(1).jpg"
            secondImage="https://edwardconsulting.s3.eu-central-1.amazonaws.com/pexels-photo-935948+(1).jpeg"
          />
          <RightServiceItem
            summary="It is important that we can offer assistance from the beginning of your application until you are abroad. As a result, we have partnered with Countless Miles to make sure that you have the best flight prices to get you to your final destination. We are also able to offer more assistance upon arrival in things such as a pickup vehicle and setting up your phone."
            title="Student Travel Arrangements"
            firstImage="https://edwardconsulting.s3.eu-central-1.amazonaws.com/attractive-beautiful-beauty-1820919+(1).jpg"
            secondImage="https://edwardconsulting.s3.eu-central-1.amazonaws.com/pexels-photo-935948+(1).jpeg"
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Service;
