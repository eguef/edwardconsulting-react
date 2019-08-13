import React from 'react';
import PropTypes from 'prop-types';

const button = (props) => {
  const { name, className } = props;
  return (
    <button type="button" className={className}>
      {name}
    </button>
  );
};

button.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default button;
