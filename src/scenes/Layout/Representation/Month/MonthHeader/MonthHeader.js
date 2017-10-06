import React from 'react';
import { Button, Header } from 'semantic-ui-react';
import './monthHeader.css';

const MonthHeader = (
  { displayMonth, incrementDisplayMonth, decrementDisplayMonth, displayYear, dateService }
) => (
    <div className="centered">
      <Button compact onClick={decrementDisplayMonth}>
        <img src={require('./img/arrow-left.svg')} alt="<" />
      </Button>

      <Header size="small" className="month-year">
        {dateService.monthNamesLong[displayMonth]}
        <span>&#32;</span>
        {displayYear}
        <span>&#32;</span>
      </Header>

      <Button compact onClick={incrementDisplayMonth}>
        <img src={require('./img/arrow-right.svg')} alt=">" />
      </Button>
    </div>
  )

export default MonthHeader;

/*

<Button content='Pause' icon='pause' labelPosition='left' />
    <Button content='Next' icon='right arrow' labelPosition='right' />

*/