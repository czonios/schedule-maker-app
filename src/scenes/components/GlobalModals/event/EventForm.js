/* eslint no-unused-vars: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, TextArea, Message } from 'semantic-ui-react';
import { generateUniqueId } from '../../../.././services/event/UniqueEventId';
import validation from '../../../.././services/form/validation';

const propTypes = {
  eventModalData: PropTypes.object.isRequired,
  submitEditedEvent: PropTypes.func.isRequired,
  dismissEventModal: PropTypes.func.isRequired,
};

const defaultProps = {};

class EventForm extends Component {
  constructor(props) {
    super(props);
    const { eventModalData, isNewEvent } = props;
    const { date, description, id, notes, repeated, tags, time, title } = eventModalData;
    this.state = {
      // error form:
      //{field: 'year', 'message': 'Year must be bewteen 2017 and 2022'}
      errors: [],
      event: {
        date: {
          ...date,
          //Add one to the month, for display purposes
          month: date.month + 1
        },
        description,
        id: id || generateUniqueId(),
        notes,
        repeated,
        tags,
        time: time || {
          start: '',
          end: ''
        },
        title
      }
    }
  }

  render() {
    const { handleChange, handleDateChange, handleTimeChange, handleSubmit,
      formHasErrors, fieldHasError, handleDismiss, runValidators, fieldNotEmpty } = this;
    const { dismissEventModal, isNewEvent } = this.props;
    // if (isNewEvent === false) {
    const { date, description, id, notes, repeated, tags, time, title } = this.state.event;
    // }
    return (
      <Form onSubmit={handleSubmit} error={formHasErrors()}>
        <Message error >
          <Message.List>Invalid Fields
          {this.state.errors.map((error, i) => (
              <Message.Item key={i}>
                {error.message}
              </Message.Item>
            ))}
          </Message.List>
        </Message>
        <Form.Field required name='title' control={Input} label="Title" value={title}
          onChange={handleChange} />
        <Form.Field name='description' control={TextArea} label="Description"
          value={description} onChange={handleChange} />
        <Form.Group>
          <Form.Field required name='start' control={Input} label="Start Time"
            value={time.start} onChange={handleTimeChange} placeholder="9:00"
            error={fieldHasError('start')}
            onBlur={runValidators} />
          <Form.Field required name='end' control={Input} label="End Time"
            placeholder="17:00" value={time.end} onChange={handleTimeChange}
            error={fieldHasError('end')}
            onBlur={runValidators} />
        </Form.Group>
        <Form.Group>
          <Form.Field required name='day' control={Input} label="Day" value={date.day}
            onChange={handleDateChange} error={fieldHasError('day')} onBlur={runValidators}
            placeholder="14" />
          <Form.Field required name='month' control={Input} label="Month" value={date.month}
            onChange={handleDateChange} error={fieldHasError('month')} onBlur={runValidators}
            placeholder="10" />
          <Form.Field required name='year' control={Input} label="Year" value={date.year}
            onChange={handleDateChange} error={fieldHasError('year')} onBlur={runValidators}
            placeholder="2017" />
        </Form.Group>
        <Form.Group>
          <Form.Button color={formHasErrors() ? 'grey' : 'green'} content="Save Changes" />
          <Form.Button onClick={handleDismiss} color="red" content="Discard Changes" />
        </Form.Group>
      </Form>
    );
  }
  handleChange = (e, { name, value }) => this.setState({
    event: {
      ...this.state.event,
      [name]: value
    }
  });
  handleTimeChange = (e, { name, value }) => this.setState({
    event: {
      ...this.state.event,
      time: {
        ...this.state.event.time, [name]: value
      }
    }
  });
  handleDateChange = (e, { name, value }) => {
    this.setState({
      event: {
        ...this.state.event,
        date: {
          ...this.state.event.date,
          [name]: value
        }
      }
    });
  }
  handleSubmit = (e) => {
    if (this.formHasErrors()) { //dont submit if there are errors
      e.preventDefault();
      return;
    }
    //ParseInt the date fields
    const { year, month, day } = Object.entries(this.state.event.date).reduce((accum, entry) => {
      accum[entry[0]] = parseInt(entry[1], 10);
      return accum;
    }, {});
    console.log(year, month, day);
    //Derive and set day of week, then dispatch the submit action; dispatch 
    //has to be in the setState callback, because setting state is async
    this.setState({
      event: {
        ...this.state.event,
        date: {
          year,
          // Decrement the month, since we're converting back from a display value with 1 indexing
          month: month - 1,
          day,
          dayOfWeek: new Date(year, month - 1, day).getDay(),
        }
      }
    }, () => {
      this.props.submitEditedEvent(this.state.event);
      this.props.dismissEventModal();
    })
  }
  handleDismiss = (e) => {
    e.preventDefault();
    this.props.dismissEventModal();
  }
  formHasErrors = () => {
    return this.state.errors.length > 0;
  }
  fieldHasError = (fieldName) => {
    return this.state.errors.some(event => event.field === fieldName);
  }

  runValidators = () => {
    const { year, month, day } = Object.entries(this.state.event.date).reduce((accum, entry) => {
      accum[entry[0]] = parseInt(entry[1], 10);
      return accum;
    }, {});
    const { start, end } = this.state.event.time;
    // console.log('running validators');
    let errors = [];

    //Don't run a validation if a relevant field is empty; the 'required'
    //attribute on the element itself takes care of empty fields
    if (year && month && day) errors = errors.concat(
      validation.checkDate(year, month, day)
    );
    if (start && end) errors = errors.concat(
      validation.checkTime(start, end)
    );
    console.log('errors found after validation:', errors);
    this.setState({
      errors
    })
  }
}

EventForm.propTypes = propTypes;

EventForm.defaultProps = defaultProps;

export default EventForm;
