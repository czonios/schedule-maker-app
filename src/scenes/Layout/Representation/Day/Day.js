import React from 'react';
// import PropTypes from 'prop-types'
import { Grid } from 'semantic-ui-react';
import dateService from '../../../../services/dates/dateService';

// const propTypes = {};

// const defaultProps = {};

const Day = props => (
  <div>
    <Grid columns={2} celled>
      {dateService.OClocks24.map(oclock => (
        <Grid.Row>
          <Grid.Column width={2}>{oclock}</Grid.Column>
          <Grid.Column>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Grid.Column>
        </Grid.Row>
      ))}
    </Grid>
  </div>
);

// Day.propTypes = propTypes;

// Day.defaultProps = defaultProps;

export default Day;
