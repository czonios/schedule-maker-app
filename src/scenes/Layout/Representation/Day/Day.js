import React from 'react';
import PropTypes from 'prop-types'
import { Grid } from 'semantic-ui-react';
import dateService from '../../../../services/dates/dateService';

const propTypes = {};

const defaultProps = {};

const Day = props => (
  <div>
    <Grid columns={2} celled>
      {/* <Grid.Column> */}
      {dateService.OClocks24.map(oclock => (
        <Grid.Row>
          <Grid.Column>{oclock}</Grid.Column>
          <Grid.Column>durr</Grid.Column>
        </Grid.Row>
      ))}
      {/* </Grid.Column> */}
      {/* <Grid.Column>
        <div>hurr</div>
        <div>durr</div>
      </Grid.Column> */}
    </Grid>
  </div>
);

Day.propTypes = propTypes;

Day.defaultProps = defaultProps;

export default Day;
