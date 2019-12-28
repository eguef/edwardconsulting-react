import React from 'react';
import PropTypes from 'prop-types';

const NavExtension = ({
  placeholder,
  name,
  value,
  onChange,
  links,
  onClick,
}) => (
  <div className="nav-extension">
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
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NavExtension;
