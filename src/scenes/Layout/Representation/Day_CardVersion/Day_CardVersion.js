import React from 'react';
import PropTypes from 'prop-types'
import timeService from '../../../../services/times/timeService';
import { Card } from 'semantic-ui-react';
import './Day_CardVersion.css';

const propTypes = {
  events: PropTypes.array.isRequired
};

const defaultProps = {};

const Day_CardVersion = ({ events }) => (
  <div>
    {console.log(timeService.sortEventsByTimeMutable(events))}
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

Day_CardVersion.propTypes = propTypes;

Day_CardVersion.defaultProps = defaultProps;

export default Day_CardVersion;
