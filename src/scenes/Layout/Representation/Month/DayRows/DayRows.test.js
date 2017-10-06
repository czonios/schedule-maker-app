import { cellColor, cellClasses } from './DayRows';

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



