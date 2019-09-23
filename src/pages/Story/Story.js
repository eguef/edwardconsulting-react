import React, { Component } from "react";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";

class Story extends Component {
  render() {
    return (
      <div className="story">
        <NavBar className="navbar__transparent-white" />
        <div className="story__landing">
          <div className="story__landing-left">
            <div className="story-title">Our Story</div>
            <div className="story-why">Why we do it.</div>
            <div className="story-summary">
              “Our journey began in 2006 when our founder signed up to take the
              SAT and SAT lessons through the top educational agency company in
              Nigeria.”
            </div>
          </div>
          <div className="story__landing-right">
            <img
              src="https://edwardconsulting.s3.eu-central-1.amazonaws.com/pexels-photo-901962+(1).jpeg"
              alt="blog-img"
            />
          </div>
          <i className="story-down-icon fa fa-chevron-down" />
        </div>
        <div className="story-content">
          <div className="story-content-one">
            Our journey began in 2006 when our founder signed up to take the SAT
            and SAT lessons through the top educational agency company in
            Nigeria.
          </div>
          <div className="story-content-two">
            <span>
              At the time, I was too young and uninformed to realize that all
              the chosen schools selected by the educational consulting company
              were partner schools. That is not a bad thing if those schools are
              the perfect fit for my profile but this was not the case.
              Fortunately for me, I had a great score in my SAT that allowed me
              to secure scholarships to all the universities I applied to.
            </span>
            <span>
              I selected Illinois College because they offered me the most
              scholarship. However, upon arriving in the United States and
              Illinois College, things became incredibly difficult for me. It
              was particularly difficult for me because I was young, financially
              unstable and at a college with little to no diversity. Illinois
              College was not the best fit for me.
            </span>
            <span>
              I transferred to the University of Maryland Baltimore County
              (UMBC) my second year, and that meant I lost my scholarship from
              Illinois College. It was while I was at UMBC that I started having
              conversations with different people, staff, students, and friends
              in the United States that I realized that with my SAT score
              1390/1600 I could have received a full scholarship to Ivy league.
              However, as a transfer student I couldn’t and the whole time I
              kept wondering why the educational agency company I had paid a
              large sum of money did not advise me to apply to additional reach
              schools (they are harder to get in to but if you do, they give
              substantial scholarship) since I had the grades and profile to get
              in and secure substantial scholarship.
            </span>
            <span className="story-content-failed">
              They had failed me. They failed me for 2 reasons
            </span>
            <span>
              {" "}
              1) They do not really know what they are doing. It is hard for you
              to understand how a system works if you’ve never lived or schooled
              there.
            </span>
            <span>
              {" "}
              2) They are not client-focused but partner-focused. This means
              that the client is not their priority but the partner schools that
              will pay them for every person they successfully send to them.
            </span>
            <span>
              I do not have an issue with having partner schools. The issue is
              recommending partner schools to client’s when they do not fit the
              client's profile or goal or not selecting an alternative school
              that can give the client more scholarship and substance because it
              is not a partner school.
            </span>
            <span>
              My experience with educational agencies in Nigeria and abroad is
              not one that is unique. Many continue to charge ridiculous amounts
              for generic applications and services with their focus on money
              instead of their client.
            </span>
            <span className="story-content-failed">
              Edward Consulting was created to change/ improve lives through
              education by putting our client’s first and working with them to
              create a personalized application that highlights their
              strength.At Edward Consulting, we connect you to the best
              universities and scholarships in the world! We are committed to
              getting students into top universities in countries such as the
              United States, Canada, the United Kingdom, Australia and many
              more.{" "}
            </span>
            <span>
              We are dedicated to giving international students, especially from
              developing countries access to quality education and substantial
              scholarships. We believe that education can build global leaders
              and change agents in all fields so we invest in people.
            </span>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Story;
