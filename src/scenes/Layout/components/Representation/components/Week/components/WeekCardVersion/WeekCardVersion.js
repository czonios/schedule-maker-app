import React from 'react';
import PropTypes from 'prop-types';
import DayCardVersion from '../../.././DayCardVersion/DayCardVersion.js'
import HoverableIcon from '../../../../../../.././components/HoverableIcon/HoverableIcon';
import dateService from '../../../../../../../../services/dates/dateService';
import { Icon, Divider } from 'semantic-ui-react';

import './WeekCardVersion.css';
import DayHeader from './DayHeader/DayHeader';

const propTypes = {
  events: PropTypes.array.isRequired,
  displayEventModal: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  displayYear: PropTypes.number.isRequired,
  displayMonth: PropTypes.number.isRequired,
  displayDay: PropTypes.number.isRequired,
};

const defaultProps = {};

const WeekCardVersion = ({ events, displayEventModal, deleteEvent, displayYear, displayMonth,
  displayDay }) => {

  return (
    <div className="weekViewWrapper">
      {[1, 2, 3, 4].map(dayOfWeekVal => {
        const dayEvents = events.filter(event => event.date.dayOfWeek === dayOfWeekVal);
        return (
          <div key={dayOfWeekVal} className="weekdayColumn">
            <div className="dayHeader" >
              <DayHeader dayOfWeekVal={dayOfWeekVal} displayEventModal={displayEventModal}
                displayYear={displayYear} displayMonth={displayMonth} displayDay={displayDay}
              />
              <Divider />
            </div>
            <div className="add-event clickable">
              <HoverableIcon name="add" onClickCb={displayEventModal} show={true}
                cbArgs={{
                  year: displayYear, month: displayMonth,
                  day: calculateDay(displayYear, displayMonth, displayDay, dayOfWeekVal)
                }} />
              <Divider />
            </div>
            <div>
              <DayCardVersion events={dayEvents} condensed={true} displayEventModal={displayEventModal}
                deleteEvent={deleteEvent} />
            </div>
          </div>
        )
      })}
      <div className="break">
        <br />
      </div>
      {[5, 6, 0].map(dayOfWeekVal => {
        const dayEvents = events.filter(event => event.date.dayOfWeek === dayOfWeekVal);
        return (
          <div key={dayOfWeekVal} className="weekdayColumn">
            <div className="dayHeader" >
              <DayHeader dayOfWeekVal={dayOfWeekVal} displayEventModal={displayEventModal}
                displayYear={displayYear} displayMonth={displayMonth} displayDay={displayDay}
              />
              <Divider />
            </div>
            <div className="add-event clickable">
              <HoverableIcon name="add" onClickCb={displayEventModal} show={true}
                cbArgs={{
                  year: displayYear, month: displayMonth,
                  day: calculateDay(displayYear, displayMonth, displayDay, dayOfWeekVal)
                }} />
              <Divider />
            </div>
            <div>
              <DayCardVersion events={dayEvents} condensed={true} displayEventModal={displayEventModal}
                deleteEvent={deleteEvent} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

const calculateDay = (year, month, day, dayOfWeekVal) => {
  return dateService.getFirstMondayPreviousOrEqualToDay(year, month, day).day
    + (dayOfWeekVal === 0 ? 6 : dayOfWeekVal - 1);
}

WeekCardVersion.propTypes = propTypes;

WeekCardVersion.defaultProps = defaultProps;

export default WeekCardVersion;
