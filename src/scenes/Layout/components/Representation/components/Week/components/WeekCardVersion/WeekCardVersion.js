import React from 'react';
import PropTypes from 'prop-types';
import DayCardVersion from '../../.././DayCardVersion/DayCardVersion.js'

import './WeekCardVersion.css'
import DayHeader from './DayHeader/DayHeader';

const propTypes = {
  events: PropTypes.array.isRequired,
  displayEventModal: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  displayYear: PropTypes.number.isRequired,
  displayMonth: PropTypes.number.isRequired,
  // displayDay: PropTypes.number.isRequired,
};

const defaultProps = {};

const WeekCardVersion = ({ events, displayEventModal, deleteEvent, displayYear, displayMonth }) => {
  return (
    <div className="weekViewWrapper">
      {[1, 2, 3, 4, 5, 6, 0].map(dayOfWeekVal => {
        const dayEvents = events.filter(event => event.date.dayOfWeek === dayOfWeekVal);
        return (
          <div key={dayOfWeekVal} className="weekdayColumn">
            <div className="dayHeader" >
              <DayHeader dayOfWeekVal={dayOfWeekVal} displayEventModal={displayEventModal}
                displayYear={displayYear} displayMonth={displayMonth} />
            </div>
            <div >
              <DayCardVersion events={dayEvents} condensed={true} displayEventModal={displayEventModal}
                deleteEvent={deleteEvent} />
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
