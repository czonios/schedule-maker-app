import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, TextArea } from 'semantic-ui-react';

const propTypes = {
  eventModalData: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object
  ]).isRequired,
  submitEditedEvent: PropTypes.func.isRequired
};

const defaultProps = {};

class EventForm extends Component {
  constructor(props) {
    super(props);
    const { eventModalData } = props;
    const { date, description, id, notes, repeated, tags, time, title } = eventModalData;
    // const { year, month, day, dayOfWeek } = date;
    // const { state, end } = time;
    this.state = {
      date,
      description,
      id,
      notes,
      repeated,
      tags,
      time,
      title
    };
  }

  render() {
    const { date, description, id, notes, repeated, tags, time, title } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field name='title' control={Input} label="Title" value={title}
          onChange={this.handleChange} />
        <Form.Field name='description' control={TextArea} label="Description" value={description}
          onChange={this.handleChange} />
        <Form.Field name='start' control={Input} label="Start Time" value={time.start}
          onChange={this.handleTimeChange} />
        <Form.Field name='end' control={Input} label="End Time" value={time.end}
          onChange={this.handleTimeChange} />
        <Form.Button content="Save Changes" />
        {/* <Form.Field name='title' control={Input} label="Title" value={title} onChange={this.handleChange} /> */}
      </Form>
    );
  }
  handleChange = (e, { name, value }) => this.setState({ [name]: value });
  handleTimeChange = (e, { name, value }) => this.setState({ time: { ...this.state.time, [name]: value } });
  handleSubmit = () => this.props.submitEditedEvent(this.state);
}

EventForm.propTypes = propTypes;

EventForm.defaultProps = defaultProps;

export default EventForm;
