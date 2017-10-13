import React from 'react';
import PropTypes from 'prop-types'
import { Grid } from 'semantic-ui-react';
import './dayRows.css';
// import AddEventIcon from '../../.././AddEventIcon/AddEventIcon';
import MonthDayCell from './MonthDayCell/MonthDayCell';

const DayRows = ({ displayMonth, displayYear, dateService, events }) => (
  //This function need to be cleaned up/broken down, badly
  generateRows(events, displayYear, displayMonth, splitDaysIntoWeeks(padDaysInMonthArr(displayYear, displayMonth, dateService)))

);


/**
 * padDaysInMonthArr concatenates null to the beginning and end of the
 * array, if the month doesn't start on Monday and end on Sunday.
 * This is then used to gray out cells that appear in one month
 * but actually belong to the previous and next months.
 */
export function padDaysInMonthArr(year, month, dateService) {

  const daysArr = dateService.getDaysInMonth(year, month);
  const dayCount = dateService.getDaysCountInMonth(year, month);
  const initialPaddingNeeded = daysArr[0];
  let paddedArr = Array.from({
    length: initialPaddingNeeded
  },
    () => null
  ).concat(Array.from({
    length: dayCount
  },
    (_, i) => i + 1)
    );

  let len = paddedArr.length;
  let cellsToPad;

  if (len > 35)
    cellsToPad = 42 - len;
  else
    cellsToPad = 35 - len;


  if (cellsToPad > 0) {
    const endPaddingNeeded = Array.from({ length: cellsToPad }, () => null);
    paddedArr = paddedArr.concat(endPaddingNeeded);
  }
  return paddedArr;

}

//Transform the 1d padded array into a 2d array (5 x 7) representing the weeks of the month
export function splitDaysIntoWeeks(paddedArr) {

  const chunckArr = [];
  for (let i = 0; i < 36; i += 7) {
    chunckArr.push(paddedArr.slice(i, i + 7));
  }
  return chunckArr;
}


//Consume the 2d array representing the weeks, and generate  5-6 Grid.Rows with the days as columns 
export function generateRows(events, displayYear, displayMonth, chunkedArr) {
  return chunkedArr.map((subArr, i) => {
    return (
      <Grid.Row key={i}>
        {subArr.map((day, j) => {
          return <MonthDayCell key={j} day={day} displayYear={displayYear}
            displayMonth={displayMonth} events={events} />
        })}
      </Grid.Row>
    );
  });
}

const propTypes = {
  displayMonth: PropTypes.number.isRequired,
  displayYear: PropTypes.number.isRequired,
  dateService: PropTypes.object.isRequired,
  events: PropTypes.array.isRequired,
};

const defaultProps = {};

DayRows.propTypes = propTypes;

DayRows.defaultProps = defaultProps;

export default DayRows;
