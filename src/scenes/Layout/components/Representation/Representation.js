import React from 'react';
import './representation.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './data/actions';
import Month from './components/Month/Month';
import Week from './components/Week/Week';
// import Day from './Day/Day';
import DayCardVersion from './components/DayCardVersion/DayCardVersion';

import ViewMenu from './components/ViewMenu/ViewMenu';

import ViewHeader from './components/ViewHeader/ViewHeader';
import dateService from '../../../../services/dates/dateService';

const cellColors = [
    "red",
    "orange",
    "yellow",
    "olive",
    "green",
    "blue",
    "violet",
    "purple",
    "pink",
    "brown",
    "black"
];

const Representation = (props) => {
    const { displayYear, displayMonth, displayDay } = props;
    const { view, year, month, day } = props.url.match.params;
    return (
        <div className="representation">
            {/* Could/should be broken out into its own subcomponent */}
            <ViewMenu day={day} month={month} year={year} view={view} />
            <ViewHeader displayMonth={displayMonth} displayYear={displayYear} displayDay={displayDay} dateService={dateService}
                view={view} />
            {chooseView(props)}
        </div>
    );
}
function chooseView({ displayMonth, displayYear, displayDay, incrementDisplayMonth, decrementDisplayMonth, url, displayDayEvents, displayMonthEvents }) {
    //Decide which view to render, based on the URL
    const view = url.match.params.view;
    //don't need the null check for route '/' i think?
    // if (!url.match) return null;
    if (view === 'month') {
        return <Month events={displayMonthEvents} displayMonth={displayMonth} displayYear={displayYear}
            incrementDisplayMonth={incrementDisplayMonth} decrementDisplayMonth={decrementDisplayMonth} />
    } else if (view === 'week') {
        return <Week />
    } else if (view === 'day') {
        // return <Day />
        return <DayCardVersion events={displayDayEvents} />
    }
}

function mapStateToProps(state, ownProps) {
    const { params } = ownProps.url.match;
    // const displayYear, displayMonth, displayDay;
    const [displayYear, displayMonth, displayDay] = [parseInt(params.year, 10), parseInt(params.month, 10) - 1, parseInt(params.day, 10)]
    const allEvents = state.layout.representation.data.events;
    return {
        allEvents,
        displayDayEvents: filterEventsByDay(displayYear, displayMonth, displayDay, allEvents),
        displayMonthEvents: filterEventsByMonth(displayYear, displayMonth, allEvents),
        displayYear,
        displayMonth,
        displayDay,
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
function mapDispatchToProps(dispatch) {
    const { incrementDisplayMonth,
        decrementDisplayMonth } = actions;
    return bindActionCreators({
        incrementDisplayMonth,
        decrementDisplayMonth
    }, dispatch);
};

const propTypes = {
    displayMonth: PropTypes.number.isRequired,
    displayYear: PropTypes.number.isRequired,
    incrementDisplayMonth: PropTypes.func.isRequired,
    decrementDisplayMonth: PropTypes.func.isRequired,
    url: PropTypes.object.isRequired
}
Representation.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Representation);