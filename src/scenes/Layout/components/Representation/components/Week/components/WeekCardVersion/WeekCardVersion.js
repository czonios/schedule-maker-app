import React from 'react';
import PropTypes from 'prop-types'
import { Grid, Header } from 'semantic-ui-react';
import WeekdayColumns from '../../.././WeekDayColumns/WeekdayColumns';
import DayCardVersion from '../../.././DayCardVersion/DayCardVersion.js'

const propTypes = {
  events: PropTypes.array.isRequired
};

const defaultProps = {};

const WeekCardVersion = ({ events }) => (
  <div>
    <Grid columns={8} celled>

      <Grid.Row>
        <Grid.Column><Header></Header></Grid.Column>
        <WeekdayColumns />
      </Grid.Row>
      <Grid.Row>
        {[0, 1, 2, 3, 4, 5, 6].map(day => {
          <Grid.Column key={day}>
            <DayCardVersion events={events} />
          </Grid.Column>
        })}
        <Grid.Column>
          <DayCardVersion events={events} />
        </Grid.Column>

        <Grid.Column>
          <DayCardVersion events={events} />
        </Grid.Column>

        <Grid.Column>
          <DayCardVersion events={events} />
        </Grid.Column>

        <Grid.Column>
          <DayCardVersion events={events} />
        </Grid.Column>

        <Grid.Column>
          <DayCardVersion events={events} />
        </Grid.Column>

        <Grid.Column>
          <DayCardVersion events={events} />
        </Grid.Column>

        <Grid.Column>
          <DayCardVersion events={events} />
        </Grid.Column>



      </Grid.Row>

    </Grid>
  </div>
);

WeekCardVersion.propTypes = propTypes;

WeekCardVersion.defaultProps = defaultProps;

export default WeekCardVersion;
