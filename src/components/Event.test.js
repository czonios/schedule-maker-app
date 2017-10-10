import Event from './Event';
import { cellColors } from '../scenes/Layout/components/Representation/Representation';

let e = new Event(
    'study', 
    'clean write my notes to the notebooks', 
    "18:00", 
    "20:30", 
    true, 
    new Date(2017, 9, 8), 
    false, 
    null, 
    [false,false,true,false,false,false,false], 
    "red", 
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
    expect(e.date).toBeInstanceOf(Date);
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

test('Event notify time should not be null if notify is enabled', () => {
    if (e.notify.enabled)
        expect(e.notify.time).not.toBe(null);
});

test('Event repeatOnDay should be an object made of booleans', () => {
    expect(typeof e.repeatOnDay).toBe('object');
    expect(typeof e.repeatOnDay.mon).toBe('boolean');
    expect(typeof e.repeatOnDay.tue).toBe('boolean');
    expect(typeof e.repeatOnDay.wed).toBe('boolean');
    expect(typeof e.repeatOnDay.thu).toBe('boolean');
    expect(typeof e.repeatOnDay.fri).toBe('boolean');
    expect(typeof e.repeatOnDay.sat).toBe('boolean');
    expect(typeof e.repeatOnDay.sun).toBe('boolean');
});

test('Event: all repeatOnDay properties should be false if repeated=false', () => {
    if (!e.repeated) {
        expect(e.repeatOnDay.mon).toBe(false);
        expect(e.repeatOnDay.tue).toBe(false);
        expect(e.repeatOnDay.wed).toBe(false);
        expect(e.repeatOnDay.thu).toBe(false);
        expect(e.repeatOnDay.fri).toBe(false);
        expect(e.repeatOnDay.sat).toBe(false);
        expect(e.repeatOnDay.sun).toBe(false);
    }
});

test('Event: at least one repeatOnDay propertiy should be true if repeated=true', () => {
    if (e.repeated) {
        expect(
            e.repeatOnDay.mon ||
            e.repeatOnDay.tue ||
            e.repeatOnDay.wed ||
            e.repeatOnDay.thu ||
            e.repeatOnDay.fri ||
            e.repeatOnDay.sat ||
            e.repeatOnDay.sun
        ).toBe(true);
    }
});

test('Event: color should be a string', () => {
    expect(typeof e.color).toBe('string');
});

test('Event: color should be one of the valid colors', () => {
    expect(cellColors).toContain(e.color);
});

test('Event: tags should be an array', () => {
    expect(e.tags).toBeInstanceOf(Array);
});

test('Event: tags should be an array of strings', () => {
    for (let i=0; i<e.tags.length; i++) {
        expect(typeof e.tags[i]).toBe('string');
    }
    
});

test('Event: notes should be an array', () => {
    expect(e.notes).toBeInstanceOf(Array);
});

test('Event: notes should be an array of objects', () => {
    for (let i=0; i<e.notes.length; i++) {
        expect(typeof e.notes[i]).toBe('object');
    }
});

test('Event: Each note should have an id property and a text property', () => {
    for (let i=0; i<e.notes.length; i++) {
        expect(e.notes[i]).toHaveProperty('id');
        expect(e.notes[i]).toHaveProperty('text');
    }
});

test('Event: Each note id should be a number', () => {
    for (let i=0; i<e.notes.length; i++) {
        expect(e.notes[i].id).not.toBe(NaN);
    }
});

test('Event: Each note text should be a string', () => {
    for (let i=0; i<e.notes.length; i++) {
        expect(typeof e.notes[i].text).toBe('string');
    }
});

