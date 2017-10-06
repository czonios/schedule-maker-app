import React from 'react';
import PropTypes from 'prop-types';
import './month.css';
import { Grid } from 'semantic-ui-react';
import dateService from '../../../../services/dates/dateService';

const propTypes = {};

const defaultProps = {};

const Month = props => (
  <Grid columns={7} >
    <Grid.Row>
      {generateWeekdayColumns()}
    </Grid.Row>
    {generateRows(generateChunkedArr(padArr()))}
  </Grid>
);
function generateWeekdayColumns() {
  return dateService.dayStrRepArr.map((dayName, i) => {
    return (
      <Grid.Column key={i}>
        <p>{dayName}</p>
      </Grid.Column>
    )
  })
}
function padArr() {
  const daysArr = dateService.getDaysInMonth(2016, 9);
  const dayCount = dateService.getDaysCountInMonth(2016, 9);
  const initialPaddingNeeded = daysArr[0];
  return Array.from({ length: initialPaddingNeeded }, () => null)
    .concat(Array.from({ length: dayCount }, (_, i) => i + 1));
}
function generateChunkedArr(paddedArr) {
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
