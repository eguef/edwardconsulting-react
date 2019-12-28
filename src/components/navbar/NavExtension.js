/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

const NavExtension = ({
  placeholder,
  name,
  value,
  onChange,
  links,
  onClick,
  title,
}) => (
  <div className="nav-extension">
    { title ? (<div className="extension-title">{ title }</div>) : (
      <div className="nav-extension-apply">
        <div className="nav-extension-title">Apply Like a Pro</div>
        <div className="nav-extension-summary">
        Application tips, school and scholarship information - straight to your
        inbox!
        </div>
        <div className="nav-extension-input">
          <input
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
          />
          <button type="button">Subscribe</button>
        </div>
      </div>
    )}
    { links && (
      <div className="nav-extension-tabs">
        {links.map(link => (
          <div key={link.name} className="nav-extension-tab" onClick={onClick}>
            {link.name}
          </div>
        ))}
      </div>
    )}
  </div>
);

NavExtension.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.node,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  title: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.object),
};

export default NavExtension;
