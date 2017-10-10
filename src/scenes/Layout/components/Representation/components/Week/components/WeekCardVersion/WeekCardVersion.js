import React from 'react';
import PropTypes from 'prop-types'
import { Grid, Header } from 'semantic-ui-react';
import WeekdayColumns from '../../.././WeekDayColumns/WeekdayColumns';
import DayCardVersion from '../../.././DayCardVersion/DayCardVersion.js'
import dateService from '../../../../../../../../services/dates/dateService';
import './WeekCardVersion.css'


const propTypes = {
  events: PropTypes.array.isRequired
};

const defaultProps = {};

const WeekCardVersion = ({ events }) => {
  return (
    // style={{ 'display': 'flex' }}
    <div className="weekViewWrapper">
      {[0, 1, 2, 3, 4, 5, 6].map(dayOfWeekVal => {
        const dayEvents = events.filter(event => event.date.dayOfWeek === dayOfWeekVal);
        return (
          <div key={dayOfWeekVal} className="weekdayColumn">
            <div className="dayHeader" >
              {dateService.dayStrRepArr[dayOfWeekVal]}
            </div>
            <div >
              <DayCardVersion events={dayEvents} condensed={true} />
            </div>
          </div>
        )
      })}
    </div>
  )
}


WeekCardVersion.propTypes = propTypes;

WeekCardVersion.defaultProps = defaultProps;

export default WeekCardVersion;
