import React from 'react';
import PropTypes from 'prop-types';
import './month.css';
import { Grid } from 'semantic-ui-react';
import dateService from '../../../../services/dates/dateService';
import MonthHeader from './MonthHeader/MonthHeader.js';
import DayRows from './DayRows/DayRows.js';


const Month = ({ displayMonth, displayYear, incrementDisplayMonth, decrementDisplayMonth }) => (
  <div className="month-view-wrapper">

    <Grid columns={7} divided>

      <Grid.Row centered>
        <MonthHeader displayMonth={displayMonth} incrementDisplayMonth={incrementDisplayMonth}
          decrementDisplayMonth={decrementDisplayMonth} displayYear={displayYear}
          dateService={dateService} />
      </Grid.Row>

      <Grid.Row>
        {generateWeekdayColumns()}
      </Grid.Row>
      <DayRows displayMonth={displayMonth} displayYear={displayYear} dateService={dateService} />

    </Grid>

  </div>
);

function generateWeekdayColumns() {
  return dateService.dayStrRepArr.map((dayName, i) => {
    return (
      <Grid.Column key={i}>
        <h2 className="day-name">{dayName}</h2>
      </Grid.Column>
    )
  })
}

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
