import React from 'react';
import { Card, Modal, Button, Icon, Header } from 'semantic-ui-react';


const EditEvent = () => (

  <div>
    {/* modal */}
    <Modal open={true} closeIcon dimmer="blurring">
      <Header icon='archive' content='View Event' />

      {/* Show card */}
      <Card centered >
        <Card.Content extra className="event-start">
          asdfasdfasdf
          {/* {event.time.start} */}
        </Card.Content>
        <Card.Content>
          <Card.Header>
            asdfsadfasdf
            {/* {event.title} */}
          </Card.Header>
          <Card.Description>
            asdfasdfadsfadsfadsf
            {/* {event.description} */}
          </Card.Description>
        </Card.Content>
        <Card.Content extra className="event-end">
          sadfasdfasdfads
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

