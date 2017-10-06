import React from 'react';
import PropTypes from 'prop-types'
import { Grid } from 'semantic-ui-react';

const DayRows = ({ displayMonth, displayYear, dateService }) => (

  generateRows(splitDaysIntoWeeks(padDaysInMonthArr(displayYear, displayMonth, dateService)))

);

/**
 * For display on the month grid, if the first day of the month isn't sunday, null's need to be added
 * onto the beggining of the array in order to adjust the display to the right
 * EG if a month starts on wednesday, we want 3 null's padded onto the front of the days array 
 * in order to adjust for sun through tue
 */
function padDaysInMonthArr(year, month, dateService) {
  
  const daysArr = dateService.getDaysInMonth(year, month);
  const dayCount = dateService.getDaysCountInMonth(year, month);
  const initialPaddingNeeded = daysArr[0];
  return Array.from({ length: initialPaddingNeeded }, () => null)
    .concat(Array.from({ length: dayCount }, (_, i) => i + 1));
}

//Transform the 1d padded array into a 2d array (5 x 7) representing the weeks of the month
function splitDaysIntoWeeks(paddedArr) {
  
  const chunckArr = [];
  for (let i = 0; i < 36; i += 7) {
    chunckArr.push(paddedArr.slice(i, i + 7));
  }
  return chunckArr;
}

//Consume the 2d array representing the weeks, and generate  5-6 Grid.Rows with the days as columns 
function generateRows(chunkedArr) {
  
  return chunkedArr.map((subArr, i) => {
    return <Grid.Row key={i}>
      {subArr.map((day, j) => {
        return (<Grid.Column key={j}>
          <div>{day}</div>
        </Grid.Column>
        )
      })}
    </Grid.Row>
  })
}

const propTypes = {
  displayMonth: PropTypes.number.isRequired,
  displayYear: PropTypes.number.isRequired,
  dateService: PropTypes.object.isRequired
};

const defaultProps = {};

DayRows.propTypes = propTypes;

DayRows.defaultProps = defaultProps;

export default DayRows;
