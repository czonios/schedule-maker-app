import React from 'react';
import PropTypes from 'prop-types';
import './month.css';
import { Grid } from 'semantic-ui-react';
import dateService from '../../../../../../services/dates/dateService';
import DayRows from './components/DayRows/DayRows.js';
import WeekdayColumns from '../WeekDayColumns/WeekdayColumns';


const Month = ({ displayMonth, displayYear, incrementDisplayMonth, decrementDisplayMonth, events }) => (
  <div className="month-view-wrapper">
    <Grid columns={7} celled>

      <Grid.Row>
        <WeekdayColumns />
      </Grid.Row>
      <DayRows events={events} displayMonth={displayMonth} displayYear={displayYear} dateService={dateService} />

    </Grid>

  </div>
);

const propTypes = {
  displayYear: PropTypes.number.isRequired,
  displayMonth: PropTypes.number.isRequired,
  incrementDisplayMonth: PropTypes.func.isRequired,
  decrementDisplayMonth: PropTypes.func.isRequired,
};

const defaultProps = {

};

Month.propTypes = propTypes;

Month.defaultProps = defaultProps;

export default Month;
