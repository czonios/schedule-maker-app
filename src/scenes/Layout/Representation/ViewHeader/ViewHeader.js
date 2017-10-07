import React from 'react';
import PropTypes from 'prop-types'
import { Button, Image, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './viewHeader.css';


const ViewHeader = ({ view, dateService, displayYear, displayMonth, displayDay }) => {

  return (
    <div className="centered">
      <Link to={urlPrevStr(view, displayYear, displayMonth, displayDay, dateService)} >
        <Button basic compact >
          <Image className="arrow" size="mini" src={require('./img/arrow-left.svg')} alt="<" />
        </Button>
      </Link>

      <Header size="small" className="month-year">
        {generateHeaderText(view, displayYear, displayMonth, displayDay, dateService)}
      </Header>

      <Link to={urlNextStr(view, displayYear, displayMonth, displayDay, dateService)} >
        <Button basic compact >
          <Image className="arrow" size="mini" src={require('./img/arrow-right.svg')} alt=">" />
        </Button>
      </Link>
    </div>
  )
};

function generateHeaderText(view, displayYear, displayMonth, displayDay, dateService) {
  const monthStr = dateService.monthNamesLong[displayMonth];
  //TODO Move dayStr to dateService as a method? Would hide the implementation detail
  //of starting our day indexing on monday instead of sunday
  const dayStr = dateService.dayNamesLong[new Date(displayYear, displayMonth, displayDay).getDay() - 1] || 'Sunday';
  if (view === 'month') {
    return `${monthStr} ${displayYear}`
  } else if (view === 'week') {
    const oneWeekFromDay = new Date(displayYear, displayMonth, displayDay + 6);
    return `${displayDay} ${monthStr} to ${oneWeekFromDay.getDate()} ${dateService.monthNamesLong[oneWeekFromDay.getMonth()]}`;
  } else if (view === 'day') {
    return `${dayStr}, ${monthStr} ${displayDay} ${displayYear}`
  }
}

//These two functin could be merged into one, and then passed in a flag for 'next' or 'prev'
//Not doing that for now, I think it'll make testing them harder, and might result in a big messy function
function urlPrevStr(view, displayYear, displayMonth, displayDay, dateService) {
  let yearStr, monthStr, dayStr;
  if (view === 'month') {
    //Paths/links to the next/prev month need to be dynamically generated
    const prevMonthObj = dateService.getPrevMonth(displayYear, displayMonth);
    [yearStr, monthStr] = [prevMonthObj.year, prevMonthObj.month]
    dayStr = displayDay;
  } else if (view === 'week') {
    const oneWeekBeforeDay = new Date(displayYear, displayMonth, displayDay - 6);
    [yearStr, monthStr, dayStr] = [oneWeekBeforeDay.getFullYear(), oneWeekBeforeDay.getMonth(), oneWeekBeforeDay.getDate()];
  } else if (view === 'day') {
    const prevDayObj = dateService.getPrevDay(displayYear, displayMonth, displayDay);
    [yearStr, monthStr, dayStr] = [prevDayObj.year, prevDayObj.month, prevDayObj.day];
  }
  return `/${view}/${yearStr}/${monthStr + 1}/${dayStr}`;
}
function urlNextStr(view, displayYear, displayMonth, displayDay, dateService) {
  let yearStr, monthStr, dayStr;
  if (view === 'month') {
    const nextMonthObj = dateService.getNextMonth(displayYear, displayMonth);
    [yearStr, monthStr] = [nextMonthObj.year, nextMonthObj.month]
    dayStr = displayDay;
  } else if (view === 'week') {
    const oneWeekFromDay = new Date(displayYear, displayMonth, displayDay + 6);
    [yearStr, monthStr, dayStr] = [oneWeekFromDay.getFullYear(), oneWeekFromDay.getMonth(), oneWeekFromDay.getDate()];
  } else if (view === 'day') {
    const nextDayObj = dateService.getNextDay(displayYear, displayMonth, displayDay);
    [yearStr, monthStr, dayStr] = [nextDayObj.year, nextDayObj.month, nextDayObj.day];
  }

  return `/${view}/${yearStr}/${monthStr + 1}/${dayStr}`;
}

const propTypes = {
  view: PropTypes.string.isRequired,
  dateService: PropTypes.object.isRequired,
  displayYear: PropTypes.number.isRequired,
  displayMonth: PropTypes.number.isRequired,
  displayDay: PropTypes.number.isRequired,
};

const defaultProps = {};
ViewHeader.propTypes = propTypes;

ViewHeader.defaultProps = defaultProps;

export default ViewHeader;
