import React from 'react';
import PropTypes from 'prop-types'
import timeService from '../../../../services/times/timeService';
import { Card } from 'semantic-ui-react';
import './DayCardVersion.css';

const propTypes = {
  events: PropTypes.array.isRequired
};

const defaultProps = {};

const DayCardVersion = ({ events }) => (
  <div>
    {timeService.sortEventsByTimeMutable(events).map((event, i) => (
      <Card key={i} centered >
        <Card.Header>
          {event.time.start}
        </Card.Header>
        <Card.Content>
          <Card.Header>
            {event.title}
          </Card.Header>
          <Card.Description>
            {event.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra className="red-background">
          {event.time.end}
        </Card.Content>
      </Card>
    ))}
  </div>
);

DayCardVersion.propTypes = propTypes;

DayCardVersion.defaultProps = defaultProps;

export default DayCardVersion;
