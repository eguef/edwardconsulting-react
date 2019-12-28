import React, { Component } from 'react';
import NavBar from '../../components/navbar';
import NavExtension from '../../components/navbar/NavExtension';
import Footer from '../../components/footer';


class Service extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
    };

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
          />
        </div>
        <div className="coming-soon">Services Page In Progress</div>
        <Footer />
      </div>
    );
  }
}

export default Service;
