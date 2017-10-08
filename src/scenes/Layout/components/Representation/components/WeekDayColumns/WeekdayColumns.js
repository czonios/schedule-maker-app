import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import dateService from '../../../../../../services/dates/dateService';
import './weekdayColumns.css';

// Generates the columns, named Mon, Tue etc.
const WeekdayColumns = () => {
    return dateService.dayStrRepArr.map((dayName, i) => {
      return (
        <Grid.Column key={i}>
          <Header size="medium" className="day-name">{dayName}</Header>
        </Grid.Column>
      );
    });
  }

  export default WeekdayColumns