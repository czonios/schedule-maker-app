import React from 'react';
import { Card, Modal, Button, Icon, Header } from 'semantic-ui-react';


const EditEvent = (props) => (

  <div>
    {/* modal */}
    <Modal trigger={props.show} closeIcon>
      <Header icon='archive' content='View Event' />

      {/* Show card */}
      <Card centered >
        <Card.Content extra className="event-start">
          {/* {event.time.start} */}
        </Card.Content>
        <Card.Content>
          <Card.Header>
            {/* {event.title} */}
          </Card.Header>
          <Card.Description>
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

