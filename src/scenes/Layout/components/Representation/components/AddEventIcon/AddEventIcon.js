import React from 'react';
import PropTypes from 'prop-types'
import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createNewEvent, displayEventModal } from '../../../../../.././data/actions';

const propTypes = {
  createNewEvent: PropTypes.func.isRequired,
  displayEventModal: PropTypes.func.isRequired
};

const defaultProps = {};

const AddEventIcon = ({ createNewEvent, displayEventModal }) => (
  <div>
    <Icon link name="add" onClick={handleClick(displayEventModal)} />
    {/* <Icon link name="add" onClick={() => displayEventModal('NEW_EVENT')} /> */}
  </div>
);

// Should handle callbacks like this rather than inline on the onClick (for perf), 
// but is there a better way to do it?
const handleClick = (displayEventModal) => () => displayEventModal('NEW_EVENT');

AddEventIcon.propTypes = propTypes;

AddEventIcon.defaultProps = defaultProps;

const mapStateToProps = state => {
  // const {  } = state;
  return {}
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    createNewEvent,
    displayEventModal
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddEventIcon);
