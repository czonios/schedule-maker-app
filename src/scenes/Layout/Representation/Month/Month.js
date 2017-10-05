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
      {dateService.dayStrRepArr.map(dayName => {
        return (
          <Grid.Column>
            <p>{dayName}</p>
          </Grid.Column>
        )
      })}
    </Grid.Row>
    {console.log(dateService.getDaysInMonth())}
  </Grid>
);

Month.propTypes = propTypes;

Month.defaultProps = defaultProps;

export default Month;
