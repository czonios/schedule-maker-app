import dateService from '../services/dates/dateService';

class Event {

    constructor (title, description, start, end, repeated, date, notifyBool, notifyTimeBefore, repDays, color, tags, notes) {
        this.title = title;
        this.description = description;
        this.time = {
            start: start,
            end: end
        };
        this.repeated = repeated;
        this.date = {
            dateStr: date.toString(),
            year: date.getFullYear(),
            month: date.getMonth(),
            monthString: dateService.getMonthStr(this.date.month),
            day: this.convertDay(date.getDay()),
            dayStr: dateService.getDayStr(this.date.day)
        };
        this.notify = {
            enabled: notifyBool,
            time: this.time.start - notifyTimeBefore
        };
        this.repeatOnDay = {
            mon: repDays[0],
            tue: repDays[1],
            wed: repDays[2],
            thu: repDays[3],
            fri: repDays[4],
            sat: repDays[5],
            sun: repDays[6]
        };
        this.color = color;
        this.tags = tags; //array
        this.notes = notes; //array of objects {id: x, text: "y"}

    }

    //converts day to mon=0 from sun=0
    convertDay(dayPrev) {
        if (day === 0)
            day = 7;
        return day-1;
    }

}