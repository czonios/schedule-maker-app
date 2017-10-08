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