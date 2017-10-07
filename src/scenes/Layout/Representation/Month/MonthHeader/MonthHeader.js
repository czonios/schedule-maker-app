import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Image } from 'semantic-ui-react';
import './monthHeader.css';

const MonthHeader = (
  { displayMonth, incrementDisplayMonth, decrementDisplayMonth, displayYear, dateService }
) => {
  //Paths/links to the next/prev month need to be dynamically generated
  const nextMonthObj = dateService.getNextMonth(displayYear, displayMonth);
  const prevMonthObj = dateService.getPrevMonth(displayYear, displayMonth);
  const [prevMonthsYear, prevMonth] = [prevMonthObj.year, prevMonthObj.month]
  const [nextMonthsYear, nextMonth] = [nextMonthObj.year, nextMonthObj.month]

  return (
    <div className="centered">
      <Link to={`/month/${prevMonthsYear}/${prevMonth}/1`} >
        <Button basic compact >
          <Image className="arrow" size="mini" src={require('./img/arrow-left.svg')} alt="<" />
        </Button>
      </Link>

      <Header size="small" className="month-year">
        {dateService.monthNamesLong[displayMonth]}
        <span>&#32;</span>
        {displayYear}
      </Header>

      <Link to={`/month/${nextMonthsYear}/${nextMonth}/1`} >
        <Button basic compact >
          <Image className="arrow" size="mini" src={require('./img/arrow-right.svg')} alt=">" />
        </Button>
      </Link>
    </div>
  )
}

export default MonthHeader;

/*

<Button content='Pause' icon='pause' labelPosition='left' />
    <Button content='Next' icon='right arrow' labelPosition='right' />

*/