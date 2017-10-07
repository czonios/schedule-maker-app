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
  //Paths/links to the next/prev month need to be dynamically generated
  const nextMonthObj = dateService.getNextMonth(displayYear, displayMonth);
  const prevMonthObj = dateService.getPrevMonth(displayYear, displayMonth);
  const [prevMonthsYear, prevMonth] = [prevMonthObj.year, prevMonthObj.month]
  const [nextMonthsYear, nextMonth] = [nextMonthObj.year, nextMonthObj.month]

  return (
    <div className="centered">
      <Link to={`/${view}/${prevMonthsYear}/${prevMonth + 1}/1`} >
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

      <Link to={`/${view}/${nextMonthsYear}/${nextMonth + 1}/1`} >
        <Button basic compact >
          <Image className="arrow" size="mini" src={require('./img/arrow-right.svg')} alt=">" />
        </Button>
      </Link>
    </div>
  )
};

function generateHeaderText(view, displayYear, displayMonth, displayDay, dateService) {
  const monthStr = dateService.monthNamesLong[displayMonth];
  const dayStr = dateService.dayNamesLong[new Date(displayYear, displayMonth + 1, displayDay).getDay()];
  console.log(displayYear, displayMonth + 1, displayDay);
  console.log(new Date(displayYear, displayMonth + 1, displayDay));
  if (view === 'month') {
    return `${monthStr} ${displayYear}`
  } else if (view === 'week') {
    return `week`
  } else if (view === 'day') {
    return `${dayStr}, ${monthStr} 1st ${displayYear}`
  }
}

ViewHeader.propTypes = propTypes;

ViewHeader.defaultProps = defaultProps;

export default ViewHeader;
