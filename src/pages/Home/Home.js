import React, { Component } from 'react';
import Button from '../../components/button';
import Input from '../../components/input';
import NavBar from '../../components/navbar';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      email: '',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { firstName, email } = this.state;
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
              <Button name="Help Me Get Into My Dream School!" />
            </div>
          </div>
          <div className="home__landing-down-icon"><i className="fa fa-chevron-down" /></div>
        </div>
        <div className="home__page">
          <NavBar />
          <div className="home__page-approach" />
          <div className="home__page-whyus" />
          <div className="home__page-process" />
          <div className="home__page-perspective" />
          <div className="home__page-impact" />
          <div className="home__page-schools" />
          <div className="home__page-footer" />
        </div>
      </div>
    );
  }
}

export default Home;
