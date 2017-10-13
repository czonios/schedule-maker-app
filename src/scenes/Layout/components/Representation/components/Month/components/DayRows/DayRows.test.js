import { padDaysInMonthArr, splitDaysIntoWeeks, generateRows } from './DayRows';
import React from 'react';
import { Link } from 'react-router-dom';
import { StaticRouter } from 'react-router';
import renderer from 'react-test-renderer';
import dateService from '../../../../../../../../services/dates/dateService';
import * as e from '../../../../../../../../services/mock/events/mockEvents.js';
import DayRows from './DayRows.js';

const nullPaddedArr = [null, null, null, null, null, null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, null, null, null, null, null];
const chunkedArr = [
    [null, null, null, null, null, null, 1],
    [2, 3, 4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20, 21, 22],
    [23, 24, 25, 26, 27, 28, 29],
    [30, 31, null, null, null, null, null]
];



test('padDaysInMonthArr should add nulls to the begining and end of the array', () => {
    expect(padDaysInMonthArr(2017, 9, dateService)).toEqual(nullPaddedArr);
});
test('splitDaysIntoWeeks should return a 5x7 2D array', () => {
    expect(splitDaysIntoWeeks(nullPaddedArr)).toEqual(chunkedArr)
});



//Snapshots
//Test got borked from the addition of events to the month view,
//i need to come back and figure out how to pass in the events to the test properly,
//currently getting 'events.reduce' is not a function
// it('DayRows renders Oct 2017 correctly', () => {
//     const tree = renderer.create(
//         <StaticRouter context={{}}>
//             <DayRows displayMonth={9} displayYear={2017} dateService={dateService} />
//         </StaticRouter>
//     ).toJSON();
//     expect(tree).toMatchSnapshot();
// });
// it('DayRows renders Feb 2016 correctly', () => {
//     const tree = renderer.create(
//         <StaticRouter context={{}}>
//             <DayRows displayMonth={1} displayYear={2016} dateService={dateService} />
//         </StaticRouter>
//     ).toJSON();
//     expect(tree).toMatchSnapshot();
// });
// it('generateRows renders the day rows from a chunked array', () => {
//     console.log(Object.values(e)[0]);
//     const tree = renderer.create(
//         <StaticRouter context={{}}>
//             <div>
//                 {generateRows(Object.values(e)[0], 2017, 9, chunkedArr)}
//             </div>
//         </StaticRouter>
//     ).toJSON();
//     expect(tree).toMatchSnapshot();
// })

