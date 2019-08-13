/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.dropdown = React.createRef();
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  mouseOver(e) {
    e.stopPropagation();
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.openSubmenu();
  }

  mouseLeave(e) {
    e.stopPropagation();
    const dropdown = this.dropdown.current.classList;
    if (dropdown.contains('show')) {
      this.timer = setTimeout(this.closeSubmenu(), 1000);
    }
  }

  closeSubmenu() {
    this.dropdown.current.classList.remove('show');
  }

  openSubmenu() {
    this.dropdown.current.classList.toggle('show');
  }

  render() {
    return (
      <div className="dropdown">
        <div
          className="dropdown-btn"
          onMouseOver={this.mouseOver}
          onFocus={this.mouseOver}
          onClick={this.mouseOver}
          onMouseLeave={this.mouseLeave}
        >
          {this.props.name}
        </div>
        <div ref={this.dropdown} className="dropdown-content">
          {this.props.itemList.map(item => (
            <div
              key={item.name}
              onMouseOver={this.mouseOver}
              onFocus={this.mouseOver}
              onMouseLeave={this.mouseLeave}
              className="dropdown-content-item"
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Dropdown.propTypes = {
  name: Proptypes.string.isRequired,
  itemList: Proptypes.arrayOf(Proptypes.object).isRequired,
};

export default Dropdown;
