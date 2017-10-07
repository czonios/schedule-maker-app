import { cellColor, cellClasses, padDaysInMonthArr, splitDaysIntoWeeks, generateRows } from './DayRows';
import React from 'react';
import { Link } from 'react-router-dom';
import { StaticRouter } from 'react-router';
import renderer from 'react-test-renderer';
import dateService from '../../../../.././services/dates/dateService';
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

test('Cell color should be default if there is a day in it', () => {
    expect(cellColor(1)).toBe(undefined);
});

test('Cell color should be gray if there is NO day in that cell', () => {
    expect(cellColor(undefined)).toBe("grey");
});

test('Cell color should be gray if there is NO day in that cell', () => {
    expect(cellColor(-1)).toBe("grey");
});

test('Cell color should be gray if there is NO day in that cell', () => {
    expect(cellColor("asd")).toBe("grey");
});

test('Cell should have no classes if it has a day in it', () => {
    expect(cellClasses(1)).toBe(undefined);
});

test('Cell classes should be appropriate if it DOES NOT have a day in it', () => {
    expect(cellClasses(undefined)).toBe("no-day shadow");
});

test('Cell classes should be appropriate if it DOES NOT have a day in it', () => {
    expect(cellClasses(-1)).toBe("no-day shadow");
});

test('Cell classes should be appropriate if it DOES NOT have a day in it', () => {
    expect(cellClasses("asd")).toBe("no-day shadow");
});

test('padDaysInMonthArr should add nulls to the begining and end of the array', () => {
    expect(padDaysInMonthArr(2017, 9, dateService)).toEqual(nullPaddedArr);
});
test('splitDaysIntoWeeks should return a 5x7 2D array', () => {
    expect(splitDaysIntoWeeks(nullPaddedArr)).toEqual(chunkedArr)
});



//Snapshots
it('DayRows renders Oct 2017 correctly', () => {
    const tree = renderer.create(
        <StaticRouter context={{}}>
            <DayRows displayMonth={9} displayYear={2017} dateService={dateService} />
        </StaticRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
it('DayRows renders Feb 2016 correctly', () => {
    const tree = renderer.create(
        <StaticRouter context={{}}>
            <DayRows displayMonth={1} displayYear={2016} dateService={dateService} />
        </StaticRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
it('generateRows renders the day rows from a chunked array', () => {
    const tree = renderer.create(
        <StaticRouter context={{}}>
            <div>
                {generateRows(2017, 9, chunkedArr)}
            </div>
        </StaticRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
})

