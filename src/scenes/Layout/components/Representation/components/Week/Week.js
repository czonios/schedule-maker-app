import React from 'react';
import './week.css';
import { Grid, Header } from 'semantic-ui-react';
import dateService from '../../../../../../services/dates/dateService';
import WeekdayColumns from '../WeekDayColumns/WeekdayColumns';
import DayOfWeek from './components/DayOfWeek/DayOfWeek';
import PropTypes from 'prop-types';

const propTypes = {
  events: PropTypes.array.isRequired
};

// const defaultProps = {};

const Week = ({ events }) => (
  <div className="week">
    <Grid columns={8} celled>

      <Grid.Row>
        <Grid.Column><Header></Header></Grid.Column>
        <WeekdayColumns />
      </Grid.Row>

      {dateService.OClocks24.map((oclock, i) => (
        <Grid.Row key={i}>
          <Grid.Column className="time" width={2}>
            {oclock}
          </Grid.Column>

          <Grid.Column>
            <DayOfWeek time={oclock} day="mon" />
          </Grid.Column>

          <Grid.Column>
            <DayOfWeek time={oclock} day="tue" />
          </Grid.Column>

          <Grid.Column>
            <DayOfWeek time={oclock} day="wed" />
          </Grid.Column>

          <Grid.Column>
            <DayOfWeek time={oclock} day="thu" />
          </Grid.Column>

          <Grid.Column>
            <DayOfWeek time={oclock} day="fri" />
          </Grid.Column>

          <Grid.Column>
            <DayOfWeek time={oclock} day="sat" />
          </Grid.Column>

          <Grid.Column>
            <DayOfWeek time={oclock} day="sun" />
          </Grid.Column>



        </Grid.Row>

      ))}

    </Grid>
  </div>
);

Week.propTypes = propTypes;

// Week.defaultProps = defaultProps;

export default Week;
