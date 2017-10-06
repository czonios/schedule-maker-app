import { cellColor, cellClasses } from './DayRows';
import React from 'react';
import renderer from 'react-test-renderer';
import dateService from '../../../../.././services/dates/dateService';
import DayRows from './DayRows.js';

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

it('renders Oct 2017 correctly', () => {
    const tree = renderer.create(
        <DayRows displayMonth={9} displayYear={2017} dateService={dateService} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders Feb 2016 correctly', () => {
    const tree = renderer.create(
        <DayRows displayMonth={1} displayYear={2016} dateService={dateService} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
})
