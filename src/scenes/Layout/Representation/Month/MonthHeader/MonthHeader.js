import React from 'react';
import './monthHeader.css';

const MonthHeader = (
  { displayMonth, incrementDisplayMonth, decrementDisplayMonth, displayYear, dateService }
) => (
    <div>
      <button onClick={decrementDisplayMonth}>prev</button>
      {dateService.monthNamesLong[displayMonth]}
      {displayYear}
      <button onClick={incrementDisplayMonth}>next</button>
    </div>
  )

export default MonthHeader;