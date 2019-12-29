/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import NavBar from '../../components/navbar';
import NavExtension from '../../components/navbar/NavExtension';
import Footer from '../../components/footer';
import LeftServiceItem from '../../components/service/leftServiceItem';
import RightServiceItem from '../../components/service/rightServiceItem';


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
        <div className="service">
          <LeftServiceItem
            summary="Rather than focusing on partner universities we focus on our clients. You are the most important partner we have and we put your needs and interests first. Many other educational agencies are focused on their universities partnerships and many times that can be in conflict with what is best for their clients. There are several benefits in having partner universities however, partner universities are not recommended to our client’s unless they fit the client’s profile and goals. Our goal is to assist you in getting into your dream school and make your studies affordable."
            title="Client-Focused"
            firstImage="https://edwardconsulting.s3.eu-central-1.amazonaws.com/pexels-photo-901962+(1).jpeg"
            secondImage="https://edwardconsulting.s3.eu-central-1.amazonaws.com/pexels-photo-935948+(1).jpeg"
          />
          <RightServiceItem
            summary="From start to finish we guide our client’s through all aspects of the application process. Through consultation, we learn about your goals, interests, strengths, and weaknesses and we use this information to find the best schools for you and create a unique application that is both strong and competitive. From finding schools (both safe and reach schools), through the school application process such as proofreading essays. We also find scholarships that you are eligible for and guide you through that process and upon admission, we offer visa coaching and guidance. Finally, we also have a travel agency partner that arranges affordable air ticket and transportation for students to their universities."
            title="Guidance Through the Application Process"
            firstImage="https://edwardconsulting.s3.eu-central-1.amazonaws.com/pexels-photo-901962+(1).jpeg"
            secondImage="https://edwardconsulting.s3.eu-central-1.amazonaws.com/pexels-photo-935948+(1).jpeg"
          />
          <LeftServiceItem
            summary="Getting into your dream school is great but what happens when you cannot afford it? We know how heartbreaking and stressful that can be so we focus and work hard to prevent finances from limiting you from attending your dream school. This is why we offer personalized applications to make sure that you apply to the universities that are the best fit for your qualifications and profile and those that offer scholarships to international students. Moreover, we assist you in finding external grants and scholarships that you are eligible for and guide you through the process."
            title="Making Higher Education Affordable for You"
            firstImage="https://edwardconsulting.s3.eu-central-1.amazonaws.com/pexels-photo-901962+(1).jpeg"
            secondImage="https://edwardconsulting.s3.eu-central-1.amazonaws.com/pexels-photo-935948+(1).jpeg"
          />
          <RightServiceItem
            summary="It is more rewarding for us when we can invest in people who do not have the best grades but are eager and willing to put in the work to secure admission and We love to be challenged and help you submit your best application despite your poor GPA, or SAT score. For example, a client whose GPA was low, SAT score low University of Illinois Urbana-Champaign and Microsoft."
            title="Taking on Challenging Cases"
            firstImage="https://edwardconsulting.s3.eu-central-1.amazonaws.com/pexels-photo-901962+(1).jpeg"
            secondImage="https://edwardconsulting.s3.eu-central-1.amazonaws.com/pexels-photo-935948+(1).jpeg"
          />
          <LeftServiceItem
            summary="At Edward Consulting, we are more than just educational consultants. Even after our client’s have received admission and began their studies abroad, we stay connected and check in frequently to make sure they are settling in okay and academically excelling. Assisting you in starting your studies abroad is important but it is more important for us that you finish strong. We are dedicated to building relationships with our clients and a system that enhances continuous support for current and past clients. For example, we connect current clients with past clients that have similar profiles to give them advice about how to improve their application and answer questions about settling abroad."
            title="Post-Admission Support"
            firstImage="https://edwardconsulting.s3.eu-central-1.amazonaws.com/pexels-photo-901962+(1).jpeg"
            secondImage="https://edwardconsulting.s3.eu-central-1.amazonaws.com/pexels-photo-935948+(1).jpeg"
          />
          <RightServiceItem
            summary="This is an important component of our approach because we value excellence and growth and feedback can be used to improve our performance. We are eager to continually learn and the feedback received from the survey after we have provided our services to our clients will allow us to improve our services, create the necessary policies and relationships we need to grow into a world-class organization. We value hearing from you because it can unlock the necessary change and innovation we need to help you achieve your dreams."
            title="Post-Survey"
            firstImage="https://edwardconsulting.s3.eu-central-1.amazonaws.com/pexels-photo-901962+(1).jpeg"
            secondImage="https://edwardconsulting.s3.eu-central-1.amazonaws.com/pexels-photo-935948+(1).jpeg"
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Approach;
