import React from 'react';
import PropTypes from 'prop-types';

const button = (props) => {
  const { name } = props;
  return (
    <button type="button" className="button">
      {name}
    </button>
  );
};

button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default button;
