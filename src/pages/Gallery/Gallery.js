import React, { Component } from 'react';
import PhotoCard from './Photocard';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';

class Gallery extends Component {
  render() {
    return (
      <div className="gallery">
        <NavBar />
        <div className="gallery-list">
          <PhotoCard
            imgSrc="https://edwardconsulting.s3.eu-central-1.amazonaws.com/Odinaka_Chukwu.JPG"
            summary="How to find the best scholarships for your graduate program"
          />
          <PhotoCard
            imgSrc="https://edwardconsulting.s3.eu-central-1.amazonaws.com/Yewande_Olusanya.png"
            summary="How to find the best scholarships for your graduate program"
          />
          <PhotoCard
            imgSrc="https://edwardconsulting.s3.eu-central-1.amazonaws.com/Additional_20.jpeg"
            summary="How to find the best scholarships for your graduate program"
          />
          <PhotoCard
            imgSrc="https://edwardconsulting.s3.eu-central-1.amazonaws.com/Admission_Processing copy.jpeg"
            summary="How to find the best scholarships for your graduate program"
          />
          <PhotoCard
            imgSrc="https://edwardconsulting.s3.eu-central-1.amazonaws.com/Admisison_Processing_2.jpeg"
            summary="How to find the best scholarships for your graduate program"
          />
          <PhotoCard
            imgSrc="https://edwardconsulting.s3.eu-central-1.amazonaws.com/Admission_Processing_3.jpeg"
            summary="How to find the best scholarships for your graduate program"
          />
          <PhotoCard
            imgSrc="https://edwardconsulting.s3.eu-central-1.amazonaws.com/pexels-photo-935948+(1).jpeg"
            summary="How to find the best scholarships for your graduate program"
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Gallery;
