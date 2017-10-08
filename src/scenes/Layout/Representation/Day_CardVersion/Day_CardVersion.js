import React from 'react';
import PropTypes from 'prop-types'

const propTypes = {
  events: PropTypes.array.isRequired
};

const defaultProps = {};

const Day_CardVersion = ({ events }) => (
  <div>
    Day_CardVersion
  </div>
);

Day_CardVersion.propTypes = propTypes;

Day_CardVersion.defaultProps = defaultProps;

export default Day_CardVersion;
