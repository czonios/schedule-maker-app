import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';
import dateService from '../../../../../../../../../services/dates/dateService';
import HoverableIcon from '../../../../../../../.././components/HoverableIcon/HoverableIcon';

const propTypes = {
  dayOfWeekVal: PropTypes.number.isRequired,
  displayEventModal: PropTypes.func.isRequired,
  displayYear: PropTypes.number.isRequired,
  displayMonth: PropTypes.number.isRequired
};

const defaultProps = {};

class DayHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHoveredOver: false
    };
  }

  render() {
    const { dayOfWeekVal, displayEventModal, displayYear, displayMonth } = this.props;
    const { isHoveredOver } = this.state;
    return (
      <Header size="medium" className="day-name" onMouseEnter={this.handleHoverEnter} onMouseLeave={this.handleHoverExit}>
        {dateService.dayStrRepArr[dateService.convertDay(dayOfWeekVal)]}
        <HoverableIcon name="add" onClickCb={displayEventModal} show={isHoveredOver}
          cbArgs={{ year: displayYear, month: displayMonth, day: '' }} />
      </Header>
    );
  }
  handleHoverEnter = () => {
    this.setState({ isHoveredOver: true });
  }
  handleHoverExit = () => {
    this.setState({ isHoveredOver: false });
  }
}

DayHeader.propTypes = propTypes;

DayHeader.defaultProps = defaultProps;

export default DayHeader;


