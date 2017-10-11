import React from 'react';
import './representation.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleGridOrCardDisplay, displayEventModal, deleteEvent } from '../../../.././data/actions';
import Month from './components/Month/Month';
import Week from './components/Week/Week';
import WeekCardVersion from './components/Week/components/WeekCardVersion/WeekCardVersion';
import Day from './components/Day/Day';
import DayCardVersion from './components/DayCardVersion/DayCardVersion';

import ViewMenu from './components/ViewMenu/ViewMenu';

import ViewHeader from './components/ViewHeader/ViewHeader';
import dateService from '../../../../services/dates/dateService';

const Representation = (props) => {
    const { displayYear, displayMonth, displayDay, gridOrCardDisplay, toggleGridOrCardDisplay } = props;
    const { view, year, month, day } = props.url.match.params;
    return (
        <div className="representation">
            {/* Could/should be broken out into its own subcomponent */}
            <ViewMenu day={day} month={month} year={year} view={view}
                gridOrCardDisplay={gridOrCardDisplay} toggleGridOrCardDisplay={toggleGridOrCardDisplay} />
            <ViewHeader displayMonth={displayMonth} displayYear={displayYear} displayDay={displayDay} dateService={dateService}
                view={view} />
            {chooseView(props)}
        </div>
    );
}
function chooseView({ displayMonth, displayYear, displayDay, url, displayDayEvents,
    displayMonthEvents, displayWeekEvents, gridOrCardDisplay, displayEventModal,
    deleteEvent }) {
    //Decide which view to render, based on the URL
    const view = url.match.params.view;
    //don't need the null check for route '/' i think?
    // if (!url.match) return null;
    if (view === 'month') {
        return <Month events={displayMonthEvents} displayMonth={displayMonth} displayYear={displayYear} />
    } else if (view === 'week') {
        // console.log(toggleGridOrCardDisplay);
        // return <Week events={displayWeekEvents} />
        // return <WeekCardVersion events={displayWeekEvents} />
        return gridOrCardDisplay === 'grid'
            ? <Week events={displayWeekEvents} />
            : <WeekCardVersion events={displayWeekEvents} displayEventModal={displayEventModal} />
    } else if (view === 'day') {
        // return <Day />
        // return <DayCardVersion events={displayDayEvents} />
        return gridOrCardDisplay === 'grid'
            ? <Day />
            : <DayCardVersion events={displayDayEvents} displayEventModal={displayEventModal}
                deleteEvent={deleteEvent} />
    }
}

function mapStateToProps(state, ownProps) {
    const { params } = ownProps.url.match;
    // const displayYear, displayMonth, displayDay;
    const [displayYear, displayMonth, displayDay] = [parseInt(params.year, 10), parseInt(params.month, 10) - 1, parseInt(params.day, 10)]
    // @TEMP
    // After normalizing the event data shape in the redux store, this transformation should
    // be unnecesary. Come back and delete it and refactor the filtering functions
    // after the Event's shape is finally settled (for perf reasons).
    const allEvents = Object.values(state.layout.representation.data.events.byId);
    return {
        allEvents,
        displayDayEvents: filterEventsByDay(displayYear, displayMonth, displayDay, allEvents),
        displayWeekEvents: filterEventsByWeek(displayYear, displayMonth, displayDay, allEvents),
        displayMonthEvents: filterEventsByMonth(displayYear, displayMonth, allEvents),
        displayYear,
        displayMonth,
        displayDay,
        dayOfWeekAs0: state.UI.dayOfWeekAs0,
        gridOrCardDisplay: state.UI.gridOrCardDisplay
    }
}
function filterEventsByDay(year, month, day, events) {
    return Object.values(events).filter(event => {
        const { date } = event;
        return date.year === year
            && date.month === month
            && date.day === day;
    })
}
function filterEventsByMonth(year, month, events) {
    return Object.values(events).filter(event => {
        const { date } = event;
        return date.year === year
            && date.month === month
    })
}
//TODO Make this work for dates in the last week of a month and for the
//last week of december (multiple years can be valid)
//Week is defined as from the monday before or on the event day,
//through to the next sunday
function filterEventsByWeek(year, month, day, events) {
    // const daysInMonth = dateService.getDaysCountInMonth(year, month, day);
    // const nextMonth = new Date(year, month + 1, day).getMonth();
    // const validDaysDict = Array.from({ length: 12 });
    // const daysBeforeMonthEnd = daysInMonth - day;
    const monday = dateService.getFirstMondayPreviousOrEqualToDay(year, month, day);
    // If the day falls within the first week of the month, before a monday,

    // Elsee
    return Object.values(events).filter(event => {
        const { date } = event;
        return date.year === year
            && date.month === month
            && date.day >= monday.day
            && date.day <= monday.day + 6
    })
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        toggleGridOrCardDisplay,
        displayEventModal,
        deleteEvent
    }, dispatch);
};

const propTypes = {
    displayMonth: PropTypes.number.isRequired,
    displayYear: PropTypes.number.isRequired,
    url: PropTypes.object.isRequired,
    gridOrCardDisplay: PropTypes.string.isRequired,
    displayEventModal: PropTypes.func.isRequired,
    deleteEvent: PropTypes.func.isRequired
}
Representation.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Representation);