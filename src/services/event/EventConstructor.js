import dateService from '../../services/dates/dateService';
import PropTypes from 'prop-types';

/**
 * title: (String) title of the scheduled event
 * desciption: (String) a short description
 * start: (hh:mm) time of start
 * end: (hh:mm) time of end
 * repeated: (Boolean) true or false, whether the event is repeated
 * date: (Date) object for the date
 * notifyBool: (Boolean) true or false, true if notification set
 * notifyTimeBefore: (String) time of notification is start - notifyTimeBefore
 * repdays: (Boolean[] -> object) if repeated is true, days on which to repeat
 * color: (String) color of the grid cell or card
 * tags: (String[]) array of tags for filtering events, e.g. ["study","algorithms"]
 * notes: (object[]) notes for the particular event, array of object {id: id, text: "text"}
 */
class Event {

    constructor(title, description, start, end, repeated, date, notifyBool, notifyTimeBefore, repDays, color, tags, notes) {
        this.title = title;
        this.description = description;
        this.time = {
            start: start,
            end: end
        };
        this.repeated = repeated;
        this.date = {
            year: date.getFullYear(),
            month: date.getMonth(),
            day: date.getDate()
        }
        this.notify = {
            enabled: notifyBool,
            time: notifyTimeBefore//this.time.start - notifyTimeBefore
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

}

Event.propTypes = {
    title: PropTypes.string,
    desciption: PropTypes.string,
    time: PropTypes.objectOf(PropTypes.string, PropTypes.string),
    repeated: PropTypes.bool,
    date: PropTypes.objectOf(Date),
    notify: PropTypes.objectOf(PropTypes.bool, PropTypes.string),
    repdays: PropTypes.objectOf(PropTypes.bool),
    color: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    notes: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number, PropTypes.string))
}

export default Event;