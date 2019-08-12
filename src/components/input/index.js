import React from 'react';
import PropTypes from 'prop-types';

const input = (props) => {
  const { placeholder, name, value, onChange } = props;
  return (
    <input className="input" placeholder={placeholder} name={name} value={value} onChange={onChange} />
  );
};

input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default input;
