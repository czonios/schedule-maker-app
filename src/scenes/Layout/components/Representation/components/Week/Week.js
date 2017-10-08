import React from 'react';
import './week.css';
import { Grid } from 'semantic-ui-react';
import WeekdayColumns from '../WeekDayColumns/WeekdayColumns';
// import PropTypes from 'prop-types'

// const propTypes = {};

// const defaultProps = {};

const Week = props => (
  <div className="week">
    <Grid columns={7} celled>

      <Grid.Row>
        <WeekdayColumns />
      </Grid.Row>

    </Grid>
  </div>
);

// Week.propTypes = propTypes;

// Week.defaultProps = defaultProps;

export default Week;
