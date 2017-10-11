import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'semantic-ui-react';
const propTypes = {};

const defaultProps = {};

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Form>
        <Form.Field control={Input} label="Tile" />
      </Form>
    );
  }
}

EventForm.propTypes = propTypes;

EventForm.defaultProps = defaultProps;

export default EventForm;
