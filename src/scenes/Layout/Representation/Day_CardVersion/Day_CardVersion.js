import React from 'react';
import PropTypes from 'prop-types'
import timeService from '../../../../services/times/timeService';
import { Card } from 'semantic-ui-react';

const propTypes = {
  events: PropTypes.array.isRequired
};

const defaultProps = {};

const Day_CardVersion = ({ events }) => (
  <div>
    {/* timeService.sort */}
  </div>
);

Day_CardVersion.propTypes = propTypes;

Day_CardVersion.defaultProps = defaultProps;

export default Day_CardVersion;
