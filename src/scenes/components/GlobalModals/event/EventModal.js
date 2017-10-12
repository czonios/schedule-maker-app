import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { displayEventModal, dismissEventModal, submitEditedEvent } from '../../../.././data/actions';
import EventForm from './EventForm';

const propTypes = {
  eventModal: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]).isRequired,
  eventModalData: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object
  ]).isRequired,
  dismissEventModal: PropTypes.func.isRequired,
  submitEditedEvent: PropTypes.func.isRequired
};

const defaultProps = {};

class EventModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { eventModal, dismissEventModal, eventModalData, submitEditedEvent } = this.props;
    return (
      <Modal open={eventModal ? true : false} closeIcon dimmer="blurring" onClose={dismissEventModal}>
        <Modal.Header>
          Edit Event
        </Modal.Header>
        <Modal.Content>
          <EventForm eventModalData={eventModalData} submitEditedEvent={submitEditedEvent}
            dismissEventModal={dismissEventModal} />
        </Modal.Content>
      </Modal>
    );
  }
}

EventModal.propTypes = propTypes;

EventModal.defaultProps = defaultProps;

const mapStateToProps = state => {
  const { UI } = state;
  const eventModal = UI.eventModal;
  return {
    eventModal,
    eventModalData: state.layout.representation.data.events.byId[eventModal] || false
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({
    displayEventModal,
    dismissEventModal,
    submitEditedEvent
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EventModal);

