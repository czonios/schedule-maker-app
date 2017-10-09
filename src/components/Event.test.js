import Event from './Event';

let e = new Event(
    'study', 
    'clean write my notes to the notebooks', 
    "18:00", 
    "20:30", 
    false, 
    new Date(2017, 9, 8), 
    false, 
    null, 
    [false,false,false,false,false,false], 
    "white", 
    [
        "study", 
        "university", 
        "computational-theory"
    ], 
    [
        { 
            id: 0,
            text: "Have to bro, cmon"
        },
        {
            id: 1,
            text: "testnotesnotesnotes"
        }
    ]
);

test('created object is actually Event', () => {
    expect(e).toBeInstanceOf(Event);
});

test('Event time is an object holding a string for start and a string for end time', () => {
    expect(typeof e.time).toBe('object');
    expect(typeof e.time.start).toBe('string');
    expect(typeof e.time.end).toBe('string');
});

test('Event should have a string title', () => {
    expect(typeof e.title).toBe('string');
});

test('Event should optionally have a string description', () => {
    expect(typeof e.description).toBe('string' || undefined);
});

test('Event should have a repeated field being true or false', () => {
    expect(typeof e.repeated).toBe('boolean');
});

test('Event date should be an object holding the Date in various formats', () => {
    expect(typeof e.date).toBe('object');
    expect(typeof e.date.dateStr).toBe('string');
    expect(typeof e.date.year).toBe('number');
    expect(typeof e.date.month).toBe('number');
    expect(typeof e.date.monthStr).toBe('string');
    expect(typeof e.date.day).toBe('number');
    expect(typeof e.date.dayStr).toBe('string');
});

test('Event date month should be 0-11', () => {
    expect(e.date.month).toBeGreaterThanOrEqual(0);
    expect(e.date.month).toBeLessThanOrEqual(11);
});

test('Event date day should be 1-31', () => {
    expect(e.date.month).toBeGreaterThanOrEqual(1);
    expect(e.date.month).toBeLessThanOrEqual(31);
});

test('Event notify should be an object holding a bool and an optional string', () => {
    expect(typeof e.notify).toBe('object');
    expect(typeof e.notify.enabled).toBe('boolean');
    //expect(typeof e.notify.time).toBe('string');
});

test('Event notify time should be null if notify not enabled', () => {
    if (!e.notify.enabled)
        expect(e.notify.time).toBe(null);
});



