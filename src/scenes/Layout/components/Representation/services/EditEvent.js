import React from 'react';
import { Card, Modal, Button, Icon, Header } from 'semantic-ui-react';


const EditEvent = (props) => (

  <div>
    {/* modal */}
    <Modal open={true} closeIcon dimmer="blurring" onClose={props.setModal}>
      <Header icon='archive' content='View Event' />

      {/* Show card */}
      <Card centered >
        <Card.Content extra className="event-start">
          {props.event.time}
        </Card.Content>
        <Card.Content>
          <Card.Header>
            Event title today is {props.event.day}
            {/* {event.title} */}
          </Card.Header>
          <Card.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            {/* {event.description} */}
          </Card.Description>
        </Card.Content>
        <Card.Content extra className="event-end">
          
          {/* {event.time.end} */}
        </Card.Content>
      </Card>

      <Modal.Actions>
        <Button color='red'>
          <Icon name='remove' /> No
                    </Button>
        <Button color='green'>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  </div>

);

export default EditEvent;

