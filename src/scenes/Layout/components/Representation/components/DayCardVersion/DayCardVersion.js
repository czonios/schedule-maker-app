import React, { Component } from 'react';
import PropTypes from 'prop-types';
import timeService from '../../../../../../services/times/timeService';
import { Card } from 'semantic-ui-react';
import './DayCardVersion.css';
// import AddEventIcon from '.././AddEventIcon/AddEventIcon';
import HoverableIcon from '../../../../.././components/HoverableIcon/HoverableIcon';

const propTypes = {
  events: PropTypes.array.isRequired,
  condensed: PropTypes.bool,
  displayEventModal: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  displayYear: PropTypes.number,
  displayMonth: PropTypes.number,
  displayDay: PropTypes.number,
};

const defaultProps = {};

class DayCardVersion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHoveredOver: false
    }
  }
  render() {
    const { events, condensed, displayEventModal, deleteEvent, displayYear,
      displayMonth, displayDay } = this.props;
    const { isHoveredOver } = this.state;
    if (condensed) {
      return (
        <div className="day" >

          {timeService.sortEventsByTimeMutable(events).map((event, i) => {
            return (
              <Card key={i} fluid style={{ 'width': '100%', 'padding': '0px' }}
                onMouseEnter={() => this.handleHoverEnter(event.id)} onMouseLeave={this.handleHoverExit}               >
                <Card.Content extra className="event-start">
                  {event.time.start}
                  <HoverableIcon show={isHoveredOver === event.id} name="pencil" onClickCb={displayEventModal}
                    cbArgs={event.id} />
                  <HoverableIcon show={isHoveredOver === event.id} name="x" onClickCb={deleteEvent}
                    cbArgs={event.id} />
                </Card.Content>
                <Card.Content>
                  <Card.Header>
                    {event.title}
                  </Card.Header>
                </Card.Content>
                <Card.Content extra className="event-end">
                  {event.time.end}
                </Card.Content>
              </Card>
            )
          })
          }
        </div>
      )
    }
    return (
      <div className="day">
        <div style={{ textAlign: 'center' }} >
          <HoverableIcon name="add" onClickCb={displayEventModal} show={true}
            cbArgs={{ year: displayYear, month: displayMonth, day: displayDay }}
          />
        </div>
        {timeService.sortEventsByTimeMutable(events).map((event, i) => {
          return (
            <Card key={i} centered onMouseEnter={() => this.handleHoverEnter(event.id)}
              onMouseLeave={this.handleHoverExit}  >
              <Card.Content extra className="event-start">
                {event.time.start}
                <HoverableIcon show={isHoveredOver === event.id} name="pencil" onClickCb={displayEventModal}
                  cbArgs={event.id} />
                <HoverableIcon show={isHoveredOver === event.id} name="x" onClickCb={deleteEvent}
                  cbArgs={event.id} />
              </Card.Content>
              <Card.Content>
                <Card.Header>
                  {event.title}
                </Card.Header>
                <Card.Description>
                  {event.description}
                </Card.Description>
              </Card.Content>
              <Card.Content extra className="event-end">
                {event.time.end}
              </Card.Content>
            </Card>
          )
        })
        }
      </div>
    )
  }
  //For some reason I have to pass in the event.id directly with the inline function;
  //trying to give the element an id field and then accessing it, like I did elsewhere
  //caused odd bugs... maybe because of the looping?
  handleHoverEnter = (id) => {
    this.setState({ isHoveredOver: id });
  }
  handleHoverExit = () => {
    this.setState({ isHoveredOver: false });
  }
}


DayCardVersion.propTypes = propTypes;

DayCardVersion.defaultProps = defaultProps;

export default DayCardVersion;

