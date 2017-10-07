import React from 'react';
import PropTypes from 'prop-types'
import { Grid } from 'semantic-ui-react';
import dateService from '../../../../services/dates/dateService';

const propTypes = {};

const defaultProps = {};

const Day = props => (
  <div>
    <Grid columns={2} celled>
      {dateService.OClocks24.map(oclock => (
        <Grid.Row>
          <Grid.Column width={2}>{oclock}</Grid.Column>
          <Grid.Column>dursdffffffffffffit commit -m 'ADD made the numbers on the month views calendar into Links to the view of the correspondingday, FIXED the snapshot tests for DayRows after modifying it, ADD the very basic outline of the grid for the day view'
[paul-dev-2017/10/6 8c55768] ADD made the numbers on the month views calendar into Links to the view of the corresponding day, FIXED the snapshot tests for DayRows after modifying it, ADD the very basic outline of the grid for the day viewfffffffffffffffffffffffffffr</Grid.Column>
        </Grid.Row>
      ))}
    </Grid>
  </div>
);

Day.propTypes = propTypes;

Day.defaultProps = defaultProps;

export default Day;
