import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';
import dateService from '../../../../../../../../../services/dates/dateService';
import HoverableIcon from '../../../../../../../.././components/HoverableIcon/HoverableIcon';

const propTypes = {
  displayEventModal: PropTypes.func.isRequired,
  displayYear: PropTypes.number.isRequired,
  displayMonth: PropTypes.number.isRequired,
  displayDay: PropTypes.number.isRequired,
  dayOfWeekVal: PropTypes.number.isRequired //from the parent's loop, not the event itself
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
    const { dayOfWeekVal, displayEventModal, displayYear, displayMonth, displayDay } = this.props;
    const { isHoveredOver } = this.state;
    // The + and - of constants below is because dayOfWeekVal is a display number, thus with
    // monday indexed at 0 instead of sunday
    const day = dateService.getFirstMondayPreviousOrEqualToDay(displayYear, displayMonth, displayDay).day
      + (dayOfWeekVal === 0 ? 6 : dayOfWeekVal - 1);
    return (
      <Header size="medium" className="day-name" onMouseEnter={this.handleHoverEnter} onMouseLeave={this.handleHoverExit}>
        {dateService.dayStrRepArr[dateService.convertDay(dayOfWeekVal)]}
        <HoverableIcon name="add" onClickCb={displayEventModal} show={isHoveredOver}
          cbArgs={{ year: displayYear, month: displayMonth, day }} />
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


