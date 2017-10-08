import React from 'react';
// import PropTypes from 'prop-types'
import { Grid, Header, Segment } from 'semantic-ui-react';
import dateService from '../../../../../../services/dates/dateService';
import './day.css';

// const propTypes = {};

// const defaultProps = {};

const Day = props => (
  <div>
    <Grid columns={3} celled>
      <Grid.Row>
        {/* DayHeader here */}
      </Grid.Row>
      {dateService.OClocks24.map((oclock, i) => (
        <Grid.Row key={i}>
          <Grid.Column className="time" width={2}>
            {oclock}
          </Grid.Column>

          <Grid.Column>
            {
              /* IMPORTANT - this should be relative to the oclock
              * for example, if oclock=08:00 for a particular date,
              * fetch data (Event object) that either starts at 8 or ends after
              * 8 and display/render it here. 
              */
            }
            <Header size="small">Title</Header>
            <p>Lorem ipsum dolor sit amet,abore et dolore magna aliqua.</p>
          </Grid.Column>

          <Grid.Column>
            {/* Notes go here, each one on it's own segment */}
            <Segment.Group horizontal>
              <Segment vertical>
                <Header size="tiny">note1</Header>
                <p>sfadsfasdfaddsf</p>
              </Segment>
              <Segment vertical>
                <Header size="tiny">note2</Header>
                <p>sfadsfasdfaddsf</p>
              </Segment>
              {/* if more than 2 notes, make another column */}
            </Segment.Group>
          </Grid.Column>

        </Grid.Row>

      ))}
    </Grid>
  </div>
);

// Day.propTypes = propTypes;

// Day.defaultProps = defaultProps;

export default Day;
