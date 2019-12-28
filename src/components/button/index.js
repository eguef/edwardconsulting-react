import React from 'react';
import PropTypes from 'prop-types';

const button = (props) => {
  const { name, className, onClick } = props;
  return (
    <button type="button" className={className} onClick={onClick}>
      {name}
    </button>
  );
};

button.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  onSave: PropTypes.func,
};

export default button;
