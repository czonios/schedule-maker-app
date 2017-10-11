import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { displayEventModal, dismissEventModal } from '../../.././data/actions';

const propTypes = {};

const defaultProps = {};

class EventModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { eventModal, dismissEventModal } = this.props;
    return (
      <Modal open={eventModal} closeIcon dimmer="blurring" onClose={dismissEventModal}>
        <Modal.Header>
          EventModal
        </Modal.Header>
      </Modal>
    );
  }
}

EventModal.propTypes = propTypes;

EventModal.defaultProps = defaultProps;

const mapStateToProps = state => {
  const { UI } = state;
  return {
    eventModal: UI.eventModal
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({
    displayEventModal,
    dismissEventModal
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EventModal);

