import React from 'react';
import PropTypes from 'prop-types'
import { Button, Image, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './viewHeader.css';

const propTypes = {
  view: PropTypes.string.isRequired,
  dateService: PropTypes.object.isRequired,
  displayYear: PropTypes.number.isRequired,
  displayMonth: PropTypes.number.isRequired,
  displayDay: PropTypes.number.isRequired,

};

const defaultProps = {};

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
        {/* {dateService.monthNamesLong[displayMonth]}
        <span>&#32;</span>
        {displayYear} */}
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
  //Our indexing is causing complexity here, with the +1 -1 stuff
  //JS indexes Sunday to 0, we're using Monday as 0
  //JS indexes months started at 0, we're using 1
  const monthStr = dateService.monthNamesLong[displayMonth];
  const dayStr = dateService.dayNamesLong[new Date(displayYear, displayMonth, displayDay).getDay() - 1] || 'Sunday';
  console.log(displayYear, displayMonth, displayDay);
  console.log(new Date(displayYear, displayMonth, displayDay));
  if (view === 'month') {
    return `${monthStr} ${displayYear}`
  } else if (view === 'week') {
    return `week`
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
  }
  return `/${view}/${yearStr}/${monthStr + 1}/${dayStr}`;
}
function urlNextStr(view, displayYear, displayMonth, displayDay, dateService) {
  let yearStr, monthStr, dayStr;
  if (view === 'month') {
    const nextMonthObj = dateService.getNextMonth(displayYear, displayMonth);
    [yearStr, monthStr] = [nextMonthObj.year, nextMonthObj.month]
    dayStr = displayDay;
  }
  return `/${view}/${yearStr}/${monthStr + 1}/${dayStr}`;
}

ViewHeader.propTypes = propTypes;

ViewHeader.defaultProps = defaultProps;

export default ViewHeader;
