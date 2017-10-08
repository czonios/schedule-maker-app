import React from 'react';
import PropTypes from 'prop-types';
import timeService from '../../../../../../services/times/timeService';
import { Card } from 'semantic-ui-react';
import './DayCardVersion.css';

const propTypes = {
  events: PropTypes.array.isRequired
};

const defaultProps = {};

const DayCardVersion = ({ events }) => (
  <div className="day">
    {timeService.sortEventsByTimeMutable(events).map((event, i) => (
      <Card key={i} centered >
        <Card.Content extra className="event-start">
          {event.time.start}
        </Card.Content>
    <Card.Content>
          <Card.Header>
            {event.title}
          </Card.Header>
          <Card.Description>
            {event.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra className="event-end">
          {event.time.end}
        </Card.Content>
      </Card>
    ))}
  </div>
);

DayCardVersion.propTypes = propTypes;

DayCardVersion.defaultProps = defaultProps;

export default DayCardVersion;
