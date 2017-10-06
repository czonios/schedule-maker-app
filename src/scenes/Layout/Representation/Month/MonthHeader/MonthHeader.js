import React from 'react';
import { Button, Header, Image } from 'semantic-ui-react';
import './monthHeader.css';

const MonthHeader = (
  { displayMonth, incrementDisplayMonth, decrementDisplayMonth, displayYear, dateService }
) => (
    <div className="centered">
      <Button basic compact onClick={decrementDisplayMonth}>
        <Image className="arrow" size="mini" src={require('./img/arrow-left.svg')} alt="<" />
      </Button>

      <Header size="small" color="white" className="month-year">
        {dateService.monthNamesLong[displayMonth]}
        <span>&#32;</span>
        {displayYear}
      </Header>

      <Button basic compact onClick={incrementDisplayMonth}>
        <Image className="arrow" size="mini" src={require('./img/arrow-right.svg')} alt=">" />
      </Button>
    </div>
  )

export default MonthHeader;

/*

<Button content='Pause' icon='pause' labelPosition='left' />
    <Button content='Next' icon='right arrow' labelPosition='right' />

*/