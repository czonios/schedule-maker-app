import React from 'react';
import PropTypes from 'prop-types';
import './month.css';
import { Grid } from 'semantic-ui-react';
import dateService from '../../../../services/dates/dateService';

const propTypes = {
  displayYear: PropTypes.number.isRequired,
  displayMonth: PropTypes.number.isRequired
};

const defaultProps = {
  displayYear: 2017,
  displayMonth: 9
};

const Month = ({ displayMonth, displayYear }) => (
  <div className="month-view-wrapper">
    <Grid.Row>
      <MonthHeader displayMonth={displayMonth} />
    </Grid.Row>
    <Grid columns={7} divided>
      <Grid.Row>
        {generateWeekdayColumns()}
      </Grid.Row>
      {generateRows(splitDaysIntoWeeks(padDaysInMonthArr(2017, 9)))}
    </Grid>
  </div>
);
const MonthHeader = ({ displayMonth }) => (
  <div>
    <button>prev</button>
    {dateService.monthNamesLong[displayMonth]}
    <button>next</button>
  </div>
)

function generateWeekdayColumns() {
  return dateService.dayStrRepArr.map((dayName, i) => {
    return (
      <Grid.Column key={i}>
        <p>{dayName}</p>
      </Grid.Column>
    )
  })
}
function padDaysInMonthArr(year, month) {
  const daysArr = dateService.getDaysInMonth(year, month);
  const dayCount = dateService.getDaysCountInMonth(year, month);
  const initialPaddingNeeded = daysArr[0];
  return Array.from({ length: initialPaddingNeeded }, () => null)
    .concat(Array.from({ length: dayCount }, (_, i) => i + 1));
}
function splitDaysIntoWeeks(paddedArr) {
  const chuckArr = [];
  for (let i = 0; i < 36; i += 7) {
    chuckArr.push(paddedArr.slice(i, i + 7));
  }
  return chuckArr;
}
function generateRows(chunkedArr) {
  return chunkedArr.map(subArr => {
    return <Grid.Row>
      {subArr.map(day => {
        return (<Grid.Column>
          <div>{day}</div>
        </Grid.Column>
        )
      })}
    </Grid.Row>
  })
}

Month.propTypes = propTypes;

Month.defaultProps = defaultProps;

export default Month;
