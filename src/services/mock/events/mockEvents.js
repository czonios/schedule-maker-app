import Event from '../.././event/EventConstructor';

//I'm now using these for mocking in tests of timeService;
//If you want to experiment with different shapes for out mock events, start another file
//like mockEventsV2 or whatever, and write them there, and import them into src/Representation/data/reducer.js
//to use as the default state and get them loaded up into the redux store
export const mockEvent1 = new Event(
  'study',
  'clean write my notes to the notebooks',
  "18:00",
  "19:45",
  false,
  new Date(2017, 9, 8),
  false,
  null,
  [false, false, false, false, false, false],
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

export const mockEvent2 = {

  title: "mockEvent2",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
  time: {
    start: '07:15:00',
    end: '09:45:00'
  },
  repeated: false,
  date: {
    //console.log(new Date().toDateString())
    dateString: "Fri Oct 06 2017",
    year: 2017,
    month: 9,
    monthString: 'Oct',
    day: 6,
    dayOfWeek: 5,
    dayOfWeekString: "Fri",
  },
  notify: {
    enable: false,
    hoursBefore: 0.5
  },
  days: {
    mon: false,
    tue: false,
    wed: false,
    thu: false,
    fri: false,
    sat: false,
    sun: false
  },
  color: "",
  tags: [
    "",
    ""
  ],
  notes: [
    {
      id: 0,
      text: "",
    },
    {
      id: 1,
      text: "",
    }

  ]

}
export const mockEvent3 = {

  title: "mockEvent3",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
  time: {
    start: '17:45:00',
    end: '19:00:00'
  },
  repeated: false,

  date: {
    //console.log(new Date().toDateString())
    dateString: "Fri Oct 06 2017",
    year: 2017,
    month: 9,
    monthString: 'Oct',
    day: 6,
    dayOfWeek: 5,
    dayOfWeekString: "Fri",
  },
  notify: {
    enable: false,
    hoursBefore: 0.5
  },
  days: {
    mon: false,
    tue: false,
    wed: false,
    thu: false,
    fri: false,
    sat: false,
    sun: false
  },
  color: "",
  tags: [
    "",
    ""
  ],
  notes: [
    {
      id: 0,
      text: "",
    },
    {
      id: 1,
      text: "",
    }

  ]

}
export const mockEvent4 = {

  title: "mockEvent4",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
  time: {
    start: '12:42:00',
    end: '14:09:00'
  },
  repeated: false,
  date: {
    //console.log(new Date().toDateString())
    dateString: "Wed Oct 04 2017",
    year: 2017,
    month: 9,
    monthString: 'Oct',
    day: 4,
    dayOfWeek: 3,
    dayOfWeekString: "Wed",
  },
  notify: {
    enable: false,
    hoursBefore: 0.5
  },
  days: {
    mon: false,
    tue: false,
    wed: false,
    thu: false,
    fri: false,
    sat: false,
    sun: false
  },
  color: "",
  tags: [
    "",
    ""
  ],
  notes: [
    {
      id: 0,
      text: "",
    },
    {
      id: 1,
      text: "",
    }

  ]

}
export const mockEvent5 = {

  title: "mockEvent5",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
  time: {
    start: '07:32:00',
    end: '09:19:00'
  },
  repeated: false,
  date: {
    //console.log(new Date().toDateString())
    dateString: "Wed Oct 04 2017",
    year: 2017,
    month: 9,
    monthString: 'Oct',
    day: 4,
    dayOfWeek: 3,
    dayOfWeekString: "Wed",
  },
  notify: {
    enable: false,
    hoursBefore: 0.5
  },
  days: {
    mon: false,
    tue: false,
    wed: false,
    thu: false,
    fri: false,
    sat: false,
    sun: false
  },
  color: "",
  tags: [
    "",
    ""
  ],
  notes: [
    {
      id: 0,
      text: "",
    },
    {
      id: 1,
      text: "",
    }

  ]

}
export const mockEvent6 = {

  title: "mockEvent6",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
  time: {
    start: '02:42:00',
    end: '03:09:00'
  },
  repeated: false,
  date: {
    //console.log(new Date().toDateString())
    dateString: "Wed Oct 04 2017",
    year: 2017,
    month: 9,
    monthString: 'Oct',
    day: 4,
    dayOfWeek: 3,
    dayOfWeekString: "Wed",
  },
  notify: {
    enable: false,
    hoursBefore: 0.5
  },
  days: {
    mon: false,
    tue: false,
    wed: false,
    thu: false,
    fri: false,
    sat: false,
    sun: false
  },
  color: "",
  tags: [
    "",
    ""
  ],
  notes: [
    {
      id: 0,
      text: "",
    },
    {
      id: 1,
      text: "",
    }

  ]

}
export const mockEvent7 = {

  title: "mockEvent7",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
  time: {
    start: '12:57:00',
    end: '13:19:00'
  },
  repeated: false,
  date: {
    //console.log(new Date().toDateString())
    dateString: "Wed Oct 04 2017",
    year: 2017,
    month: 9,
    monthString: 'Oct',
    day: 4,
    dayOfWeek: 3,
    dayOfWeekString: "Wed",
  },
  notify: {
    enable: false,
    hoursBefore: 0.5
  },
  days: {
    mon: false,
    tue: false,
    wed: false,
    thu: false,
    fri: false,
    sat: false,
    sun: false
  },
  color: "",
  tags: [
    "",
    ""
  ],
  notes: [
    {
      id: 0,
      text: "",
    },
    {
      id: 1,
      text: "",
    }

  ]

}